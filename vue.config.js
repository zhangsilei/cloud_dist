const { defineConfig } = require('@vue/cli-service');
const testEnv = 'http://116.63.139.2/';
const prodEnv = 'http://176.123.9.123:8080/';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: testEnv,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
});
