<template lang="pug">
html
  head
    link(href='https://fonts.googleapis.com/icon?family=Material+Icons', rel='stylesheet')
    title Document
  body
    //- Home
    #sideBar
      router-link(to='/') Home
      | |
      router-link(to='/list') List
    router-view
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
// @import "@/styles/app.scss";
</style>
