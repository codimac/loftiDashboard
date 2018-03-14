// requires
const webpack = require('webpack');
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// paths
const paths = {
    DIST: path.resolve(__dirname, '../dist'),
    SRC: path.resolve(__dirname, '../src'),
    PUBLIC: path.resolve(__dirname, '../public')
};

const plugins = [
    new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html'),
        filename: 'index.html'
    }),
];

// config
const config = {
    entry: path.resolve(paths.SRC, 'index.jsx'),
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    resolve: {
        modules: ['node_modules', paths.SRC],
        extensions: ['.json', '.js', '.jsx']
    },
    plugins
};

module.exports = config;