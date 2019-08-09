<template lang="pug">
#function-change
    .functionList
    router-link(to='/edit/')
      i.material-icons list
    i.material-icons assessment
    i.material-icons library_music
    .productName POMODORO
</template>

<script>
export default {
  name: 'FunctionListIcon',
  data () {
    return {};
  },
  methods: {}
};
</script>

<style  scoped lang="scss" >
@import "@/styles/FunctionChangeIcon.scss";
</style>
