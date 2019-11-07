const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;

const styledComponentsTransformer = createStyledComponentsTransformer();

// eslint-disable-next-line
const modeConfig = env => require(`./build-scripts/webpack.${env.mode}`);

module.exports = (
  { mode, presets } = {
    mode: "production",
    presets: []
  }
) => {
  return webpackMerge(
    {
      mode,
      entry: ["babel-polyfill", "./src/index.tsx"],
      output: {
        path: path.join(__dirname, "./public"),
        filename: "./bundle.js",
        publicPath: "/"
      },
      devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        port: 8080
      },
      resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"],
        alias: {
          packages: path.resolve(__dirname, "packages/"),
          src: path.resolve(__dirname, "src/"),
          components: path.resolve(__dirname, "src/components/")
        }
      },
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "babel-loader"
              }
            ]
          },
          {
            test: /\.(s*)css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            exclude: /node_modules/,
            options: {
              getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
            }
          }
        ]
      },
      plugins: [new webpack.ProgressPlugin()]
    },
    modeConfig({
      mode,
      presets
    })
  );
};
