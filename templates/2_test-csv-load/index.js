var app = new Vue({
  el: '#app',
  data: {
    uri: './test.csv',
    result: '...'
  },
  methods: {
    load: function() {
      fetch(this.uri, {
          method: "GET",
        }).then(response => response.text())
        .then(text => {
          console.log(text);
          this.result = text;
        });
    }
  }
})