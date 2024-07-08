---
title: Linux入門
---

# はじめに

この研修を受講する前に、以下のソフトウェアがインストールされていることを確認してください。

- WSLまたは何らかのLinux環境
- Docker

本研修では、Linuxの基本操作、およびLinuxの設定とDockerの使用方法について学びます。

# Linuxとそのディストリビューション

## Linuxとは

LinuxはLinus Torvaldsによって開発された**オープンソース**の**OS**です。  
主に**サーバー**や**ワークステーション**に利用されています。

## Linuxディストリビューションとは

ディストリビューションは「配布物」という意味で、星の数ほどあります。  
Linuxはオープンソースなので、多くの人がカスタマイズしてパッケージ化して配布しています。  
そういったパッケージの一つ一つ、およびそれらをまとめて**ディストリビューション**と呼びます。

## 主要なLinuxディストリビューション

Linuxディストリビューションには系統が存在します。

### Debian/Ubuntu系

- **Debian GNU/Linux** : パッケージマネージャーに**apt**(Advanced Packaging Tool)を採用したディストロ。派生ディストロが非常に多い。
- **Ubuntu** : 「使いやすさ」にフォーカスし、**プロプライエタリ**なソフトウェアも標準で導入しているディストロ。Ubuntuはズールー語で「他者への思いやり」の意。デスクトップ環境はGNOME Shell。
- Xubuntu : Ubuntuフレーバー(Ubuntuの公式派生)の1つで、デスクトップ環境にXfceを採用したディストロ。
- Lubuntu : Ubuntuフレーバーの1つで、デスクトップ環境にLXQtを採用したディストロ。
- Kubuntu : Ubuntuフレーバーの1つで、デスクトップ環境にKDE Plasmaを採用したディストロ。
- Ubuntu Budgie : Ubuntuフレーバーの1つで、デスクトップ環境にBudgieを採用したディストロ。
- Ubuntu MATE : Ubuntuフレーバーの1つで、デスクトップ環境にMATEを採用したディストロ。
- Edubuntu : Ubuntuフレーバーの1つで、教育向けソフトウェアを多数インストールされているディストロ。~~一度消えたがいつのまにか復活してる。~~デスクロップ環境はGNOME Shell。
- Ubuntu Kylin : Ubuntuフレーバーの1つで、デスクトップ環境にUKUI(Ubuntu Kylin User Interface)を採用したディストロ。
- Ubuntu Cinnamon : Ubuntuフレーバーの1つで、デスクトップ環境にCinnamonを採用したディストロ。24.04LTSから正式フレーバーになった。
- Ubuntu Unity : Ubuntuフレーバーの1つで、デスクトップ環境にUnityを採用したディストロ。
- Ubuntu Studio : Ubuntuフレーバーの1つで、マルチメディアに特化したディストロ。デスクトップ環境はKDE Plasma。
- Ubuntu Desktop 日本語Remix : Ubuntu Remix(Ubuntuの非公式派生)の1つで、公式のUbuntuを日本語化し、日本語入力できるようにしたディストロ。
- Ubuntu Sway Remix : Ubuntu Remixの1つで、ウィンドウマネージャーにSwayを採用したディストロ。
- Linux Mint : Windowsから乗り換えやすいUbuntu派生ディストロ。デスクトップ環境はCinnamon、Mate、Xfceから選べる。
- MX Linux : 「Linux感」が強めのLinuxディストロ。Distrowatch.comのPage Hit Rankingで上位をキープしている。(2024年7月3日時点1位)
- KDE Neon : KDE Plasmaの最新版を採用したディストロ。Ubuntuベース。

### RedHat系

- **RHEL(RedHat Enterprise Linux)** : RedHat社が開発した商用Linux。パッケージマネージャーに**rpm**(Rpm Package Manager)を採用。(yumとはYellowdog Updater Modifiedの略で、こちらもパッケージマネージャー。)
- **Fedora** : RedHat社謹製のディストロ。RHELからプロプライエタリなソフトウェアを排除したディストロであり、RHELに搭載予定の次世代の機能を試験搭載したりしている。

### Slackware系

