// const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".json"],
      fallback: {
        fs: false,
        path: false,
        os: false,
        // fs: false,
        // tls: false,
        // net: false,
        // zlib: false,
        // http: false,
        // https: false,
        // stream: false,
        // crypto: false,
        // util: require.resolve("util/"),
        // path: require.resolve("path-browserify"),
      },
    },
    // cache: {
    //   type: "filesystem",
    //   allowCollectingMemory: true,
    // },
    plugins: [
      new NodePolyfillPlugin(),
      // new webpack.ProvidePlugin({
      //   process: "process/browser",
      // }),
    ],
  },
});
