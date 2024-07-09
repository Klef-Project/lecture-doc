---
title: フロントエンド
---

# はじめに

本研修を行う前に、以下のパッケージがインストールされていることを確認してください。

- Node.js
- npm
- pnpm

---

この研修では、フロントエンド開発の概要及びHTML/CSSについて学びます。  
今回も実際に手を動かしてもらうので、手元のPCの電源をONにしておいてください。

# フロントエンドとは

フロントエンドは、Web業界の用語で、主に**ユーザーから見えるところ**のことを指します。対義語はバックエンドです。  
本研修では、HTML/CSSというフロントエンドの制作のコアとなる技術を学びます。  
それと同時に、フロントエンドフレームワークであるNuxt.jsを用いて現在Web開発の主流となっている**コンポーネント指向**の考え方を学び、それに基づくWebアプリケーションを制作できるようにしていきます。

## コンポーネント指向とは

コンポーネント指向とは、Webサイトなどを1つの大きなまとまりではなく、いくつもの小さなまとまり(=**コンポーネント**)の組み合わせと考え、そのコンポーネント単位で設計を行い、それを組み合わせてWebサイトを制作する、という開発手法です。

### コンポーネント指向のメリット

- レイアウトの変更が容易
- 同じような構造の使い回しが可能

### コンポーネント指向のデメリット

- コンポーネントの分け方が人によって違う
- ファイルが多くなる

## Node.jsとは

Node.jsとは、**JavaScriptランタイム**の1つであり、フロントエンド開発によく使われます。基本的に、フロントエンド開発ではNode.jsから逃げることはできません。  

今回は、Nuxt.jsというフロントエンドフレームワークを動かすために使います。

## npm/pnpmとは

それぞれ、Node Package manager/Performant NPMの略で、Node.jsの**パッケージマネージャー**です。これを使うことで、Nuxt.jsやNext.js、その依存パッケージとかをかんたんに導入できます。

## Nuxt.jsとは

Nuxt.jsは*Vue.js*をベースに開発された**フロントエンドフレームワーク**です。  
**SSR**や**SPA**に対応しています。

### Vue.jsとは

Vue.jsはAnthony fu氏が開発したjavaScript**ライブラリ**で、**TypeScript**にも対応しています。  
Vue.jsではHTML/CSS/JavaScriptをすべてまとめて1つのファイルに書くことができるのが最大の特徴といえ、それによって1つのコンポーネントあたり1つのファイル、という状態にできます。

### TypeScriptとは

TypeScriptは、Microsoftが開発した、JavaScriptの上位互換にあたる言語です。  
**型注釈**ができるのが最大の特徴といえます。

### 型注釈とは

変数を定義するときにその変数がとり得る値を**型**として併記することを**型注釈**といいます。
ここでいう「型」は、int(整数)、bool(真偽値)、string(文字列)などです。  
また、「型」はプログラミング言語によって違うので注意が必要です。

### SSRとは

SSRはServer-Side Renderingの略で、Webサイトを表示するときに、クライアント側で処理するのではなく、サーバー側で処理をして、その結果をクライアント側に返す、一連の処理のことです。

### SPAとは

SPAはSingle Page Applicationの略で、ページ遷移やリロードではなく非同期処理などを用いて1つのページで完結させるWebアプリのことです。
具体的は、FacebookやGoogle Map、TeamsやSlackなどがSPAアプリケーションの例として挙げられます

### フロントエンドフレームワークとは

フロントエンドフレームワークは、フロントエンド開発に必要な機能やあったら便利な機能をまとめたもので、主にJavaScriptで書かれます。  
数えだしたらきりがないほど大量にあり、現在よく使われるのはNext.js、Gatsby.js、Nuxt.js、Angular.jsです。  
また、フレームワークを使わない純粋なJavaScriptはVanilla JSと呼ばれます。

# HTML

## HTMLとXML

