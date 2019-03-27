import clone from 'lodash/clone'

const prefix = 'LECTION_'

export const actionTypes = {
  ADD: `${prefix}ADD`,
  EDIT: `${prefix}EDIT`,
  GET: `${prefix}GET`,
  SET: `${prefix}SET`,
  UNSET: `${prefix}UNSET`,
}

const initState = {
  lections: null,
  lection: null,
}

export default function lectionReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        lections: [...state.lections, action.payload],
      }
    case actionTypes.EDIT:
      const { id } = action.payload
      const lections = clone(state.lections)
      const index = lections ? lections.findIndex(({ _id }) => _id === id) : -1
      if (index !== -1) {
        const updatedLection = Object.assign(lections[index], action.payload)
        lections[index] = updatedLection
        return {
          ...state,
          lections,
        }
      } else return state
    case actionTypes.GET:
      return {
        ...state,
        lection: action.payload,
      }
    case actionTypes.SET:
      return {
        ...state,
        lections: action.payload,
      }
    case actionTypes.UNSET:
      return initState
    default:
      return state
  }
}
