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
		index: [
			// 'babel-polyfill',
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
			'@components': path.resolve(__dirname, 'src/components'),
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
							minimize: !(NODE_ENV !== 'production'),
							sourceMap: !!(NODE_ENV !== 'production'),
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
					{
						loader: 'css-loader',
						options: { minimize: !(NODE_ENV !== 'production') }
					},
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


/**
|--------------------------------------------------
| development
|--------------------------------------------------
*/
if (NODE_ENV !== 'production') {
	webpackConfig.devtool = 'cheap-module-eval-source-map'
	webpackConfig.entry.index = [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://0.0.0.0:8080/',
		...webpackConfig.entry.index
	]
	webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
}
/**
|--------------------------------------------------
| production
|--------------------------------------------------
*/
else {
	webpackConfig.plugins.push(new BundleAnalyzerPlugin())
	webpackConfig.plugins.push(new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// both options are optional
		filename: 'styles/[name].[chunkhash:8].css',
		chunkFilename: 'styles/[id].chunk.[chunkhash:8].css'
	}))
	// webpackConfig.optimization = {
	// 	splitChunks: {
	// 		name: true,
	// 		cacheGroups: {
	// 			// commons: {
	// 			// 	chunks: 'initial',
	// 			// 	minChunks: 6
	// 			// },
	// 			vendors: {
	// 				test: /[\\/]node_modules[\\/]/,
	// 				chunks: 'all',
	// 				priority: -10
	// 			}
	// 		}
	// 	},
	// 	// runtimeChunk: true
	// }
	webpackConfig.output.filename = 'core/[name].[chunkhash:8].js'
	webpackConfig.output.chunkFilename = 'core/[name].[chunkhash:8].js'
	// webpackConfig.module.rules = [
	// 	...webpackConfig.module.rules,
	// ]
	webpackConfig.module.rules.forEach(item => {
		if ([/\.(less)$/.toString(), /\.(css)$/.toString(),].includes(item.test.toString())) {
			item.use.splice(1, 0, MiniCssExtractPlugin.loader)
		}
	})
}

export default webpackConfig
