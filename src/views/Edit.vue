<template lang="pug">
#edit
    TodoList.todo-list
    FunctionChangeText
</template>

<script>
import TodoList from '@/views/TodoList.vue';
import FunctionChangeText from '@/views/FunctionChangeText.vue';

export default {
  name: 'Edit',
  components: {
    TodoList,
    FunctionChangeText
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
@import "@/styles/Edit.scss";
</style>
