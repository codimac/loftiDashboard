// requires
const webpack = require('webpack');
const path = require('path');
const paths = require('./paths')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.argv.indexOf('production') > -1;
const isDev = !isProd;

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
          browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9', /* React doesn't support IE8 anyway*/],
          flexbox: 'no-2009',
        })
      ]
    }
  }
];

const plugins = [
  new ExtractTextPlugin({
    filename: isDev ? '[name].css' : '[name].[contenthash:16].css',
    allChunks: true,
    disable: isDev
  }),
  new HtmlWebpackPlugin({
    template: path.join(paths.SRC, 'index.html'),
    filename: 'index.html',
  })
];

// config
module.exports = {
  entry: {
    bundle: [
      path.join(paths.STYLES, 'styles.scss'),
      path.join(paths.SRC, 'index.jsx')
    ]
  },
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
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      components: path.resolve(paths.SRC, 'components'),
      containers: '',
      styles: ''
    }
  },
  plugins
};
