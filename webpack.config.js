var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './static/js/index',

  output: {
      path: path.resolve('./static/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,query: {
        presets: ['es2015']
    } },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,query: {
        presets: ['es2015']
    } },
      { test: /\.css$/,loader: "style-loader",loader: "css-loader" ,options: { url: false }, exclude: /node_modules/ },
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ]
  },



  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx']
  },


};