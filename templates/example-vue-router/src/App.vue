<template>
  <div>
    <div>
      <a href="#" @click="setPage('test-page01')">Test Page01</a>
      <a href="#" @click="setPage('test-page02')">Test Page02</a>
    </div>
    <component :is="activePage"></component>
  </div>
</template>

<script>

import TestPage01 from './components/TestPage01.vue'
import TestPage02 from './components/TestPage02.vue'

export default {
  name: 'App',
  components: {
    TestPage01, TestPage02
  },
  data() {
    return {
      activePage: 'test-page01'
    }
  },
  methods: {
    setPage(page) {
       this.activePage = page;
    }
  }
}
</script>