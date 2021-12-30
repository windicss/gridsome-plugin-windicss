function WindiPlugin(api, options) {

  const defaultConfig = {
    root: api._app.context,
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        '.git',
        'dist',
        '.cache',
        '.temp',
      ],
      include: []
    },
    preflight: {
      alias: {
        // add gridsome aliases
        'g-link': 'a',
        'g-image': 'img',
      }
    }
  }

  const merge = require('defu').arrayFn

  const config = merge(options, defaultConfig)

  const WebpackWindiCSSPlugin = require('windicss-webpack-plugin')

  api.chainWebpack((webpack) => {
    webpack.plugin('windicss').use(WebpackWindiCSSPlugin, [config])
  })
}


module.exports = WindiPlugin;
