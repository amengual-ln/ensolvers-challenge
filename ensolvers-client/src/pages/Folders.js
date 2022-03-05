import { useSelector } from 'react-redux'

import { getFolders } from '../store/selectors/folders'
import { CreateFolder } from '../components/CreateFolder'
import { Folder } from '../components/Folder'

export const Folders = () => {
  const folders = useSelector((state) => getFolders(state))

  return (
    <>
      <CreateFolder />
      <section>
        {folders.length === 0 &&
          <h4>...</h4>
        }
        {folders.map((folder) => (
          <Folder
            id={folder.id}
            key={folder.id}
            name={folder.name}
          />
        ))}
      </section>
    </>
  )
}