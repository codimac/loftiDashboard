const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const paths = require('./base.config');

module.exports = merge(baseConfig, {
    devServer: {
        inline: true,
        contentBase: paths.SRC,
        port: 8000,
        stats: {
            chunks: false,
        }
    },
})