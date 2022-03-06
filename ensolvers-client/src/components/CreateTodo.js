import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../store/actions/todos'
import { useParams } from 'react-router-dom'

export const CreateTodo = () => {
  const { id } = useParams()
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const CreateNewTodo = async () => {
    if (todo === '') return
    dispatch(createTodo(todo, id))
    setTodo('')
  }

  return (
    <form className="grid grid-cols-10 my-3">
      <input
        type="text"
        onChange={(event) => {
          setTodo(event.target.value)
        }}
        value={todo}
        placeholder="Nuevo to do..."
        className="col-span-8 p-2 border border-solid border-slate-300 outline-none"
      />
      <input
        type="submit"
        value="Crear"
        onClick={(event) => {
          event.preventDefault()
          CreateNewTodo()
        }}
        className="col-span-2 cursor-pointer font-medium bg-blue-300 text-white hover:border-transparent hover:bg-blue-500"
      />
    </form>
  )
}