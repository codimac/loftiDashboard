// requires
const webpack = require('webpack');
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// paths
const paths = {
    DIST: path.resolve(__dirname, '../dist'),
    PUBLIC: path.resolve(__dirname, '../public'),
    SRC: path.resolve(__dirname, '../src'),
    STYLES: path.resolve(__dirname, '../src/styles')
};

const plugins = [
    new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html'),
        filename: 'index.html'
    }),
];

// config
const config = {
    entry: [
        path.resolve(paths.SRC, 'index.jsx'),
        path.resolve(paths.STYLES, 'app.scss')
    ],
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        modules: ['node_modules', paths.SRC],
        extensions: ['.json', '.js', '.jsx', '.scss', '.css']
    },
    plugins
};

module.exports = config;