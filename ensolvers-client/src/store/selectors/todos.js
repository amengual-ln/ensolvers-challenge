import { getFolders } from './folders'

export const getTodosState = (store) => store.todos

export const getTodos = (store) =>
  getTodosState(store) ? getTodosState(store) : []

export const getTodosByFolder = (store, folderId) => {
  const todos = getTodos(store)
}
