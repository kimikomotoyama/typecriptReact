const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
      {test: /\.css/, use: ["style-loader", {loader: "css-loader", options: {}}]},
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
};