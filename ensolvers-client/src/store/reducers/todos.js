export default function state(state = [], action) {
  if (action.type === '@todos/SET_TODOS') {
    action.payload.forEach((todo) => {
      if (!state.find((previousTodo) => previousTodo.id === todo.id)) {
        state = state.concat(todo)
      }
    })
  }
  if (action.type === '@todos/CREATE_TODO') {
    state = state.concat(action.payload)
  }
  if (action.type === '@todos/MARK_DONE') {
    state = state.map((todo) => {
      if (todo.id === action.payload) {
        return {
          id: todo.id,
          description: todo.description,
          done: !todo.done,
        }
      }
      return todo
    })
  }
  if (action.type === '@todos/UPDATE_TODO') {
    state = state.map((todo) => {
      if (todo.id === action.payload.id) {
        return {
          id: todo.id,
          description: action.payload.description,
          done: todo.done
        }
      }
      return todo
    })
  }
  if (action.type === '@todos/DELETE_TODO') {
    state = state.filter((todo) => todo.id !== action.payload)
  }
  return state
}
