# 1.Vue.jsをサーバサイド無しで利用する
- メリット
  - webサーバを立てなくて良い
  - npmコマンドも利用しない
  - あるディレクトリにhtmlとjsを直書きして開発することができる
  - 何かしらのアウトプットファイルをダウンロードする形でローカルにデータを保存できる
- デメリット
  - サーバサイドがないのでDBに保存やファイルに書き込みができない

# はじめかた
vuejs-basicディレクトリの作成と2つのファイルを作成
```
/vuejs-basic
    - index.html
    - index.js
```

index.html内容
```
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <!-- 開発バージョン、便利なコンソールの警告が含まれています -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <title>vue test</title>
</head>

<body>
  <div id="app">
    {{ message }}
  </div>
  <script src="./index.js"></script>
</body>

</html>
```

index.js内容
```
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
