# 最新版で学ぶ webpack 5 入門

JavaScript のモジュールバンドラ

https://ics.media/entry/12140/

## SetUp

- term
  - yarn init
  - yarn add -D webpack webpack-cli
- create
  - src/
    - index.js
      - import...
    - sub.js
      - export...
- term
  - npx webpack
    - res
      - dist/main.js

## webpack.config.js

```js
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js'
  }
}
```

## Hot Reload

- term
  - yarn add -D webpack webpack-cli webpack-dev-server
