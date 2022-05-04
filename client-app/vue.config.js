const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  },
  // publicPath: '/monster-battles',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Monster Battles";
        return args;
      })
  }
}
