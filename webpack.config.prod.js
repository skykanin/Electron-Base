
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const base = require('./webpack.config.base');
module.exports = webpackMerge(base, {
  mode: 'production',


  plugins: [
    new CleanWebpackPlugin(['dist']),

  ],

});
