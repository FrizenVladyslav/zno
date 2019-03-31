import clone from 'lodash/clone'

const prefix = 'SECTION_'

export const actionTypes = {
  ADD: `${prefix}ADD`,
  EDIT: `${prefix}EDIT`,
  SET: `${prefix}SET`,
  UNSET: `${prefix}_UNSET`,
}

const initState = {
  sections: null,
}

export default function sectionReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        sections: [...state.sections, action.payload],
      }
    case actionTypes.EDIT:
      const { id, title } = action.payload
      const sections = clone(state.sections)
      sections[sections.findIndex(({ _id }) => _id === id)].title = title

      return {
        ...state,
        sections,
      }
    case actionTypes.SET:
      return {
        ...state,
        sections: action.payload,
      }
    case actionTypes.UNSET:
      return { ...initState }
    default:
      return state
  }
}
