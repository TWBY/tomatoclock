<template lang="pug">

div.listClock(:class='{ breakTime_bg: breakStatus }' )
  TodoList.todo-list(:break-status="breakStatus")
  pomodoroClock(@breakStauting="status")

</template>

<script>
import TodoList from '@/views/TodoList.vue';
import pomodoroClock from '@/views/Clock.vue';

export default {
  name: 'ListClock',
  components: {
    TodoList,
    pomodoroClock
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
