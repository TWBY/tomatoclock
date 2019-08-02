<template lang="pug">
  div#app
    div#listClock
      todolist
      pomodoroClock(@breakStauting="status")
    div#functionchange
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
      breakstatus: null
      // breakStatus: app.breakStatus
    }
  },
  methods: {
    status: function (statusing) {
      this.breakstatus = statusing
    }
  }
}
</script>

<style lang="scss">
</style>
