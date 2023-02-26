const { defineConfig } = require('@vue/cli-service');
const testEnv = 'http://140.210.213.108/';
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
