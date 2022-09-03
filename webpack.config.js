const webpack = require('webpack')
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.md$/,
        use:  ['html-loader' ,'./loader/markdown-loader.js']
      }
    ]
  }
}
