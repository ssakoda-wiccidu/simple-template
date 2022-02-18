(function() {
    'use strict';

    var likeComponent = Vue.extend({
        data: function(){
            return {
                count: 0
            }
        },
        props: {
            message: {
                type: String,
                default: "Like"
            }
        },
        template: '<button @click="countUp">{{message}} {{count}}</button>',
        methods: {
            countUp: function(){
                this.count++;
                this.$emit("increment");
            }
        }
    })
    

    let vm = new Vue({
        el: '#app',
        components: {
            "like-component": likeComponent
        },
        data: {
            total: 0
        },
        methods: {
            incrementTotal: function(){
                this.total++;
            }
        }
    })
})()