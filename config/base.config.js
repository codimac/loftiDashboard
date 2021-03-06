// requires
const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const alias = require('./alias');

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
      importLoaders: 1,
      minimize: isProd
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('autoprefixer')({
          browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9', /* React doesn't support IE8 anyway */],
          flexbox: 'no-2009',
        }),
      ]
    }
  }
];

const plugins = [
  new ExtractTextPlugin({
    filename: isDev ? '[name].css' : '[name].[hash:16].css',
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
    extensions: ['.js', '.jsx', 'json', '.css', '.scss'],
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
        exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            ...cssLoaders
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            ...cssLoaders,
            {
              loader: 'sass-loader',
              options: {
                data: [
                  '@import "_variables";'
                ],
                includePaths: [path.resolve(paths.STYLES, 'abstracts')]
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                if (isProd) return './public/images/[hash:16].[ext]'
                return '[name].[ext]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins
};
