<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-layout
        align-center
        fill-height
        justify-center
      >
        <v-flex xs6>
          <TodoForm />
          <TodoList/>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoForm from '@/components/todo-form.vue'
import TodoList from '@/components/todo-list.vue'

/**
 * Main component of Todo App which provides a toolbar and contains other app components
 * @class
 */
@Component({
  components: {
    TodoForm,
    TodoList,
  }
})
export default class App extends Vue {
  /**
   * @var {String} title - Tool bar title
   * @default 'Vue Todos'
   */
    title: String = 'Vue Todos'
}
</script>
