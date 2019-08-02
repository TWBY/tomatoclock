<template lang="pug">
todolist
</template>

<script>
import todolist from '@/components/todolist.vue'

export default {
  name: 'Home',
  components: {
    todolist
  },
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style lang="scss">
</style>
