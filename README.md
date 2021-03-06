# 最新版で学ぶ webpack 5 入門

JavaScript のモジュールバンドラ

- 基盤
  - https://ics.media/entry/12140/
- 応用
  - https://ics.media/entry/17376/

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

### package.json

```json
...
 "scripts": {
    "build": "webpack --mode development",
    "start": "webpack serve", // ホットリロード 起動
    "watch": "webpack --watch" // 監視とビルドのみ、より高速
  },
...
```

## CSS 設定

- term
  - yarn add -D webpack webpack-cli style-loader css-loader
- デバッグ出来るように DevTool で表示させるための設定
- https://github.com/BoxPistols/ics_webpack/commit/4c0ccb4781341447ad6c43994469111b21b762b6

### Sass

- term
  - yarn add -D webpack webpack-cli sass-loader sass style-loader css-loader
  - Add ↑ https://github.com/BoxPistols/ics_webpack/commit/f52296f368fa5a573f7b8353c9dc438479355582

### CSS を js に入れない MiniCssExtractPlugin

- term
  - yarn add -D webpack webpack-cli css-loader mini-css-extract-plugin
  - yarn add -D webpack webpack-cli css-loader sass sass-loader mini-css-extract-plugin
  - base.css などで独立 ↑ https://github.com/BoxPistols/ics_webpack/commit/4e4afe13906401cedb7ee9f87c431b34eae65d24
