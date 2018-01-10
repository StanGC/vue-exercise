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
        <ol>
          <todoItem v-for="(item, index) in todoList" :item="item" />
        </ol>
      </div>

      <div class="col-md-6">
        <h2>Done List:</h2>
        <ol>
          <li v-for="(item, index) in doneList">
            <label>
              <input
                type="checkbox"
                :checked="item.done"
                @change="toggleTodo( item.key )">
                {{ item.content }}
            </label>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import todoItem from '../components/todo-item.vue';
export default {
  components: {
    todoItem
  },
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
