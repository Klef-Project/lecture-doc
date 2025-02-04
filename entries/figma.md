---
title: Figma基礎研修
---

# Figmaとは

Figmaは、Webデザイン用のツールで、主にレイアウト案を作成するために使われます。  
Figma自体にはWebデザインツール(UIツールキット)である「Figma Design」の他にオンラインホワイトボードである「Figjam」とプレゼンテーションツールである「Figma Slide」が統合されていますが、今回は「Figma Design」を扱います。  

# Figmaの使い方

Figmaは**Webアプリケーション**で、ブラウザ経由で利用します。  
[https://www.figma.com](https://www.figma.com)にアクセスし、ログインするだけで使えます。

## Figmaの学割

Figmaには学割が用意されています...が、卒業予定年を聞かれますが4年後までしか選べない(=高専を想定していない)ので、今回はFreeプランで説明します。  
ちなみに、Figmaの学割プランでは、プロジェクトあたりのファイル数制限がなくなり、DevModeを使えます。

# Figmaの操作

## フレーム

Figmaでデザインをするときに、まずはじめにすることは**画面**を配置することです。当然ですね。  
ということで、デザインのベースになる画面を配置するには「フレーム」という機能を使います。  
フレームを挿入するには、左上のメニューバーの中から、カーソルの右隣のマークをクリックし、右ペイン内から適切なものをクリックします。また、Fキーを押すことでも左ペインをフレーム選択のものになります。

## 長方形(Rectangle)

Figmaを用いたデザイン、というかWebデザインでは基本的に長方形がベースになります。当然ですね。  
そのようによく使われる長方形については、フレームの右となりのボタンを押す、またはRキーを押すことで矩形選択の要領で入力できます。

## 直線(Line)

もちろん直線を入力することもできます。長方形のボタンの矢印を押すと、選択することができます。または、Lキーでも直線モードにできます。

## 矢印(Arrow)

矢印を入力することもできます。直線と同じ要領、またはShift+Lキーで選択できます。

## 円(Eclipse)

円も入力できます。直線と同じ要領、またはOキーで選択できます。

## 三角形(Polygon)、星(Star)

これらも入力できます。直線と同じ要領で選択できますが、ショートカットキーはありません。

## 画像・動画(Place Image/Video...)

ローカルから画像や動画を配置できます。直線と同じ要領、またはCtrl+Shift+Kでファイル選択ダイアログが開けるので、アップロードするファイルを選択すると、その画像を配置できます。

## 文字(Text)

文字は長方形の2つ右となりのボタンを押すと入力できます。

## Resources

文字の右となりのボタンを押すと、プロトタイプ内で定義したコンポーネントや公開されているコンポーネントを挿入することができます。

## ペン

ペンツールを使うことでも直線を引けます、が、このツールは**ベジエ曲線**という曲線を描くツールです。  
ベジエ曲線は、おおまかにいうとベクター形式の曲線のことです。色々いじってみてください。

## グループ化

グループ化は、2つ以上のオブジェクト(パーツ)を**1つのオブジェクトであるかのようにまとめて扱う**処理のことです。後述のコンポーネントとは全く違います。

## コンポーネント化

コンポーネント化とは、2つ以上のオブジェクトをまとめて**使い回せるようにしたテンプレート**にする処理のことです。グループはその場限りですが、コンポーネントは使いまわしが前提となります。

# 実習

ここまで学んだら、実際に何かを作ってみたいですよね？  
ということで、**ポートフォリオ**サイトのデザインを作成してみましょう。

## ポートフォリオとは

ポートフォリオは、**自分が持っている技術や自分の成果を1か所に集約したもの**です。作っておくと就職の時に便利(らしい)です。  
**React研修で使うので、必ずレイアウトを作成しておいてください**

## ポートフォリオに書くこと

- 名前
- 生年月日
- 居住地(都道府県〜市くらいまで、**絶対に住所をすべて書かないこと**)
- 所属
- 今までの成果
- GitHubアカウントのリンク
- SNSアカウントのリンク(特にLinkedInなど)
- その他(好きな色、部活、...)

など、**自己紹介+α**くらいのイメージで作成してください。

## レイアウト作成の注意事項

案外どんなレイアウトを組んでも構いませんが、**あとから変更できる**ので、**作れそう**なレベルで作成してください。  
長方形をメインで作成すると、比較的かんたんに作成できます。  
あまり複雑なページの場合はInkscapeというソフトウェアで**SVG**を扱ってもらう可能性もあるので、ほどほどにお願いします...  
また、今回は**アニメーションはなし**にしてください。
