<template lang="html">
  <v-card 
    :color="todo.completed ? 'success' : undefined" 
    :dark="todo.completed ? true : false">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ todo.title }}</h3>
      </div>
    </v-card-title>
    <v-btn
      @click="toggleTodoCompletion">
      {{ todo.completed ? 'Undo' : 'Complete' }}
    </v-btn>
    <v-btn 
      class="right"
      color="error"
      @click="deleteTodo">
      Delete
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Todo, { TodoType } from '@/models/Todo';

/**
 * A todo item displayer
 * @class
 */
@Component
export default class App extends Vue  {
  /**
   * @prop {TodoType} todo - The todo item to be displayed
   * @private
   */
  @Prop()
  private todo!: TodoType

  /**
   * Toggles todo item completion on or off
   * @method toggleTodoCompletion 
   */
  toggleTodoCompletion (): void {
    Todo.update({
      where: this.todo.id,
      data: {
        completed: !this.todo.completed
      }
    })
  }

  /**
   * Delete a todo item
   * @method deleteTodo 
   */
  deleteTodo (): void {
    Todo.delete(this.todo.id)
  }
}
</script>
