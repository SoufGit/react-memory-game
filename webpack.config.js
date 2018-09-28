'use strict';

const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractSASS = new ExtractTextPlugin('styles/bundle.[hash].css');
const port = 3001

module.exports = (options) => {
  const dest = Path.join(__dirname, 'dist');

  let webpackConfig = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'babel-polyfill', './src/scripts/index.js'
    ],
    output: {
      path: dest,
      filename: 'bundle.[hash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: false
      })
    ],
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                'babel-preset-env', 
            "babel-preset-react",           
            "babel-preset-es2015",
            "babel-preset-stage-0",
        ],
          }
        }
      }]
    }
    };

  webpackConfig.plugins.push(
    new Webpack.HotModuleReplacementPlugin()
  );

  webpackConfig.module.rules.push({
    test: /\.s?css$/i,
    use: ['style-loader', 'css-loader?sourceMap=true', {
      loader: 'sass-loader',
      options: { includePaths: [Path.join(__dirname, 'src/styles')] }
    }]
  });

  webpackConfig.resolve = {
    extensions: ['.jsx','.css', '.js', '.es6']
  };

  webpackConfig.devServer = {
    contentBase: './src',
    hot: true,
    port,
    inline: true
  };

  return webpackConfig;
};
