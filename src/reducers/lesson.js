import clone from 'lodash/clone'

const prefix = 'LESSON_'

export const actionTypes = {
  ADD: `${prefix}ADD`,
  EDIT: `${prefix}EDIT`,
  SET: `${prefix}SET`,
}

const initState = {
  lessons: [],
}

export default function lessonReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        lessons: [...state.lessons, action.payload],
      }
    case actionTypes.EDIT:
      const { id, title } = action.payload
      const lessons = clone(state.lessons)
      lessons[lessons.findIndex(({ _id }) => _id === id)].title = title

      return {
        ...state,
        lessons,
      }
    case actionTypes.SET:
      return {
        ...state,
        lessons: action.payload,
      }
    default:
      return state
  }
}
