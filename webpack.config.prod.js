const base = require("./webpack.config.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  ...base,
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
      chunkFilename: "src/style.css",
      ignoreOrder: false
    })
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              hmr: process.env.NODE_ENV === "production"
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};
