module.exports = {
	entry: {
		main: ['./src/index.js']
	},
	devtool: 'source-map',
	output: {
		filename: './dist/bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [
					{ loader: 'babel-loader?cacheDirectory' }
				]
			}
		],
	}
};
