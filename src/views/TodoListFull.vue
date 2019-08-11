<template lang="pug">
#todolist.todoListDiv
  .addArea(:class='{ breakTime_color: breakStatus }')
    input.ipt(
      type='text',
      v-model='inputVaule',
      placeholder="ADD A NEW MISSION")
    i.material-icons.add(v-on:click='add') add
  .task
    .todo
      h3.title TODO
      li(v-for='(item, index) in items')
        label.container(
          :for="gernerateItemId(index)"
          :class='{ complete:item.completed, breakTime_color: breakStatus }') {{item.text}}
            input(
              :id="gernerateItemId(index)"
              type='radio',
              v-model='item.completed')
            span.checkmark(v-on:click='moveToDone(item)')
        i.material-icons  play_circle_outline
    .done
      h3.title Done
      li(v-for='(item, index) in doneItem')
        label.container(
          :for="gernerateDoneId(index)"
          :class='{ complete:item.completed, breakTime_color: breakStatus }') {{item.text}}
        i.material-icons(v-on:click='deleteItem(item)')  delete
</template>

<script>
var itemlist = [
  {
    text: 'Learn Vue Js',
    completed: false
  },
  {
    text: 'Code a todo list',
    completed: false
  },
  {
    text: 'Learn something else',
    completed: false
  }
];

var doneitemlist = [
  {
    text: '與任何人共同作業',
    completed: true
  }
];

export default {
  props: {
    breakStatus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      items: itemlist,
      inputVaule: '',
      todoItem: '',
      doneItem: doneitemlist
    };
  },

  methods: {
    add: function () {
      if (this.inputVaule.length === 0) {
        alert('Input is require，please enter again');
      } else {
        this.items.push({
          text: this.inputVaule,
          completed: false
        });
        this.inputVaule = '';
      }
    },
    moveToDone: function (todo) {
      this.items.splice(this.items.indexOf(todo), 1);
      this.doneItem.push({
        text: todo.text,
        completed: true
      });
    },
    gernerateItemId: function (index) {
      return 'ItemID_' + index;
    },
    gernerateDoneId: function (index) {
      return 'DoneID_' + index;
    },
    deleteItem: function (doneItem) {
      this.doneItem.splice(this.doneItem.indexOf(doneItem), 1);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/TodoListFull.scss";
</style>
