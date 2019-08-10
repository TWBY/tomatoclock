<template lang="pug">
html
  head
    link(href='https://fonts.googleapis.com/icon?family=Material+Icons', rel='stylesheet')
    title Document
  body
    //- Home
    #sideBar
      router-link(to='/') Home
      hr
      router-link(to='/list') List
    transition(name="page" mode="out-in")
      router-view(:key="$route.path")

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
.page-enter-active,
.page-leave-active {
  transition: 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
