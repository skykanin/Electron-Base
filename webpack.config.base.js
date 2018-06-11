const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.jsx'],
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html'
    }),
    new FlowBabelWebpackPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};