HTMLは前述の通り、HyperText Markup Languageの略です。  
そのHTMLは**タグ**で文字列を囲むことで文字列に意味をもたせます。  
この文字列に意味をもたせることを**マークアップ**といい、HTMLのようにタグを用いて情報を記述する言語形式を**XML**といいます。  
Web系で扱うXML系の言語は、HTML以外に**SVG**というベクター形式の画像データがあります。

## マークアップ言語

マークアップを行う言語はHTMLだけではないですが、HTMLはマークアップ言語の中では比較的自由度が高いと言われています。しかし、一般にHTMLはタグで囲むという特徴上少し書きにくいです。  
そこで、主にHTMLを簡略化するという形で作られた言語があり、それらは**軽量マークアップ言語**とよばれます。  
軽量マークアップ言語には、MarkdownやAsciidocなどが該当します。

## 開始タグと終了タグ

さきほど、「HTMLはタグで囲む」と言いましたが、全く同じもので囲むというわけではありません。  
HTMLは**ネストする**(=入れ子にする)ことができるためです。  
そのため、HTMLには**開始タグ**と**終了タグ**があります。  
pタグを例にとると、開始タグは`<p>`、終了タグは`</p>`となります。**終了タグにのみスラッシュ**が入ります。

## 属性

HTMLでは、開始タグの中に、コマンドにおけるオプションのような立ち位置で**属性**というものがあります。  
以下のような書き方をします。


```
<p class="paragraph" id="contents">contents</p>
```

これの`class`と`id`がそれぞれ属性となります。

主な属性としては、以下のようなものがあります。

- class: 主にCSSでスタイルを指定するためにつけます。Reactでは"className"と書きます。
- id: その要素が一意に定まる名称です。JavaScriptなどで利用します。

# 主要なHTMLタグ

## `<h1>`\~`<h6>`

h: Header (見出し)

`<h1>`~`<h6>`タグは、見出しを作るタグです。　`<h1>`タグが一番大きく、`<h6>`タグが一番小さいです。  
`<h1>`タグによる見出しを**第1レベル**見出しと呼び、同様に`<h6>`タグによる見出しを**第6レベル**といいます。

## `<p>`

p: Paragraph (段落)

`<p>`タグは、段落を作るタグで、主に本文を書く時に使います。

## `<br>`

br: BReak (改行)

`<br>`タグは、そのタグをおいたところで改行するタグです。**終了タグは必要ありません**  
ReactやVueなどでは**`<br />`**という書き方をします。

## `<strong>`/`<b>`

strong (強調)  
b: Bold (太字)

`<strong>`タグと`<b>`タグは、ともに囲まれた部分を太字にするタグです。  
`<strong>`はSEO的にも強調されますが、`<b>`タグは見た目だけ変わります。  
スタイルシートで代替可能なので、可能な限りCSSで指定しましょう。

## `<i>`

i: Italic (イタリック体)

`<i>`タグは囲まれた部分をイタリック体、すなわち斜体にするタグです。  
イタリック体は工学系ではよく使う表現なので覚えておきましょう。  
スタイルシートで...(以下略)

## `<u>`

u: Underline

`<u>`タグは囲まれた部分にアンダーライン、すなわち下線をひくタグです。  
CSSのborder-bottom(後述)よりも線の位置が文字ギリギリになります。
**`<u>`タグは(の従来の用法)は非推奨なので、CSSを使いましょう。**

## `<s>`/`<strike>`/`<del>`

s: strike (打ち消し)  
d: delete (削除)

`<s>`タグと`<strike>`タグは同じ意味で、双方ともに囲まれた部分に打ち消し線を引きます。  
**`<s>`タグと`<strike>`タグはともに非推奨なので、CSSを使いましょう。**  
また、`<del>`タグは削除された部分を示すタグです。SEO的にそのような意味を持つので、そのような意味を持たせたいときは`<del>`タグを使いましょう。

## `<table>`/`<tr>`/`<th>`/`<td>`

table (表)  
tr: Table Row (表の行)
th: Table Header (表の見出し)  
td: Table Data (表のデータ)

