# Webpack5 を使用した WEB 制作テンプレート

WEB 制作の文脈で Webpack5 を使いたい人のためのテンプレートです。

## 使い方

開発時：
`npm run start`

本番ビルド時：
`npm run build`

## 設定

設定ファイルを以下の 3 つに分割しています。

1. `webpack.common.js`：共通設定
2. `webpack.dev.js`：開発用設定
3. `webpack.prod.js`：本番ビルド用設定

### 共通設定

- 出力先は`dist`ディレクトリ
- 出力ファイル名は`bundle.js`
- エントリポイントは`index.js`
- ビルドキャッシュを有効化
- css ファイルを別で書き出し
- Sass(SCSS/SASS)に対応
- Babel で ES5 へトランスパイル
- サイズが 100KB 未満の画像は JS にバンドル
- `~`を`src`ディレクトリとしてエイリアス
- html も`/dist`へ出力
- ビルドした JS を html のボディ最下部へ挿入
- ファビコンを html へバンドル
- fontawesome6 Free を使用可
- リセットCSSは`destyle.css`
- jQueryに対応

### 開発用設定

- ファイルの変更を監視
- [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)をオン
- 実行時にブラウザを自動立ち上げ

### 本番ビルド用設定

- 画像を圧縮（設定いろいろ）
- webp を生成
