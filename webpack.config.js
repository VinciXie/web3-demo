const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname, // string (absolute path!)

  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle-[hash:2].js", // string
  },

  mode: "development",

  module: {
    rules: [

    ]
  },

  plugins: [
    new htmlWebpackPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
  },
}

module.exports = config;
