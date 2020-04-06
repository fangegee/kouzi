
module.exports = {
  devServer: {
    port: 8080,
    // open: true, //配置自动启动浏览器
    proxy: {
      "/api": {
        target: "http://192.168.1.10:8080", //后端ip地址及端口
        ws: true, //是否跨域
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
