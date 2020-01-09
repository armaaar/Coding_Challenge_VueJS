<template lang="html">
  <div>
    <TodoItem 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      class="mb-3" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Todo, { TodoType } from '@/models/Todo';

import TodoItem from '@/components/todo-item.vue';

@Component({
  components: {
    TodoItem
  }
})
export default class App extends Vue {
  get todos (): Array<TodoType>  {
    return Todo.all()
  }
}
</script>

<style lang="css">
</style>
