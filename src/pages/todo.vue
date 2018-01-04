<template>
  <div class="container">
    <h2>Todo List:</h2>
    <div>
      <input
        type="text"
        placeholder="add Todo.."
        v-model="newTodo"
        @keyup.enter="actionAddTodo" />
      <button @click="actionAddTodo">add todo</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos">
        {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  computed: mapGetters({
    todos: 'getTodos',
  }),
  methods: {
    actionAddTodo () {
      this.$store.dispatch('addTodo', this.newTodo);

      this.newTodo = '';
    }
  }
}
</script>

<style>
  .container {
    margin-left: 200px;
  }
</style>
