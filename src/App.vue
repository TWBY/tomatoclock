<template lang="pug">
html
  head
    link(href='https://fonts.googleapis.com/icon?family=Material+Icons', rel='stylesheet')
    title Document
  body
    #sideBar
      router-link(to='/') Home
      | |
      router-link(to='/edit') Edit
    router-view
</template>

<script>
import Home from '@/views/Home.vue';
import Edit from '@/views/Edit.vue';

export default {
  name: 'App',
  components: {
    Home,
    Edit
  }
};
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
