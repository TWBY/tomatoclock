<template lang="pug">
#edit
    FunctionChangeText
    transition(name="page" mode="out-in")
      router-view
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

.page-enter-active,
.page-leave-active {
  transition: 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
