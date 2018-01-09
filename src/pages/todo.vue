<template>
  <div class="container">
    <h1>vue & vuex Todo List</h1>
    <hr>
    <div class="row">
      <div class="input-group col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="add Todo.."
          v-model="newTodo"
          @keyup.enter="actionAddTodo" />
        <span class="input-group-btn">
          <button class="btn btn-success" type="button" @click="actionAddTodo">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h2>Todo List:</h2>
        <li v-for="(item, index) in todoList">
          <label>
            <input
              type="checkbox"
              :checked="item.done"
              @change="toggleTodo( item.key )">
              {{ item.content }}
          </label>

          <button class="btn btn-xs btn-danger" @click="deleteTodo( item.key )">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </li>
      </div>

      <div class="col-md-6">
        <h2>Done List:</h2>
        <ul >
          <li v-for="(item, index) in doneList">
            <label>
              <input
                type="checkbox"
                :checked="item.done"
                @change="toggleTodo( item.key )">
                {{ item.content }}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      newTodo: ''
    }
  },
  computed: mapGetters({
    todoList: 'getTodo',
    doneList: 'getDone',
  }),
  methods: {
    ...mapActions([
        'addTodo',
        'toggleTodo',
        'deleteTodo',
    ]),
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

<style></style>
