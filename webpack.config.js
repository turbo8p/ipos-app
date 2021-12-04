const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".tsx", ".ts", "js"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
      publicPath: "/",
    },
    port: 3000,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};