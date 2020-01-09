<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    solo
    v-model="newTodo"
    @keydown.enter="addTodoItem"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Todo from '@/models/Todo';

@Component
export default class TodoForm extends Vue {
  newTodo: String = ""

  addTodoItem ():void {
    if (this.newTodo !== "") {
      Todo.insert({
        data: { title: this.newTodo }
      })
      this.newTodo = ""
    }
  }
}
</script>

<style lang="css">
</style>
