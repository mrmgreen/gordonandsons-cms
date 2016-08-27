const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.js',
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
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
