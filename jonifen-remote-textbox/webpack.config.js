var path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/textbox.js"
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
};