// requires
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = require('./base.config');
const paths = require('./base.config');

module.exports = merge(baseConfig, {
  output: {
    path: paths.DIST,
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve('./'),
      verbose: true,
      dry: false
    })
  ]
});
