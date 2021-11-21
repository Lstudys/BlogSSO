<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header/index.vue';
import Footer from './components/footer/index.vue';


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
