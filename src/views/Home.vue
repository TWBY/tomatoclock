<template lang="pug">
  div#app
    div.listClock(:class='{ breakTime_bg: breakStatus }' )
      todolist.todo-list(:break-status="breakStatus")
      pomodoroClock(@breakStauting="status")
    div#function-change
      functionchange
</template>

<script>
import todolist from '@/components/todolist.vue'
import pomodoroClock from '@/components/pomodoroClock.vue'
import functionchange from '@/components/functionchange.vue'

export default {
  name: 'Home',
  components: {
    todolist,
    pomodoroClock,
    functionchange
  },
  data () {
    return {
      breakStatus: false
    }
  },
  methods: {
    status: function (statusing) {
      console.log('statusing = ', statusing)
      this.breakStatus = statusing
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
