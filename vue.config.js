const { defineConfig } = require('@vue/cli-service')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ViewUiResolver } = require('unplugin-vue-components/resolvers')

const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

// https://webpack.js.org/configuration/dev-server/#devserver; v5

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    return {
      plugins: [
        // AutoImport({
        //   resolvers: [ViewUiResolver()],
        // }),
        // Components({
        //   resolvers: [ViewUiResolver()],
        // }),
      ]
    }
  },
  devServer: {
    // port: 8080,
    // open: false,
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
