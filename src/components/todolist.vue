<template lang="pug">
#todolist.todolistDiv
  .addArea
    //- input.ipt(type='text', v-model='inputVaule', v-on='add' placeholder="ADD A NEW MISSION")
    input.ipt(type='text', v-model='inputVaule', placeholder="ADD A NEW MISSION")
    i.material-icons.add(v-on:click='add') add
  .task
    li(v-for='(item, index) in items')
        label.container(:for="gernerateId(index)" v-bind:class='{ complete:item.completed }') {{item.text}}
            input(:id="gernerateId(index)" type='radio', v-model='item.completed')
            span.checkmark(v-on:click='removeTodo(item)')
        //- i.material-icons(:class='{ breakTime_color: breakStatus }' ) play_circle_outline
        i.material-icons  play_circle_outline
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
]
export default {
  data () {
    return {
      items: itemlist,
      inputVaule: ''
      // breakStatus: app.breakStatus
    }
  },

  methods: {
    add: function () {
      if (this.inputVaule.length === 0) {
        alert('Input is require，please enter again')
      } else {
        this.items.push({
          text: this.inputVaule,
          completed: false
        })
        this.inputVaule = ''
      }
    },
    removeTodo: function (todo) {
      this.items.splice(this.items.indexOf(todo), 1)
    },
    gernerateId: function (index) {
      return 'ID_' + index
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/todolist.scss";
</style>
