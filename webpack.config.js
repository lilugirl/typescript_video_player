const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  mode: "development"
}