// requires
const webpack = require('webpack');
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// paths
const paths = {
  DIST: path.resolve(__dirname, '../dist'),
  PUBLIC: path.resolve(__dirname, '../public'),
  SRC: path.resolve(__dirname, '../src'),
  STYLES: path.resolve(__dirname, '../src/styles')
};

// loaders
const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('autoprefixer')({
          browsers: ['last 2 versions', 'ie > 8']
        })
      ]
    }
  }
];

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(paths.SRC, 'index.html'),
    filename: 'index.html',
  }),
  new ExtractTextPlugin({
    filename: '[name].[contenthash:16].css',
    allChunks: true,
  })
];

// config
const config = {
  entry: [
    path.resolve(paths.SRC, 'index.jsx'),
    path.resolve(paths.STYLES, 'styles.scss')
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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            ...cssLoaders
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            ...cssLoaders,
            'sass-loader'
          ]
        })
      },
    ]
  },
  resolve: {
    modules: ['node_modules', paths.SRC],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins
};

module.exports = config;