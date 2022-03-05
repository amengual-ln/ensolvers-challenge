import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../store/actions/todos'

export const CreateTodo = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const CreateNewTodo = async () => {
    if (todo === '') return
    dispatch(createTodo(todo))
    setTodo('')
  }

  return (
    <form className="grid grid-cols-8 gap-2 my-3">
      <input
        type="text"
        onChange={(event) => {
          setTodo(event.target.value)
        }}
        value={todo}
        placeholder="Nuevo to do..."
        className="col-span-6"
      />
      <input
        type="submit"
        value="+"
        onClick={(event) => {
          event.preventDefault()
          CreateNewTodo()
        }}
        className="col-span-2 cursor-pointer font-medium bg-blue-300 text-white hover:border-transparent hover:bg-blue-500"
      />
    </form>
  )
}