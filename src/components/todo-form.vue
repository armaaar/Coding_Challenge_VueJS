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

/**
 * Form used to add new todo items
 * @class
 */
@Component
export default class TodoForm extends Vue {
  /**
   * @var {String} newTodo - The new todo title to be added
   * @default ""
   */
  newTodo: String = ""

  /**
   * Add new todo item
   * @method toggleTodoCompletion 
   */
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
