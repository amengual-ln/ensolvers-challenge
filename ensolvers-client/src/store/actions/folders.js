import axios from 'axios'

const API_URL = 'http://localhost:3001'

export const fetchFolders = () => async (dispatch) => {
  const response = await axios.get(API_URL + '/folder')
  const folders = response.data.folders
  dispatch({
    type: '@folders/SET_FOLDERS',
    payload: folders,
  })
}

export const createFolder = (folderName) => async (dispatch) => {
  const response = await axios.post(API_URL + '/folder', {
    name: folderName,
  })
  dispatch({
    type: '@folders/CREATE_FOLDER',
    payload: response.data.newFolder,
  })
}

export const updateFolder = (id, name) => async (dispatch) => {
  await axios.put(`${API_URL}/folder/${id}`, {
    name: name,
  })
  dispatch({
    type: '@folders/UPDATE_FOLDER',
    payload: { id, name },
  })
}

export const deleteFolder = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/folder/${id}`)
  dispatch({
    type: '@folders/DELETE_FOLDER',
    payload: id,
  })
}