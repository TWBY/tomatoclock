<template lang="pug">
html
  head
    link(href='https://fonts.googleapis.com/icon?family=Material+Icons', rel='stylesheet')
    title Document
  body
    Home(@breakStauting="status")
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
@import "@/styles/_function.scss";

* {
  position: relative;
}

html,
body {
  @include size(100%, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#app {
  display: flex;
}

#listClock {
  @include size(830px, 800px);
  background-color: $color_red_light;
}
#functionchange {
  @include size(450px, 800px);
  background-color: $color_blue_darken;
}
</style>
