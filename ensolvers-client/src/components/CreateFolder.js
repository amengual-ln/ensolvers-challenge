import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createFolder } from '../store/actions/folders'

export const CreateFolder = () => {
  const [folder, setFolder] = useState('')
  const dispatch = useDispatch()

  const CreateNewFolder = async () => {
    if (folder === '') return
    dispatch(createFolder(folder))
    setFolder('')
  }

  return (
    <form className="grid grid-cols-10 my-3">
      <input
        type="text"
        onChange={(event) => {
          setFolder(event.target.value)
        }}
        value={folder}
        placeholder="Nueva carpeta"
        className="col-span-8 p-2 border border-solid border-slate-300 outline-none"
      />
      <input
        type="submit"
        value="Crear"
        onClick={(event) => {
          event.preventDefault()
          CreateNewFolder()
        }}
        className="col-span-2 cursor-pointer font-medium bg-blue-300 text-white hover:border-transparent hover:bg-blue-500"
      />
    </form>
  )
}