これらのタグは、表を構成するタグです。  
それぞれの役割は...名称のとおりです。

## `<thead>`/`<tbody>`/`<tfoot>`

thead: Table HEADer  
tbody: Table BODY  
tfoot: Table HOOTer

これらのタグは、前述の4つのタグと組み合わせることがあるタグたちです。  
省略可能ですが、これらのタグを使うことで、「ヘッダーだけスタイル変える」などができるようになります。

tableの実装例

```html
<table>
  <thead>
    <tr>
      <th>Header1</th>
      <th>Header2</th>
      <th>Header3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body1-1</td>
      <td>Body1-2</td>
      <td>Body1-3</td>
    </tr>
    <tr>
      <td>Body2-1</td>
      <td>Body2-2</td>
      <td>Body2-3</td>
    </tr>
  </tbody>
</table>
```

| Header1 | Header2 | Header3 |
| --- | --- | --- |
| Body1-1 | Body1-2 | Body1-3 |
| Body2-1 | Body2-2 | Body2-3 |

## `<div>`/`<span>`

div: divition (分割)  
span (\~の間)

`<div>`タグは、HTMLの一部を切り出してそこの間についてclassなどを設定するタグで、`<span>`タグはタグの中の一部を切り出してそこについてclassなどを設定するタグです。

...ちょっとわかりにくいので、以下に例を示します。

```html
<div class="title">
  <h1>Title</h1>
  <h2>Subtitle</h2>
</div>
<p>
    spanタグは<span class="highlight">このように</span>
    一部のスタイルを変えることができます。
</p>
```

```css
.title{
    color: blue;
}
.highlight{
    color: red;
}
```

## `<img>`

img: IMaGe (画像)

`<img>`タグは、画像(jpeg/png/svg/webpなど)をリンクで表示するタグです。**終了タグはない**です。  
`<img src="path/to/image" alt="alternative text">`という形で書きます。  
Reactなどでは`<img src="path/to/image alt="alternative text" />`というように、最後にスラッシュを入れます。

## `<button>`

`<button>`タグは、その名の通りボタンを表示するタグです。
`<button>label text</button>`という形で書きます。

## `<input>`

`<input>`タグは、さまざまな入力(テキストボックス、リスト、ラジオボタンなど)を表示するタグです。  
`<input type="type" />`という形で書きます。  
typeにとり得るのは以下の表のとおりです。

| type | 表示されるコントロール |
| --- | --- |
| button | ボタン(value属性内でラベルを指定) |
| checkbox | チェックボックス |
| color | 色の選択ボタン |
| date | 日付入力 |
| datetime-local | 日付・時間入力 |
| email | メールアドレス入力|
| file | ファイル |
| hidden | 非表示のコントロール |
| image | グラフィックスのsubmitボタン |
| month | 年月入力 |
| number | 数値入力 |
| password | パスワード入力 |
| radio | ラジオボタン |
| range | 数値のスライド入力 |
| reset | フォームを初期化(非推奨) |
| search | 検索文字列の入力 |
| submit | フォームの送信ボタン |
| tel | 電話番号入力 |
| text | テキストボックス |
| url | URL入力 |
| week | 年と週番号で構成される日付の入力 |

詳しくは[MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input)を参照してください。

## `<form>`タグ

`<form>`タグは、その名の通り、フォームを作成するタグです。  
`<form>`タグの中身は`<input>`タグと`<label>`タグなどで構成され、`<input type="submit" />`で`<form>`タグの中身を送信できます。

## `<label>`タグ

`<input>`タグに対応させるラベルを作成するタグです。  
`name`属性を使用して`<input>`タグに関連付けることができます。

## `<ul>`タグ・`<ol>`タグ・`<li>`タグ

ul: Unordered List (順序なしリスト)  
ol: Ordered List (順序つきリスト)  
li: List

これらのタグは、箇条書きリストを作成する時に使います。  
箇条書きにする各行は`<li>`タグで書き、順序付きか順序なしかに応じて`<ol>`または`<ul>`で囲みます。

