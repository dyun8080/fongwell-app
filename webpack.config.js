import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const { NODE_ENV } = process.env

console.log(NODE_ENV)

const webpackConfig = {
	mode: NODE_ENV || 'development',

	entry: {
		babelPolyfill: ['babel-polyfill'],
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

	optimization: {
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
	},

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
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
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
} else {
	webpackConfig.plugins.push(new BundleAnalyzerPlugin())
	webpackConfig.output.filename = '[name].[chunkhash:8].js'
}

export default webpackConfig
