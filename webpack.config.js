const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      'styles': path.resolve(__dirname, "src/assets/styles/"),
    },
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
};
