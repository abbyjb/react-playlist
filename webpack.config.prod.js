const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: "source-map",
  node: { fs: "empty" },
  output: {
    filename: "static/[name].[hash].js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [ "html-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}