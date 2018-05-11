// requires
const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const paths = require('./paths');

module.exports = merge(baseConfig, {
  output: {
    publicPath: '/'
  },
  devServer: {
    contentBase: paths.SRC,
    publicPath: '/',
    port: 8000,
    historyApiFallback: true,
    open: true,
  },
  devtool: 'eval-source-map',
})
