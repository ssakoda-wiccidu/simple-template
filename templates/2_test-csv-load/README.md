# サーバサイドを利用しないアプリケーション例
サーバサイドを利用しなくてもファイルの読み込みはできる
fetchAPIを使ってみたけれど、fileAPIを利用した方がよさそう([3_test-file-api](../3_test-file-api/))。

## fatech API
以下が基本！https://qiita.com/uhyo/items/91649e260165b35fecd7
fetchAPIはバックエンドサーバとのやり取りに利用する。以下の例では、珍しくファイルを読み込む例である。
```
fetch("./test.csv", {
  method: "GET",
}).then(response => response.text())
.then(text => {
  console.log(text);
});
```
`./test.csv`でなくURLにも利用できるが、同一オリジン以外では基本的には`cross-Origin Read Blocking (CORB) blocked cross-origin`になる。
外部URLから情報を取得するにはサーバサイドの利用が不可欠？
