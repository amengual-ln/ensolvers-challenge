export const getFoldersState = (store) => store.folders

export const getFolders = (store) =>
  getFoldersState(store) ? getFoldersState(store) : []
