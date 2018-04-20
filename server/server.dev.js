import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from '../webpack.config.js'
// import config from '../config'
// import bodyParser from 'body-parser'
// import oauthRoute from './oauthRoute'

const compiler = webpack(webpackConfig)

const server = new WebpackDevServer(compiler, {
	// webpack-dev-server options
	stats: {
		colors: true
	},

	contentBase: webpackConfig.output.path, //本地服务器所加载的页面所在的目录
	// Can also be an array, or: contentBase: "http://localhost/",

	hot: true,
	// Enable special support for Hot Module Replacement
	// Page is no longer updated, but a "webpackHotUpdate" message is sent to the content
	// Use "webpack/hot/dev-server" as additional module in your entry point
	// Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

	historyApiFallback: true, //不跳转
	// Set this as true if you want to access dev server from arbitrary url.

	before: () => {
		// Here you can access the Express app object and add your own custom middleware to it.
		// For example, to define custom handlers for some paths:
		// app.get('/some/path', function (req, res) {
		// 	res.json({
		// 		custom: 'response'
		// 	});
		// });
		// app.use(bodyParser.json())
		// app.use(bodyParser.urlencoded({ extended: false }))
		// oauthRoute(app)
	},
})


server.listen(8080)
