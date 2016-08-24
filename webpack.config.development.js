const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'index.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
  },
  module: {
    loaders: [
      {
        test: /(node_modules\/react-epg-component)/,
        loader: 'babel',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(json)$/,
        loader: 'json-loader',
      },
      {
        test: /^((?!\.local).)*\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?sourceMap'),
      },
      {
        test: /\.local.s?css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap' /* eslint max-len: ["error", 800000, 4] */
        ),

      },
    ],
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
