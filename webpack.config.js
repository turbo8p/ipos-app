const path = require("path");

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
  resolve: { extensions: [".wasm", ".tsx", ".ts",  ".mjs", ".cjs", ".js", ".json"] },
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
    port: 3000
  }
};