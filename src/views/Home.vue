<template lang="pug">
  div#app
    ListClock
    div#function-change
      FunctionChangeIcon
</template>

<script>
import ListClock from '@/views/ListClock.vue';
import FunctionChangeIcon from '@/views/FunctionChangeIcon.vue';

export default {
  name: 'Home',
  components: {
    ListClock,
    FunctionChangeIcon
  },
  data () {
    return {
      breakStatus: false
    };
  },
  methods: {
    status: function (statusing) {
      console.log('statusing = ', statusing);
      this.breakStatus = statusing;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
