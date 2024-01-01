const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:52556",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    // port: 8000,
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
