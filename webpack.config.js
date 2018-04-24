import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import lessToJs from 'less-vars-to-js'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const { NODE_ENV } = process.env
const modifyVars = lessToJs(fs.readFileSync(path.join(__dirname, 'assets/styles/__theme.less'), 'utf8'))

const webpackConfig = {
	mode: NODE_ENV || 'development',

	entry: {
		polyfill: ['babel-polyfill'],
		index: [
			path.join(__dirname, './src/index.tsx')
		],
	},

	output: {
		filename: 'entry.[name].js',
		chunkFilename: '[name].js',
		path: path.join(__dirname, 'dist'),
		publicPath: './',
	},

	resolve: {
		modules: ['node_modules'],
		extensions: ['.json', '.jsx', '.js', '.ts', '.tsx'],
		alias: {
			assets: path.resolve(__dirname, 'assets'),
		},
	},

	plugins: [
		/*eslint-disable */
		new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn|en-gb)$/),
		/*eslint-enable */
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: true,
		}),
	],

	module: {
		rules: [
			{
				test: /\.(eot|JPEG|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}],
			},
			{
				test: /\.(ts|tsx)$/,
				use: ['babel-loader', 'ts-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(less)$/,
				include: [
					path.resolve(__dirname, 'src'),
				],
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: true,
							importLoaders: 1,
							localIdentName: '[name]-[local]__[hash:base64:5]'
						}
					},
					'postcss-loader',
					{
						loader: 'less-loader',
						options: {
							modifyVars,
						},
					},
				]
			},

			{
				test: /\.(less)$/,
				exclude: [
					path.resolve(__dirname, 'src'),
				],
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					{
						loader: 'less-loader',
						options: {
							modifyVars,
						}
					}
				]
			},
		]
	},
}

if (NODE_ENV !== 'production') {
	webpackConfig.entry.index = [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://0.0.0.0:8080/',
		...webpackConfig.entry.index
	]
	webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
	// webpackConfig.module.rules = [
	// 	...webpackConfig.module.rules,

	// ]
	// env is production
} else {
	webpackConfig.plugins.push(new BundleAnalyzerPlugin())
	webpackConfig.plugins.push(new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// both options are optional
		filename: 'styles/[name].[chunkhash:8].css',
		chunkFilename: 'styles/[id].chunk.[chunkhash:8].css'
	}))

	webpackConfig.optimization = {
		// runtimeChunk 为true时，会把一个js文件变成2个，总体积变小一点点。但是好像~~好像没什么卵用
		runtimeChunk: false,
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			minChunks: 1,
			maxAsyncRequests: 1,
			maxInitialRequests: 1,
			name: true,
			cacheGroups: {
				vendor: {
					name: 'vendor',
					filename: '[name].[chunkhash:8].js',
					chunks: 'all',
					test: /react|react-dom|moment/,
					minChunks: 1,
					enforce: true
				},
			},
		}
	}
	webpackConfig.output.filename = 'core/[name].[chunkhash:8].js'
	webpackConfig.output.chunkFilename = 'core/[name].[chunkhash:8].js'
	// webpackConfig.module.rules = [
	// 	...webpackConfig.module.rules,
	// ]
	webpackConfig.module.rules.forEach(item => {
		if (item.test.toString() == /\.(less)$/.toString()) {
			item.use.splice(1, 0, MiniCssExtractPlugin.loader)
			item.use.forEach((i, index) => {
				if (i === 'css-loader') {
					item.use[index] = {
						loader: 'css-loader',
						options: { minimize: true }
					}
				}
				else if (typeof i === 'object' && i.loader == 'css-loader') {
					i.options.minimize = true
					i.options.sourceMap = false
				}
				else return
			})
		}
	})
}


console.log(webpackConfig.module.rules)


export default webpackConfig
