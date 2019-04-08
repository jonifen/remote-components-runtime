var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = [
  {
    entry: "./main-project/src/js/index.jsx",
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
        template: 'main-project/src/index.ejs'
      })
    ]
  },
  {
    entry: {
      jonifenDropdown: "./jonifen-remote-dropdown/src/index.jsx",
      jonifenTextbox: "./jonifen-remote-textbox/src/index.jsx"
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "js/[name].umd.js",
      libraryTarget: 'umd',
      library: '[name]',
      umdNamedDefine: true
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
    }
  }
];