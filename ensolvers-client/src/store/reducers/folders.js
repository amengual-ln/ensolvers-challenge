export default function state(state = [], action) {
  if (action.type === '@folders/SET_FOLDERS') {
    action.payload.forEach((folder) => {
      if (!state.find((previousFolder) => previousFolder.id === folder.id)) {
        state = state.concat(folder)
      }
    })
  }
  if (action.type === '@folders/CREATE_FOLDER') {
    state = state.concat(action.payload)
  }
  if (action.type === '@folders/UPDATE_FOLDER') {
    state = state.map((folder) => {
      if (folder.id === action.payload.id) {
        return {
          id: folder.id,
          name: action.payload.name,
        }
      }
      return folder
    })
  }
  if (action.type === '@folders/DELETE_FOLDER') {
    state = state.filter((folder) => folder.id !== action.payload)
  }
  return state
}
