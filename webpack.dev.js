const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    open: true
  }
});