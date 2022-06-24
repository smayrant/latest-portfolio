const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    project1: "./src/project1.js",
    project2: "./src/project2.js",
    project3: "./src/project3.js",
    project4: "./src/project4.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        include: path.resolve(__dirname, "src/styles"),
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            include: path.resolve(__dirname, "src"),
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g)$/i,
        type: "asset/resource",
        include: path.resolve(__dirname, "src/img"),
        generator: {
          filename: "dist/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      favicon: "src/img/favicon-32x32.png",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "project1.html",
      template: "src/project1.html",
      favicon: "src/img/favicon-32x32.png",
      chunks: ["project1"],
    }),
    new HtmlWebpackPlugin({
      filename: "project2.html",
      template: "src/project2.html",
      favicon: "src/img/favicon-32x32.png",
      chunks: ["project2"],
    }),
    new HtmlWebpackPlugin({
      filename: "project3.html",
      template: "src/project3.html",
      favicon: "src/img/favicon-32x32.png",
      chunks: ["project3"],
    }),
    new HtmlWebpackPlugin({
      filename: "project4.html",
      template: "src/project4.html",
      favicon: "src/img/favicon-32x32.png",
      chunks: ["project4"],
    }),
    new MiniCssExtractPlugin(),
    require("autoprefixer"),
  ],
};
