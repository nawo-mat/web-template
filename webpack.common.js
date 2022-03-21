const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const outputPath = path.join(__dirname, "dist");

module.exports = {
  context: path.join(__dirname, "src"),

  entry: `./index.js`,

  output: {
    path: outputPath,
    filename: "bundle.js",
    assetModuleFilename: "img/[name][ext][query]",
    clean: true,
  },
  target: ["web", "es5"],
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: true,
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
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
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: path.join(__dirname, "dist", "index.html"),
      // ビルドしたjsファイルを読み込む場所。デフォルトはhead
      inject: "body",
      alwaysWriteToDisk: true,
      favicon: "./favicon.ico",
    }),
    new MiniCssExtractPlugin({
      // 出力先の設定
      filename: "css/style.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src", "img"),
          to: path.join(__dirname, "dist", "img"),
        },
        {
          from: path.join(__dirname, "src", "fontawesome"),
          to: path.join(__dirname, "dist", "fontawesome"),
        },
      ],
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
};