- **Slackware** : 「最古のディストリビューション」とも言われているディストロ。パッケージマネージャーが依存関係を解決しないので、ユーザーが解決する必要がある。
- PuppyLinux : 「軽量性」と「安定性」を重視したLinuxディストリビューション。

### 独立系

- **ArchLinux** : 「KISS原則」(Keep It Simple, stupid: シンプルにしておけ！この間抜け)^[[wikipedia](https://ja.wikipedia.org/wiki/KISS%E3%81%AE%E5%8E%9F%E5%89%87)より]を具現化したようなディストリビューション。インストールはGUIではなくCLIのみであり、ブートローダーやKernelなど、基本的にすべてを自分で選んで自分で設定するディストリビューションである。パッケージマネージャーは**Pacman**であり、非公式パッケージリポジトリである**AUR**は半公式状態である。
- **GentooLinux** : すべてのパッケージを自分でビルドしてインストールするディストリビューションである。フラグを使ってビルド設定をすることで自分に最適化されたビルドができる一方、その特性ゆえに「Linuxディストリビューションの中で一番難しい」といわれている。パッケージマネージャーは**portage**
- **ChromeOS** : Googleが「ChromeBook」用のOSとしてGentooLinuxをベースに作成したディストロ。
- **NixOS** : パッケージマネージャーに「Nix」を採用したディストロ。それによってすべての設定を宣言的に書くことができ、再現性も担保できる。また、Nixはビルド環境としてもよく使われ、その構築スクリプトは純粋関数型言語「Nix言語」で書く。
- **Android** : 世界トップシェアを誇るスマホ用OS。LinuxをベースにGoogleが~~魔改造~~カスタマイズしたもの。
- Linux From Scratch : ~~もはやディストリビューションと言っていいのかわからないが、~~ディストロをイチから自分で作るという~~何を言っているのかよくわからない~~ディストロ~~(?)~~

# Linuxの操作

Linuxは基本的にコマンドラインを利用することで操作を行います。  
ただし、最近のディストリビューションではGUI(Graphical User Interface: マウスで直接操作できるUI)を備えているものも多く、「ただ使うだけ」の場合コマンドを使わずに操作できます。  
しかし、コアの部分に近い設定はGUIでできないことも多く、そのような設定はコマンドラインを使用します。  
みなさんには、後日、自分自身の好きな構成でArchLinuxを仮想環境にインストールしてもらいます。  
そのときには、GUIの環境の構築もしてもらうので、そのときまではCLIでがんばりましょう。

## コマンドの構造

```
git clone -b develop https://github.com/owner/repo ./test
```
というコマンドがあるとき、  
`git`が**コマンド**と呼ばれ、`clone`が**サブコマンド**と呼ばれます。  
サブコマンドは、メインコマンドの機能の中からどの機能を使うのかを指定する文字列です。  
その後につづく`-b develop`は**オプション**とよばれます。意味は読んだとおりです。また、オプションのプロパティ名の前には`-`または`--`がつけられます。プロパティ名が1文字のときは`-`、2文字以上のときは`--`が使われることが多いです。  
さらにその後に続く`https://github.com/owner/repo`と`./test`を**引数(ひきすう)**と呼びます。引数は、コマンドの実行場所やターゲットなどを指定することが多いです。特に`https://github.com/owner/repo`の部分を**第1引数**、`./test`の部分を**第2引数**と呼びます。

## root

**root**は、Linuxの世界では「**特権ユーザー**」とよばれ、Windowsにおける「管理者」のような存在ですが、権限が全く違います。
Linuxにおけるrootユーザーは、管理者というよりは**全知全能の神**という認識のほうが良いと思います。というのも、rootユーザーは**システムに破壊的変更を加えることができる**ので、その権限は厳密に管理しなければなりません。rootユーザーは**絶対的な権限**をもつのです。

## sudo

`sudo`は"Switch User DO"の略で、その引数に取るユーザーとして続くコマンドを実行するコマンドです。  
引数を指定しない場合はrootユーザーになります(ユーザーにroot権限を与える必要あり)。  
...というか、sudoは主に一般ユーザーがroot権限でコマンドを実行するときに使用します。  
先述のとおり、rootユーザーは**操作ミス一発でシステムを破壊しかねない絶対的な力**を持っているので、そんな状態で使うのは怖いですよね？  
ということで、必要なときだけroot権限を利用できるのがsudoです。

## su

`su`は"Switch User"の略で、その引数にとるユーザーにユーザーを切り替えるコマンドです。  
引数を取らなければrootユーザーになります。  
たまに、システムのメンテナンスで一回一回sudoするよりも、危険を犯しつつもrootで実行したほうがよことがあります。基本的に、そういったとき**のみ**使用し、**むやみに使用しないでください**。

## パッケージのインストール

基本的にroot権限で実行すること

### Debian/Ubuntu系

Debian/Ubuntu系のパッケージマネージャーは**apt**です。

| 行いたい操作 | コマンド |
| --- | --- |
| パッケージリポジトリのアップデート | apt update |
| パッケージのアップグレード | apt upgrade |
| パッケージのインストール | apt install <package> |
| パッケージのアンインストール | apt remove <package> |
| 使われていないパッケージの自動削除 | apt autoremove |
| パッケージの検索 | apt search <package> |

### Arch

ArchLinuxのパッケージマネージャーは**pacman**です。

| 行いたい操作 | コマンド |
| --- | --- |
| パッケージのアップデート・アップグレード | pacman -Syyu |
| パッケージのインストール | pacman -S <package> |
| パッケージのアンインストール | pacman -R <package> |
| パッケージの検索 | pacman -Ss <package> |

### RedHat系

RedHat系のパッケージマネージャーは**dnf**です。

| 行いたい操作 | コマンド |
| --- | --- |
| パッケージの更新の確認 | dnf check-update |
| パッケージの更新 | dnf upgrade <package> |
| パッケージグループの更新 | dnf group upgrade <package> |
| パッケージのインストール | dnf install <package> |
| パッケージの削除 | dnf erase <package> |
| パッケージの検索 | dnf search <package> |

### Gentoo

GentooLinuxのパッケージマネージャーは**portage**です。

| 行いたい操作 | コマンド |
| --- | --- |
| パッケージリポジトリのアップデート | emerge --sync |
| パッケージのアップグレード | emerge -avuD <package> |
| パッケージのインストール | emerge -av <package> |
| パッケージの削除 | emerge -aC <package> |
| 使用しないパッケージの自動削除 | emerge -a --depclean |

### Nix

NixOSのパッケージマネージャーは**Nix**です。

基本的に`/etc/configuration.nix`を編集して、`nixos-rebuild switch`を実行します。  
Flakesを有効化し、configuration.nixをflakeに組み込んだ場合は`nixos-rebuild switch <path to flake.nix>#<module>`になります。

## テキストエディタ

この先、Linux側のテキストファイルを書き換えるときに**テキストエディタ**と呼ばれるソフトウェアがあると便利です。ということで、以下に挙げるテキストエディタのうち、好きなものをインストールしてください。

- **Vim** : "VI iMproved"の略で、多くのディストロに標準搭載されている「vi」というエディタを改良したテキストエディタ。少々操作が独特。
- **NeoVim** : Vimをさらに進化させた派生エディタ。操作の独特さは変わらないが、Luaというスクリプト言語で設定がかけたりと、Vimと比べて機能性は高い印象。ただし、バージョンはまだ"0.x"というベータ版である。
- **nano** : かんたんな操作で利用できるテキストエディタ。コンソールに不慣れな場合はこちらを推奨するが、ある程度コンソールになれたユーザーの場合Vimになれることを推奨する。
- **Emacs** : nanoの進化版のような感じ。Vim/NeoVimと双璧をなすテキストエディタ。LinuxユーザーはVim派とEmacs派がおり、それぞれがバチバチにやりあっている。Emacsは「全部入り」のUbuntuのような印象、Vimは「シンプル」なArchのような印象を受ける。~~なお担当者はVim(NeoVim)派~~

## Neofetch

システム情報を表示する定番アプリがNeofetchです。これを実行して、ちゃんと自分が選択したディストリビューションがインストールされていることを確認してください。  
neofetchは各パッケージマネージャーでインストールしてください。

# Linuxコマンド集

## ls

"List"の略で、カレントディレクトリの中身を一覧表示します。

| オプション | 挙動 |
| --- | --- |
| -l | ファイル・ディレクトリの詳細情報を出力 |
| -a | 隠しファイルを含めすべて表示 |

## pwd

"Print Working Directory"の略で、今のカレントディレクトリの絶対パスを出力します。

## cd

"Change Directory"の略で、引数に指定したディレクトリに移動します。

## cp

"CoPy"の略で、第1引数に指定したファイルを第2引数に指定したパスにコピーします。

## mv

"MoVe"の略で、第1引数に指定したファイルを第2引数に指定したパスに移動します。  
また、第1引数と第2引数に同じディレクトリの配下のパスを指定した場合、ファイル名の変更になります。
```bash
mv ./test.txt ./test/test.txt # ファイルの移動
mv ./test.txt ./example.txt # ファイル名の変更
```


## cat

引数に指定したファイルの中身を出力します。

## less

引数に指定したファイルの中身をページ送りで出力します。

## grep

第2引数に指定したファイルの中から、第1引数に指定した文字列を探し、その行を抽出します。  
また、別のコマンドのあとにパイプでつなぐことで、コマンド出力から引数に指定した文字列を含む行を抽出します。
```bash
grep osaka ./sample.txt　# sample.txtの中から"osaka"を含む行を抽出
grep osaka ./sample.txt ./example.txt # sample.txtとexample.txtから"osaka"を含む行を出力
timedatectl status | grep Tokyo # コマンドの実行結果から"Tokyo"を含む行を抽出
```

| オプション | 挙動 |
| --- | --- |
| -E | 正規表現を使用する |
| -i | 大文字と小文字を区別せずに検索する |
| -n | 抽出した行の行番号も表示する |
| -q | 結果を表示しない |

## mkdir

"MaKe DIRectory"の略で、ディレクトリを作成します。  
-pオプションを使用すると、入れ子になっているディレクトリを一気に作成できます。

## touch

ファイルを作成します。だいたいテキストエディタに存在しないファイル名を放り込むと勝手に作ってくれるのであんまり使いません。

## rmdir

"ReMove DIRectory"の略で、空のディレクトリを削除します。中身が入っているディレクトリは後述のrmコマンドを使います。

## rm

"ReMove"の略で、ファイルやディレクトリを削除します。

| オプション | 挙動 |
| --- | --- |
| -f, --force | 強制削除 |
| -r | ディレクトリとその中身を削除 |

## chmod

"CHange MODe"の略で、ファイルやディレクトリのアクセス権を変更します。

アクセス権には3種類あり、
- Read: 読み取り権限
- Write: 書き込み権限
- eXecute: 実行権限
を、3種類の対象
- User: 所有者
- Group: 所有者の所属するグループ
- Other: 所有者のグループに所属しないユーザー
にそれぞれ付与したり剥奪したりします。

付与するときは+、剥奪するときは-を使用します。

```bash
chmod u+x test.sh # 所有者にtest.shの実行を許可
chmod o-w test.sh # 所有者グループ以外のユーザーのtest.shの書き換えを禁止
chmod a+rwx test.sh # 全員にtest.shの読み取り・書き込み・実行を許可
```

また、読み取り権限を4、書き込み権限を2、実行権限を1として、許可したい権限を和を取り、ユーザー、グループ、その他の順で値を並べて設定することもできます。

```bash
chmod 764 test.sh # 所有者に読み込み・書き込み・実行を許可、  
                  # グループに読み込み・書き込みを許可、
                  # その他に読み込みのみ許可
chmod 777 test.sh # test.shの読み書きと実行を全ユーザーに許可
```

## chown

"CHange OWN"の略で、第2引数に指定したファイルの所有者を第1引数に指定したユーザーに変更します。

```bash
chown user test.txt # test.txtの所有者をuserに変更
```

## diff

"DIFFerence"の略で、第1引数と第2引数に指定したファイルの差分を出力します。

| オプション | 挙動 |
| --- | --- |
| -i | 大文字と小文字を区別せずに比較 |
| -s | ファイルが同一なときは同一と表示 |
| -q | 中身を表示せずに比較し、異なる場合は異なると表示 |
| -r | ディレクトリごと比較 |

※出力の読み方

```
~ $ cat text1.txt
a
b
c
~ $ cat text2.txt
a
b
d
~ $ diff text1.txt text2.txt
3c3 # text1.txtの3行目→text2.txtの3行目[Change]
< c
> d
```
```
~ $ cat text1.txt
a
b
c
~ $ cat text2.txt
a
b
~ $ diff text1.txt text2.txt
3d2 # text1.txtの3行目が削除され2行目の最後まで詰まった[Delete]
< c
```
```
~ $ cat text1.txt
a
b
c
~ $ cat text2.txt
a
b
c
d
~ diff text1.txt text2.txt
3a4 # text1.txtの3行目の直後にtext2.txtの4行目が追加された[Add]
> d
```

# Docker

## Dockerとは

Dockerは、**コンテナ型仮想化**を行うソフトウェアで、~~若干廃れてる気もするが~~Linux上ではKernelを共有することにより高速に動作します。  
Windowsで使用する場合はLinuxの仮想環境を挟むので重くなりやすいです。また、Windowsで使用する場合はWSL上にインストールし、Docker Desktop上で動かすことになります。  
仮想環境の構築設定は**Dockerfile**に書きます。

## VSCode DevContainer

**DevContainer**は比較的最近実装されたVSCodeの機能で、Dockerを利用した仮想環境上での開発をかんたんにできる機能です。  
これを利用するには、VSCodeにDevContainer拡張機能をインストールする必要があります。  
また、DevContainerではdevcontainer.jsonというファイルを利用することで拡張機能等も設定に書けたり、環境構築にdockerfileが使えたりします。  

devcontainer環境のファイルがある場合はVSCodeのコマンドパレットから"Reopen in Container"(コンテナーで再度開く)を選択することでdevcontainer環境に入れます。

# Nix

Nixは、純粋関数型言語Nixによって定義されるパッケージマネージャーのことを指すことが多いですが、時にNix言語そのものを指します。パッケージマネージャーNixは、純粋関数型言語Nixを利用することにより、再現性の高いビルド環境を構築できることが最大の特徴です。  
Dockerは仮想環境ですが、Nixはユーザー環境で動作するのでDockerより高速に動作します。また、このNixは開発環境を構築することもでき、これを使うと、システムグローバルに影響を与えずにその環境内だけで使用するパッケージを定義することができます。

## Nix Flakes

Nix FlakesはExperimentalな機能なので、有効化しなければなりませんが、これはgit管理されているリポジトリ上で、別のリポジトリをインポートしたりしながらビルドや開発環境を定義できる機能です。

## インストール

[公式サイト](https://nixos.org/download/#nix-install-linux)を参照してください。  
...とはいっても`sh <(curl -L https://nixos.org/nix/install) --daemon`を実行するだけですが。  
※失敗する場合はsystemdをセットアップするか、`sh <(curl -L https://nixos.org/nix/install) --no-daemon`を実行してください。

ちなみにArchの場合は`nix`パッケージをインストールするだけで使えます。

また、Flakesを有効化しておいてください。  
まあ。これも`sudo echo experimental-features = nix-command flakes >> /etc/nix/nix.conf`または`echo experimental-features = nix-command flakes >> ~/.config/nix/nix.conf`を実行するだけですが。

## nix-shell

nix-shellは-pオプションを利用するかしないかによって意味が変わってくるコマンドです。  
-pオプションを使用しない場合、カレントディレクトリ配下にあるshell.nixに定義された開発環境を構築します。  
-pオプションを使用する場合、引数にパッケージ名をとり、そのパッケージが導入された開発環境を構築します。  
なお、nix-shellを使用する場合、bashを使用している場合はプロンプトが[nix-shell@]などに変化します。  
開発環境から出る場合は`exit`です。

## nix develop

nix developは、カレントディレクトリ配下にあるflake.nixで定義された開発環境を構築するコマンドです。  
flakeが使えること以外は`nix-shell`とさほど変わりません。  
基本的にnixを使うときは`nix develop`を使うと思ってください。  
まあ、ちゃんと説明します。

