<template lang="pug">

//- push the parameter to eachsetting
#function-change
  .functionList
    router-link(to='/')
      i.material-icons home
    router-link(to='/edit/List')
      i.material-icons list
          //- span TO-DO-LIST
    router-link(to='/edit/Chart')
      i.material-icons assessment
          //- span ANALYTICS
    router-link(to='/edit/Music')
      i.material-icons library_music
          //- span RINGTONES
    i.material-icons g_translate
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
