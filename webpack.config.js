const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const fs = require("fs");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  return {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./src/static",
            to: "static",
          },
        ],
      }),

      new MiniCssExtractPlugin({
        filename: "bundle.css",
      }),
    ],
    entry: ["./src/scripts/app.js", "./src/styles/global.scss"],
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
      sourceMapFilename: "[file].map",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                url: false,
                importLoaders: 2,
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")],
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        // {
        //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: [
        //     {
        //       loader: "file-loader",
        //       options: {
        //         name: "[name].[ext]",
        //         outputPath: "dist/static/fonts"
        //       }
        //     }
        //   ]
        // }
      ],
    },
  };
};
