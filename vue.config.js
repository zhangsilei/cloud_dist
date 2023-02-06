const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://116.63.139.2/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
});
