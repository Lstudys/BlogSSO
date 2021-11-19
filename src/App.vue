<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/layout/header/index.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scope>
body{
  margin: 0;
  padding: 0;
}
</style>
