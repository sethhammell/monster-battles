module.exports = {
  publicPath: '/monster-battles',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Monster Battles";
        return args;
      })
  }
}
