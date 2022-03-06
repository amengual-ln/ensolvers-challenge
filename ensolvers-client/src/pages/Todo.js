import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { updateTodo } from '../store/actions/todos'

export const Todo = () => {
  const { id } = useParams()
  const [todo, setTodo] = useState({})
  const [newDescription, setNewDescription] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchTodo = async () => {
    const response = await axios.get(`http://localhost:3001/todo/${id}`)
    const item = response.data.todo
    setTodo(item)
  }

  const editTodo = async () => {
    if (newDescription !== '') {
      dispatch(updateTodo(todo.id, newDescription))
    }
    navigate('/')
  }

  useEffect(() => fetchTodo(), [])

  return (
    <>
      <form className="grid grid-cols-8 gap-2 my-3">
        <input
          type="text"
          defaultValue={todo.description}
          onChange={(event) => setNewDescription(event.target.value)}
          className="col-span-6"
        />
        <input
          type="submit"
          value="Editar"
          onClick={(event) => {
            event.preventDefault()
            editTodo()
          }}
          className="col-span-2 cursor-pointer font-medium bg-blue-300 text-white hover:border-transparent hover:bg-blue-500"
        />
      </form>
    </>
  )
}