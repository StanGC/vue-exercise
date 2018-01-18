const types = {
  CREATE_TODO: 'todo/CREATE_TODO',
  TOGGLE_TODO: 'todo/TOGGLE_TODO',
  DELETE_TODO: 'todo/DELETE_TODO',
  UPDATE_TODO: 'todo/UPDATE_TODO',
}

const state = {
  todos: [
    { key: 0, content: 'todo1', done: true },
    { key: 1, content: 'todo2', done: false },
    { key: 2, content: 'todo3', done: false },
    { key: 3, content: 'todo4', done: false },
    { key: 4, content: 'todo5', done: false }
  ]
}

const getters = {
  getDone (state) {
    return state.todos.filter((item) => {
      return item.done;
    });
  },
  getTodo (state) {
    return state.todos.filter((item) => {
      return !item.done;
    });
  }
}

const actions = {
  addTodo ({ commit }, newTodo) {
    commit(types.CREATE_TODO, newTodo);
  },
  toggleTodo ({ commit }, obj) {
    console.log('toggleTodo', obj);
    commit(types.TOGGLE_TODO, obj);
  },
  deleteTodo ({ commit }, key) {
    commit(types.DELETE_TODO, key);
  },
  updateTodo ({ commit }, obj) {
    console.log('updateTodo', obj);
    commit(types.UPDATE_TODO, obj);
  },
}

// 流水 key
let todoKey = state.todos.length;

const mutations = {
  // 新增
  [types.CREATE_TODO] (state, newTodo) {
    state.todos.push({
      key: todoKey,
      content: newTodo,
      done: false
    });

    todoKey++;
  },

  [types.TOGGLE_TODO] (state, obj) {
    for(var i in state.todos){
      var item = state.todos[i];
      if ( item.key === obj.key){
        item.done = obj.checked;
        console.log('TOGGLE_TODO:', item.content, '| obj.checked?', obj.checked, '| done?', item.done);
        break;
      }
    }
  },

  [types.DELETE_TODO] (state, key) {
    for(var i in state.todos){
      var item = state.todos[i];
      if ( item.key === key){
        console.log('DELETE_TODO:', item.content, ', index?', i);
        state.todos.splice(i, 1);
        break;
      }
    }
  },

  // 更新
  [types.UPDATE_TODO] (state, obj) {
    for(var i in state.todos){
      var item = state.todos[i];
      if ( item.key === obj.key){
        console.log('UPDATE_TODO:', item.content, ' to →', obj.update);
        state.todos[ i ].content = obj.update;
        break;
      }
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
