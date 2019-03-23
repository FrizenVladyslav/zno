const prefix = 'USER_'

export const actionTypes = {
  SET: `${prefix}SET`,
  UNSET: `${prefix}UNSET`,
}

const initState = {
  role: 'Anon',
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SET:
      return action.payload
    case actionTypes.UNSET:
      return initState
    default:
      return state
  }
}
