<template>
  <div id="app">
    <Header/>
    <main></main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/header/index.vue';
import Footer from './components/layout/footer/index.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scope>
body{
  margin: 0;
  padding: 0;
}
</style>
