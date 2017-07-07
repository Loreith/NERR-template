const webpack = require('webpack');
const path = require('path');

/*
 *  Webpack config for client bundle
 *
 *  Transforms react, js6+, and modules into a single minified bundle for client
 */

const config = {
  entry: ["babel-polyfill", "./client/index.jsx"],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "index.min.js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015", "es2016", "stage-0"],
          plugins: ["react-html-attrs", "transform-runtime", "transform-decorators", "transform-class-properties"],
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
};

module.exports = config;
