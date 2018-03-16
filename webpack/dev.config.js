// requires
const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const paths = require('./paths');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: paths.SRC,
    port: 8000,
    // open: true,
    stats: {
      // modules: false,
      // timings: false,
      // children: false
    }
  },
})
