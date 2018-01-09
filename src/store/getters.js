// count
export const getCount = state => state.count;

// todo
export const getDone = state => {
  return state.todos.filter((item) => {
    return item.done;
  });
}

export const getTodo = state => {
  return state.todos.filter((item)=>{
    return !item.done;
  });
}
