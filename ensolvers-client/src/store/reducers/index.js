import { combineReducers } from 'redux'
import folders from './folders'
import todos from './todos'

export default combineReducers({ folders, todos })