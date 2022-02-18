# 10.basic-Vueの基本・テンプレート構文について

## 基本
- `{{}}`二重波括弧がテンプレート構文（Mustache構文と呼ばれる）
- `data`内で宣言した変数をテンプレート内で利用する場合、thisが不要
- `data`内で宣言した変数を`methods`内で利用する場合、thisが必要
- `v-`で始まるタグの属性をディレクティブと呼び、Vue.js特有の属性

### 基本的な`v-`ディレクティブ
- `v-once`: 一度利用したテンプレートは二度と変更しない(一度だけ評価される？)
- `v-text`: テンプレート内の文字列をプレーンテキストとして扱う(`{{}}`と似たような機能)
- `v-html`: テンプレート内の文字列をhtmlとして扱う(XXSに注意)
- `v-bind`: 属性をバインドする機能
  - 属性値のバインド
    - `v-bind:herf="myUrl"`のように利用
    - `v-bind`を省略して、バインドしたい属性に`:`をつけるだけでも良い(ex.`:herf="myUrl"`)
  - オブジェクト構文と配列構文がある
    - v-bindオブジェクト構文
      - `<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>`
    - v-bind配列構文
      - `<div v-bind:class="[activeClass, errorClass]"></div>`
  - 属性のバインド(=属性のキー,hrefなど) これをv-bindの動的引数と呼ぶ
  　- `v-bind:[myAttribute]="myValue"`のように利用
  　- 同様に`:[myAttribute]="myValue"`でも可
  - 複数の属性を変数から利用
    - `v-bind:href="myUrl" v-bind:myId="myValue"`
    - `:href="myUrl" :myId="myValue"`
    - `v-bind="{href: myUrl, myId: myValue}"`
    - `v-bind="MyObject"`として、`data`内に`MyObject:{href: 'xxx',myId: 1}`と記述する
  - 動的引数を利用する場合、「動的引数の式の制約」があることに留意
- `v-on`:
　- v-onの引数に利用できるイベントリスト　https://developer.mozilla.org/ja/docs/Web/Events
  - v-on:click="xxx"のxxxには「イベントメソッドハンドラー」または「javascript式」を利用できる
    - したがって、`myMethod`または`myMethod()`の括弧有りでも無しでも記述できる

TODO:section2-16から再度見直しつつ記載すること！

## 間違いやすいところ

### {{}}内は単一の式
[Vue.js - テンプレート構文 - JavaScript式の使用](https://jp.vuejs.org/v2/guide/syntax.html#JavaScript-%E5%BC%8F%E3%81%AE%E4%BD%BF%E7%94%A8)に記載があります。

これらの式は、Vue インスタンスが所有するデータスコープ内で JavaScript として評価されます。制限として、それぞれのバインディングは、単一の式だけ含むことができるというものです。なので、以下は動作しません。
```
<!-- これは文であり、式ではありません: -->
{{ var a = 1 }}

<!-- フロー制御文も動作しません。三項演算子を使用してください -->
{{ if (ok) { return message } }}
```

### シンタックスシュガー（省略記法）
#### v-bind 省略記法
```
<!-- 完全な構文 -->
<a v-bind:href="url"> ... </a>

<!-- 省略記法 -->
<a :href="url"> ... </a>

<!-- 動的引数の省略記法 (2.6.0 以降) -->
<a :[key]="url"> ... </a>
```
#### v-on 省略記法
```
<!-- 完全な構文 -->
<a v-on:click="doSomething"> ... </a>

<!-- 省略記法 -->
<a @click="doSomething"> ... </a>

<!-- 動的引数の省略記法 (2.6.0 以降) -->
<a @[event]="doSomething"> ... </a>
```
