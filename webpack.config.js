//webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    airflow_graph: "./app/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].js", // "[name].[chunkhash].js",
    chunkFilename: "[name].js", // "[name].[chunkhash].js",
  },
  resolve: {
    alias: {
      // Be sure to update aliases in tsconfig.json
      src: path.resolve(__dirname, "airflow"),
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
        include: /app/,
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