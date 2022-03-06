import axios from 'axios'

const API_URL = 'http://localhost:3001'

export const fetchTodos = () => async (dispatch) => {
  const response = await axios.get(API_URL + '/todo')
  const todos = response.data.todos
  dispatch({
    type: '@todos/SET_TODOS',
    payload: todos,
  })
}

export const createTodo = (todo, folder) => async (dispatch) => {
  console.log()
  const response = await axios.post(API_URL + '/todo', {
    description: todo
  })
  dispatch({
    type: '@todos/CREATE_TODO',
    payload: response.data.newTodo,
  })
}

export const toggleDone = (id, isCompleted) => async (dispatch) => {
  await axios.put(`${API_URL}/todo/${id}`, {
    isCompleted: !isCompleted,
  })
  dispatch({
    type: '@todos/MARK_TODO',
    payload: id,
  })
}

export const updateTodo = (id, title) => async (dispatch) => {
  await axios.put(`${API_URL}/todo/${id}`, {
    title: title,
  })
  dispatch({
    type: '@todos/UPDATE_TODO',
    payload: { id, title },
  })
}

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/todo/${id}`)
  dispatch({
    type: '@todos/DELETE_TODO',
    payload: id,
  })
}