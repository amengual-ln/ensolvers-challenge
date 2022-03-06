import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleDone } from '../store/actions/todos'

export const Todo = ({ id, description, done = false }) => {
  const dispatch = useDispatch()

  const toggleStatus = async (id, done) => {
    dispatch(toggleDone(id, done))
  }

  const removeTodo = async (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <article className="flex justify-between bg-white rounded my-3 mx-1 p-2 px-4">
      <div>
        <input
          type="checkbox"
          name="done"
          defaultChecked={done}
          onChange={() => toggleStatus(id, done)}
          className="mr-2"
        />
        <span className="mr-2">{description}</span>
      </div>
      <div>
        <Link to={`/todo/${id}`} className="mr-2 px-2 py-1 rounded border-solid border-blue-400 text-blue-400 hover:border-transparent hover:bg-blue-300 hover:text-white">
          Editar
        </Link>
        <Link to="#" onClick={() => removeTodo(id)} className="px-2 py-1 rounded border-solid border-red-400 text-red-400 hover:border-transparent hover:bg-red-400 hover:text-white">
          Eliminar
        </Link>
      </div>
    </article>
  )
}