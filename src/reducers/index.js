import { combineReducers } from 'redux'

import lection from './lection'
import lesson from './lesson'
import section from './section'
import user from './user'

export default combineReducers({
  lection,
  lesson,
  section,
  user,
})
