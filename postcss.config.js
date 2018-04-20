module.exports = {
	plugins: {
		'autoprefixer': {
			browsers: ['last 10 versions']
		},
		'postcss-pxtorem': {
			rootValue: 100,
			propWhiteList: [],
		}
	}
}
