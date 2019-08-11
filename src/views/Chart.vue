<template lang="pug">
div.chart
  .focusTime
    h3.title FOCUS TIME
    .dataArea
      .today
        .subtitle TODAY
        .num 20
        .unit /TOMATO
      .week
        .subtitle WEEK
        .num 108
        .unit
  .chartTable
    h3.title CHART
    .tabelArea

</template>

<script>
// import TodoList from '@/views/TodoList.vue';
// import FunctionChangeText from '@/views/FunctionChangeText.vue';

export default {
  name: 'Chart',
  // components: {
  //   FunctionChangeText
  // },
  data () {
    return {
      // breakStatus: false
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
@import "@/styles/chart.scss";
</style>
