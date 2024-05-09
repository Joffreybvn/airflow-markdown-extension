//webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JS_DIR = path.resolve(__dirname, "./mkdocs_airflow_graph/js");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    airflow_graph: path.resolve(JS_DIR, "./app/index.jsx"),
  },
  output: {
    path: path.resolve(JS_DIR, './dist'),
    filename: "[name].js", // "[name].[chunkhash].js",
    chunkFilename: "[name].js", // "[name].[chunkhash].js",
  },
  resolve: {
    alias: {
      // Be sure to update aliases in tsconfig.json
      src: path.resolve(JS_DIR, "./airflow"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-typescript"],
            },
          },
        ],
      },
      // Extract css files
      {
        test: /\.css$/,
        include: path.resolve(JS_DIR, "./app/"),
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
        ],
      },
      // Extract css files
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css", // "[name].[chunkhash].css",
      }),
  ]
};