## `<a>`タグ

a: anchor

`<a>`タグはリンクを設定するタグです。  
`href`属性にリンク先を設定します。なお自分自身をリンク先に設定するときは`href="#"`と設定することもできます。

## コメント

HTML(に限らずほとんどの言語)には、**コメント**という実際の処理では無視される文字列を含めることができます。  
HTMLでは、```<!-- ここの間に書く -->```という書き方をします。なお複数行にまたがっても問題ありません。

## その他

その他にも、多くのタグが存在するので、必要に応じてMDNなどで調べてみてください。

# CSS

## CSSとは

CSSは、"Cascading Style Sheet"の略で、スタイルシートの一種です。  
今はCSS以外のスタイルシートを使うことはほとんどないので、スタイルシート=CSSと思ってください。

## CSSフレームワーク

CSSを扱いやすく抽象化したものを**CSSフレームワーク**とよびます。  
有名なCSSフレームワークには以下のようなものがあります。

- TailwindCSS: classで指定することでかんたんにスタイルを適用できるフレームワークです。
- Bootstrap: X社(旧Twitter社)が開発したCSSフレームワークで、世界的にシェアが高いです。

## CSSの書き方

CSSは、タグ、class、またはid単位で適用できます。  
以下のように設定します。

```css
h1{
  font-size: 24px;
  color: blue;
}
.title{
  background-color: lavender;
}
#user{
  border-bottom: 2px solid red;
}
```

一番上がHTMLの`<h1>`タグに設定されるスタイル、真ん中がクラスが"title"になっている要素に適用されるスタイル、一番下はidが"user"の要素に適用されるスタイルです。  
それぞれのスタイルを定義するキーのことを**CSSプロパティ**といいます。

## 一括設定プロパティ

一部のプロパティには関連する設定を一括でできるプロパティがあります。  
上の例の`border-bottom`などがその例です。

## コメント

CSSのコメントは`/* ここの間に書く */`です。こちらも複数行にまたがっても問題ないです。

# 主なCSSプロパティ

一括設定プロパティがあるものは基本的にそれで表記します。  
以下でMDNと書かれている部分はMDNの該当ページを参照してください。

## font

`font`プロパティは、以下のフォントに関する要素の一括設定プロパティです。

