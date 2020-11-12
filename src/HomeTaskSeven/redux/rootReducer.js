import { combineReducers } from '@reduxjs/toolkit'

import gistsReducer from './slices/gistsSlice';
import filesReducer from './slices/filesSlice'

export default combineReducers({
  gists: gistsReducer,
  files: filesReducer
})
