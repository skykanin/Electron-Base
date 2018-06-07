const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',

	// Each entry has an array assigned so that webpack-hot-middleware can be merged into it in dev.
	// See: https://github.com/webpack-contrib/webpack-hot-middleware#use-with-multiple-entry-points-in-webpack
	// Also e.g.: https://github.com/webpack-contrib/webpack-hot-middleware/issues/197
	entry: {
		app: ['./src/index.jsx'],
	},
	plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'static/index.html'
    }),
	
	
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [
				'babel-loader',
			],
		}],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
