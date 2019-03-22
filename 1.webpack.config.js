const path = require('path');

module.exports = {
  entry: './source/start.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'my-first-webpack.bundle.js'
  },
  mode: 'development',
  module:{
    // Массив с правилами обработки тех или иных файлов
    rules: [
      {
        // На какие файлы будет работать
        test: /\.js$/,
        // исключить папку
        exclude: /(node_modules)/,
        /*
          лоудеры - подпрограммы которые позволяют вебпаку обрабатывать
          не только js файлы но и другие.
          Так же расширают функцонал и добавляют специфичекую обработку для
          этого типа файлов
        */
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  }
};
