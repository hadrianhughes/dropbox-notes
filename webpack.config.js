const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index',
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' }
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new CopyPlugin([{ from: 'static' }])
	]
};

