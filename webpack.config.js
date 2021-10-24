const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'production'

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development'


module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js'
  },
  module: {
    rules: [
      // CSSファイルの読み込み
      {
        // 対象となるファイルの拡張子
        test: /\.scss/,
        // ローダー名
        use: [
          // CSSファイルを書き出すオプションを有効にする
          {
            loader: MiniCssExtractPlugin.loader
          },
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップを有効にする
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  },

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    static: 'dist',
    open: true
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'base.css'
    })
  ],

  // ES5(IE11等)向けの指定
  target: ['web', 'es5']
}
