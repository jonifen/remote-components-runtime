var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: "./src/js/index.jsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/main.js"
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.ejs'
    })
  ]
};