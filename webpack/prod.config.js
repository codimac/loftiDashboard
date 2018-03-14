// requires
const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const paths = require('./base.config');

module.exports = merge(baseConfig, {
    output: {
        path: paths.DIST,
        filename: 'bundle.js'
    }
});