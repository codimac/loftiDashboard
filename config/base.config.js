// requires
const webpack = require('webpack');
const path = require('path');
const paths = require('./paths')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.argv.indexOf('production') > -1;
const isDev = !isProd;


// ALIAS
const alias = {
  '@modules': path.resolve(paths.SRC, 'modules'),
  '@shared': path.resolve(paths.SRC, 'shared'),
  '@env': path.resolve(paths.SRC, 'environments'),
  '@styles': path.resolve(paths.STYLES),
  images: path.resolve(paths.IMG)
};

// loaders
const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      minimize: isProd
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
    inject: 'body'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
    }
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
  resolve: {
    modules: ['node_modules', paths.SRC],
    extensions: ['.js', '.jsx'],
    alias
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        'eslint-loader'
        ]
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
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name (file) {
                if (isProd) return 'assets/[hash:16].[ext]'
                return '[name].[ext]'
              }
            }
          },
          {
            loader: 'img-loader',
            options: {
              enabled: isProd
            }
          },
        ]
      }
    ]
  },
  plugins
};
