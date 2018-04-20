import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const { NODE_ENV } = process.env

const webpackConfig = {
	entry: {
		index: path.join(__dirname, './src/index.tsx'),
	},
	output: {
		filename: 'entry.[name].js',
		chunkFilename: '[name].js',
		path: path.join(__dirname, 'dist'),
		publicPath: './',
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
		})
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
				// use: ['ts-loader'],
				exclude: /node_modules/,
			},
		]
	},
}

if (NODE_ENV !== 'production') {
	// webpackConfig.devtool = 'eval'
	// webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
	// webpackConfig.plugins.push(new BundleAnalyzerPlugin())
	webpackConfig.output.filename = '[name].[chunkhash:8].js'
}

export default webpackConfig
