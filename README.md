# サバイバルTypeScript 学習リポジトリ

[サバイバルTypeScript](https://typescriptbook.jp/)を学習するためのリポジトリです。

## 目的

TypeScriptの基礎から実践的な内容まで、手を動かしながら学習を進めます。

## 学習の進め方

1. サバイバルTypeScriptの各章を読む
2. 学んだ内容をこのリポジトリで実際にコードを書いて試す
3. 理解を深めるために実験的なコードも書いてみる

## 環境

- Node.js
- TypeScript 5.x
- ts-node (開発用)

## セットアップ

```bash
# 依存関係のインストール
npm install
```

## ファイルの実行方法

任意のTypeScriptファイルを直接実行できます：

```bash
# 特定のファイルを実行
npm run dev src/examples/01-basic-types.ts

# または
npm run dev src/index.ts
```

## プロジェクト構成

```
.
├── src/
│   ├── examples/       # 学習用のサンプルコード
│   │   ├── 01-basic-types.ts
│   │   ├── 02-functions.ts
│   │   └── 03-interface-type.ts
│   └── index.ts        # メインのエントリーポイント
├── dist/               # ビルド後のJavaScriptファイル
├── tsconfig.json       # TypeScript設定
└── package.json        # プロジェクト設定
```

## サンプルファイル

[src/examples/](src/examples/)に学習用のサンプルコードがあります：

- [01-basic-types.ts](src/examples/01-basic-types.ts) - 基本的な型
- [02-functions.ts](src/examples/02-functions.ts) - 関数の型定義
- [03-interface-type.ts](src/examples/03-interface-type.ts) - InterfaceとType

各ファイルは独立して実行できます。

## npm scripts

- `npm run build` - TypeScriptをJavaScriptにコンパイル
- `npm run dev <ファイルパス>` - 指定したTypeScriptファイルを直接実行
- `npm start` - ビルド済みのJavaScriptを実行

## 学習メモ

学習を進めながら、気づきや重要なポイントをここに追記していきます。
