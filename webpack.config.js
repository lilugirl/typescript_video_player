const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  devServer: {
    contentBase: "/dist",
    open: true
  },
  resolve: {
    "extensions": ['.ts', '.js', '.json']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      exclude: [path.resolve(__dirname, 'src/components')]
    }, {
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      }],
      include: [path.resolve(__dirname, 'src/components')]
    }, {
      test: /\.(eot|woff2|woff|ttf|svg)$/,
      use: ['file-loader']
    }, {
      test: /\.ts$/,
      use: ['ts-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  mode: "development",
  devtool: "inline-source-map"
}