| プロパティ名 | 設定内容 | 値の例 |
| --- | --- | --- |
| font-family | フォント | Noto Sans JP |
| font-size | 文字サイズ | 12px /1.5rem |
| font-stretch | フォントのフェイス | [MDN](https://developer.mozilla.org/ja/docs/Web/CSS/font-stretch) |
| font-style | フォントの斜体などのスタイル | [MDN](https://developer.mozilla.org/ja/docs/Web/CSS/font-style) |
| font-varient | フォントの変化形 | [MDN](https://developer.mozilla.org/ja/docs/Web/CSS/font-variant) |
| font-weight | フォントの太さ | normal /bold |
| line-height | 行の高さ | normal /120% |

なお、`font`を利用する場合、`font-family`と`font-size`は必須で、それ以外は任意になります。

## border

`border`プロパティは、以下の要素の境界線に関する要素の一括設定プロパティです。

| プロパティ名 | 設定内容 | 値の例 |
| --- | --- | --- |
| border-color | 境界線の色 | #FF0000 /red |
| border-style | 境界線のスタイル | solid /dashed [MDN](https://developer.mozilla.org/ja/docs/Web/CSS/border-style) |
| border-width | 境界線の太さ | 2px /medium |

なお、`border-top` `border-bottom` `border-right` `border-left`などもあり、これらはそれぞれに対応する方向の境界線について設定できます。

## color

`color`プロパティは、文字の色を設定するプロパティです。

一部の色についてはnamed-colorといわれ、色の名称が定められています。  
blueやredなどがそれにあたります。

また、`color`プロパティはHEXカラーコード(`#FF0000`など)で設定するのが一般的ですが、RGBカラーコード(`rgb(255,0,0)`など)やHSLカラーコード(`HSL(0,100%,50%)`)、それらに不透明度の情報を付したRGBAカラーコードやHSLAカラーコードも利用できます。また、HEXカラーコードのあとに2桁の数値を付加すると、それが不透明度として使われます。

## padding

`padding`プロパティは、要素の境界線の内側に設定される領域の一括設定プロパティです。

`padding-top` `padding-bottom` `padding-right` `paddinf-left`でそれぞれ設定することもできます。  

`padding`プロパティは1つ\~4つのうち任意の数の値をとることができ、それぞれ以下に対応します。

| 値の数 | 設定されるプロパティ |
| --- | --- |
| 1 | 上下左右 |
| 2 | 上下/左右 |
| 3 | 上/左右/下 |
| 4 | 上/右/下/左 |

## margin

`margin`プロパティは、要素の境界線の外側に設定される領域の一括設定プロパティです。  

境界線の外側に来ること以外は`margin`と同じです。

## text-align

`text-align`プロパティは、要素の領域に対して、テキストをどこに揃えて表示するかを設定するプロパティです。  
取る値は以下のとおりです。

| 値 | 揃え |
| --- | --- |
| start | 行頭揃え |
| end | 行末揃え |
| center | 中央揃え |
| right | 右揃え |
| left | 左揃え |
| justify | 両端揃え |
| justify-all | 最終行含め両端揃え |
| match-parent | 親要素に合わせる(rightまたはleft) |

# CSSセレクター

CSSセレクターは、例えば「`name`クラスの要素の中の`li`タグ」のように、**2つ以上の情報を組み合わせて**ピンポイントでスタイルを適用したり、「ホバーされているとき」など**特定の状況下でのみスタイルを変更する**ときに使用します。  

CSSセレクターは、以下のようなものをよく使います。

## + (次兄弟結合子)

`+`は、2つのセレクター(class、id、タグ名など)を接続し、2つめのセレクターに該当する要素(以下「2つめの要素」といいます)が1つめのセレクターに該当する要素(以下「1つめの要素」といいます)の直後に来て、同じ親要素の子同士であるときに適用されます。

## > (子結合子)

`>`は、2つめの要素が1つめの要素の子要素になるときに適用されます。  

## ~ (後続兄弟結合子)

`~`は、2つめの要素が1つめの要素のあとにきて(直後でなくてもよい)、同じ親要素の子同士であるときに適用されます。

## " " (子孫結合子)

`" "`(半角スペース)は、2つめの要素が1つめの要素の子孫にあたるときに適用されます。  
つまり、`" "`は1つめの要素の子要素、または子要素の子要素、または...のときに適用されます。

## :hover

`:hover`は、その要素がホバーされたときに適用されます。

## :active

`:active`は、その要素がアクティブ化されたとき(ボタンの場合クリックされたときなど)に適用されます。

## :autofill

`:autofill`は、`<input>`などにおいて、その中身がブラウザによって自動補完された時に適用されます。

## :checked

`:checked`は、ラジオボタン・チェックボックス・オプションボタンにおいて、その要素がチェックされているときに適用されます。

## :default

`:default`は、フォームにおいて、既定値となっているところに適用されます。

## :disabled

`:disabled`は、無効になっている要素に適用されます。  

## :enabled

`:enabled`は、すべての有効な要素に適用されます。

## :empty

`:empty`は、子要素を持たない要素に適用されます。

## :focus

`:focus`は、`<input>`などのフォーカスを持っている要素(`<input>`の場合はアクティブ化など)に適用されます。

## 詳細

他のセレクターなど詳細は[MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_selectors)を参照してください。

## CSS擬似クラス

先ほど説明した`:hover`や`:checked`などの`:`ではじまるものを指して**CSS擬似クラス**とよびます。  
これらの擬似クラスは、通常のクラスとしても使えるものもありますが(`:root`など)、多くの場合`*:hover`のように前に`*`をつけることでセレクターの指定をなくします。というのも、この擬似クラスは、セレクターに該当する要素の状態に応じたスタイリングを行うものだからです。  
また、ここでの`*`は**正規表現**の`*`です。正規表現においては`*`は何らかの文字または文字列を示します。  
正規表現についてはTypeScript入門で扱います。


# CSSレイアウト

## flexbox

flexboxは、要素を**一次元的に並べる**ときに使うプロパティです。  

これを使うには、横並びにしたい要素を`<div>`タグで囲み、それに`display: flex;`を設定します。以降この`<div>`を**親要素**と、その中にある**子要素**と呼びます。

flexboxには、以下のようなプロパティを設定できます。

### flex-direction

`flex-direction`は、子要素を並べる方向を指定するプロパティです。親要素に設定します。  
`flex-direction`でとり得る値は以下のとおりです。

- row : 左→右
- row-reverse : 右→左
- column : 上→下
- column-reverse : 下→上

### flex-wrap

`flex-wrap`は、子要素を1行ですべて並べるか、複数行に並べるかを指定するプロパティです。親要素に設定します。  
`flex-wrap`でとり得る値は以下のとおりです。

- nowrap : 1行に並べる
- wrap : 複数行に並べる(上→下)
- wrap-reverse : 複数行に並べる(下→上)

### flex-flow

`flex-flow`は、`flex-direction`と`flex-wrap`の一括設定プロパティです。

### flex-grow

`flex-grow`は、子要素をすべて並べて余白ができた時に、どのような割合で広げるのかを指定するプロパティです。子要素に指定します。  
`flex-grow`は単一の正の整数または小数もしくは0で定義し、初期値は0です。

### flex-shrink

`flex-shrink`は、子要素をすべて並べて親要素の大きさを超えたとき、どのような割合で縮小するのかを指定するプロパティです。子要素に指定します。  
`flex-shrink`は単一の正の整数または小数もしくは0で定義し、初期値は1です。

### flex-basis

`flex-basis`は、子要素のベースの幅を指定するプロパティです。子要素に設定します。  
`flex-basis`がとり得る値は以下のとおりです。

- 大きさ(px,em,%など)
- auto : 横並びでは`width`、縦並びでは`height`
- max-content : 内在的な推奨値
- min-content : 内在的な最小値
- fit-content : 周りと干渉しない最大値
- content : 子要素に合わせて自動で設定

### flex

`flex`は、`flex-grow`と`flex-shrink`と`flex-basis`の一括設定プロパティです。子要素に設定します。

以下のパターンに沿って値が解釈されます。

- 単位なしx1/単位ありx0 : flex-grow
- 単位なしx0/単位ありx1 : flex-basis
- 単位なしx1/単位ありx1 : flex-grow/flex-basis
- 単位なしx2/単位ありx0 : flex-grow/flex-shrink
- 単位なしx2/単位ありx1 : flex-grow/flex-shrink/flex-basis

※「単位あり」にはautoなども含みます

### order

`order`は、子要素の並び順を指定するプロパティです。子要素に設定します。  
`order`は負の数を含む整数で定義され、初期値は0です。数値が小さいほど前に並びます。

### justify-content

`justify-content`は、子要素の水平方向の空間分配を指定するプロパティです。親要素に設定します。  
`justify-content`のとり得る値は以下のとおりです。

- flex-start : 行頭揃え
- flex-end : 行末揃え
- center : 中央揃え
- space-between : 両端揃え
- space-around : 各文字の両方の空間を均等に割り付け

### justify-items

`justify-items`は子要素の割り当てられた領域内における水平方向の揃え方を指定するプロパティです。親要素に指定します。  
`justify-items`のとり得る値は以下のとおりです。

- start : 先頭揃え
- end : 末尾揃え
- center : 中央揃え
- left : 左揃え
- right : 右揃え
- baseline : ベースラインに合わせる
- stretch : 割り当てられた領域いっぱいに広げる

### align-content

`align-content`は、子要素の垂直方向の空間分配を指定するプロパティです。親要素に設定します。  
子要素が2行以上にわたるときにのみ有効です。  
`align-content`のとり得る値は以下のとおりです。

- normal : `akugn-content`の値が設定されていないかのように既定の位置に揃える。
- start : 先頭揃え
- end : 末尾揃え
- center : 中央揃え
- baseline : ベースラインを揃える
- space-between : 両端を端に合わせた均等割り付け
- space-around : 両端の要素と端の間に要素同士の空間の1/2の空間がある均等割り付け
- space-evenly : 両端の要素と端の間に要素同士の空間と同じだけの空間がある均等割り付け

### align-items

`align-items`は、子要素の割り当てられた領域内における垂直方向の揃え方を指定するプロパティです。親要素に設定します。  
`align-items`のとり得る値は以下のとおりです。

- stretch : 子要素を縦方向いっぱいに表示する
- center: 中央揃え
- start: 先頭揃え
- end: 末尾揃え
- baseline: ベースラインを揃える

### align-self

`align-self`は、指定した子要素の`align-items`の値を上書きするプロパティです。子要素に設定します。  
`align-self`のとり得る値は`align-items`と同じです。

### place-content

`place-content`は`align-content`と`justify-content`の一括設定プロパティです。

### place-items

`place-items`は`align-items`と`justify-items`の一括設定プロパティです。

### row-gap

`row-gap`は、要素の行方向のすき間を指定するプロパティです。  
`row-gap`は大きさを示す値または割合をとります。

### column-gap

`column-gap`は、要素の列方向のすき間を指定するプロパティです。  
`column-gap`は`row-gap`と同様の値をとります。

### gap

`gap`は`row-gap`と`column-gap`の一括設定プロパティです。

### 詳細

詳細は[MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_flexible_box_layout)を参照してください。

## CSS Grid

CSS Gridは、要素を**二次元的に並べる**ときに使うプロパティです。  
これを使うには、flexboxのとき同様、`display: grid`を親要素に設定する必要があります。  
CSSグリッドは名前の通り、先にグリッドで領域を小さく区切って、それを更に分割したりつなげたりして希望するレイアウトを実現する、というアプローチをとります。

CSS Gridには以下のようなプロパティを設定できます

### grid-template-columns

`grid-template-columns`は、グリッドの行方向の区切り方を指定するプロパティです。親要素に設定します。  
`grid-template-columns`はスペース区切りで各領域の幅を指定します。  
また、ここでのみ`fr`という特殊な単位が使えます。これは、残った領域を`fr`単位の値に応じて分割する、というものです。  
例えば`grid-template-column: 200px 2fr 1fr 1fr`と指定したとすると、親要素の幅のうち200pxを除いた領域を2:1:1で分割する、という意味になります。

### grid-template-rows

`grid-template-rows`は、`grid-template-columns`の列方向版、のようなものです。親要素に設定します。  
よって、`grid-template-rows`が取る値は`grid-template-columns`と同様です。

### grid-template-areas

`grid-template-areas`は、`grid-template-colums`および`grid-template-rows`によって区切られた領域(=セル)を結合したり(しなくてもよい)して名前をつけるプロパティです。親要素に設定します。  
`grid-template-areas`の指定方法はやや特殊なので、[MDN](https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-areas)を参照してください。

### grid-template

`grid-template`は、`grid-template-column`、`grid-template-rows`、`grid-template-areas`の一括設定プロパティです。親要素に設定します。  
書き方がやや特殊なので、[MDN](https://developer.mozilla.org/ja/docs/Web/CSS/grid-template)を参照してください。

### grid-columns-start

`grid-columns-start`は、行方向の開始位置の指定を行うプロパティです。子要素に設定します。  
`grid-columns-start`は負の数を含む0以外の整数値、あるいはautoをとります。また、前に`span`キーワードをつけることでセルをつなげた状態を定義することができます。負の数を指定した場合は後ろから数えられます。

### grid-column-end

`grid-column-end`は、行方向の末尾位置の指定を行うプロパティです。子要素に設定します。  
とり得る値やその数え方等は`grid-column-start`と同じです。

### grid-column

`grid-column`は`grid-column-start`と`grid-column-end`の一括設定プロパティです。子要素に設定します。  
`grid-column-start`/`grid-column-end`の書式で定義されます。

### grid-row-start

`grid-row-start`は、列方向の開始位置の指定を行うプロパティです。子要素に設定します。  
とり得る値等は`grid-column-start`と同じです。

### grid-row-end

`grid-row-end`は、列方向の終了位置の指定を行うプロパティです。子要素に設定します。  
とり得る値等は`grid-column-end`と同じです。

### grid-row

`grid-row`は`grid-row-start`と`grid-row-end`の一括設定プロパティです。子要素に設定します。  
書式は`grid-column`と同じです。

### grid-column-gap

`grid-column-gap`は、子要素同士の行方向のすきまを設定するプロパティです。親要素に設定します。  
`grid-column-gap`はpx.emなどの単位付きの大きさ(長さ)を表す数をとります。

### grid-row-gap

`grid-row-gap`は、子要素同士の列方向のすきまを設定するプロパティです。親要素に設定します。  
`grid-row-gap`がとり得る値は`grid-column-gap`と同様です。

### 詳細

詳細は[MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout)を参照してください。  
MDNの[CSSレイアウトのチュートリアル](https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout)を読んでも良いでしょう。

# レスポンシブデザイン

## レスポンシブデザインとは

今まで説明したことだけでは、スマートフォンやPCといった画面サイズが極端に違うデバイスの場合、どちらかでレイアウトが崩れてしまいます。(よっぽど単純なものを除く)  
そこで、スマートフォンで表示するときとPCで表示するときで、表示するレイアウトを変える、という処理を行います。  
この処理を行うデザインのことを**レスポンシブデザイン**または**レスポンシブWebデザイン**といいます。また、この処理そのものは**レスポンシブ対応**ということもあります。  
なお、responsiveは形容詞で「反応する」という意味があります。(原形はresponse:反応・応答)

## メディアクエリ

このレスポンシブデザインに基づいた実装を行う際、画面サイズなどを基準として実装します。  
そこで、**メディアクエリ**というものを使用することで、画面の横幅に応じて場合分けして実装することができます。

## @mediaルール(CSS)

**@mediaルール**(アットメディアルール)は、現在最も一般的なレスポンシブデザインの実装方法です。  
`@media`では、**メディア種別**と**メディア特性**で適用されるかどうかを定義します。  

`@media`はコードの最上位、または他のアットルール(`@supports`など)の下に書く必要があります。

例：

```css
@media screen and (min-width: 700px) {
  p{
    font-size: 12px;
    padding: 1px 0;
  }
}
```

### 主なメディア種別

メディア種別には以下のようなものがあります。

| メディア種別 | 表すメディア |
| --- | --- |
| all | すべて |
| print | ページのある資料や、印刷プレビュー |
| screen | 画面 |
| speech | 音声合成 |

### width メディア特性

メディア特性は多くの種類がありますが、レスポンシブデザインでは、基本的に`width`くらいしか扱いません。

`width`には以下の形があります。

| 形 | 示すもの |
| --- | --- |
| width | その幅ちょうど |
| min-width | 幅がその値以下 |
| max-width | 幅がその値以上 |

幅はpxやremなどで与えられます。

### 論理演算子

メディア種別やメディア特性を組み合わせるときは**論理演算子**を使います。

`@media`ルールで使える論理演算子は以下のとおりです。

- and : それぞれが`true`を返せば`true`
- not : 出力を反転(`true`→`false`、`false`→`true`)
- only : クエリ全体が一致(古いブラウザを想定する時に利用、意味合いはandとほぼ同じだが、メディア種別が必須になる)
- , : カンマで区切られたクエリのいずれかが`true`のときに`true`(論理演算子orと同義)


