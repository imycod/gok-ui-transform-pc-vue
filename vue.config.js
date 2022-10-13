const { defineConfig } = require('@vue/cli-service')
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
// https://webpack.js.org/configuration/dev-server/#devserver; v5

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      overlay: true
    },
    onBeforeSetupMiddleware: ({ app }) => require('./mock/mock-server.js')
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
})
