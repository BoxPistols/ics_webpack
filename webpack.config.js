// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development'

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
        test: /\.css/,
        // ローダー名
        use: [
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップを有効にする
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  },
  // ES5(IE11等)向けの指定
  target: ['web', 'es5'],
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    static: 'dist',
    open: true
  }
}
