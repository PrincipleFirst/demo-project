const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
  },
}
