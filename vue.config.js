const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  publicPath: "./",
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": require("path").resolve(__dirname, ""),
      },
      extensions: [".tsx", ".ts", ".js", ".json"],
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    },
  },
});
