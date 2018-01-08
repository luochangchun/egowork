<template>
  <div id="app">
    <commonHeader></commonHeader>
    <router-view></router-view>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
  import Header from './components/base/header.vue'
  import Footer from './components/base/footer.vue'
  export default {
    name: 'app',
    components: {
      commonHeader: Header,
      commonFooter: Footer
    }
  }
</script>

<style scope>

</style>
