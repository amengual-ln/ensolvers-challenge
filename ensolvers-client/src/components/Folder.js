import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteFolder } from '../store/actions/folders'

export const Folder = ({ id, name }) => {
  const dispatch = useDispatch()

  const removeFolder = async (id) => {
    dispatch(deleteFolder(id))
  }

  return (
    <article className="flex justify-between bg-white rounded my-3 mx-1 p-2 px-4">
      <div>
        <span className="mr-2">{name}</span>
      </div>
      <div>
        <Link to={`/folder/${id}`} className="mr-2 px-2 py-1 rounded border-solid border-blue-400 text-blue-400 hover:border-transparent hover:bg-blue-300 hover:text-white">
          Ver
        </Link>
        <Link to="#" onClick={() => removeFolder(id)} className="px-2 py-1 rounded border-solid border-red-400 text-red-400 hover:border-transparent hover:bg-red-400 hover:text-white">
          Eliminar
        </Link>
      </div>
    </article>
  )
}