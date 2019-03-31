import Api from './api'
import store from 'utils/store'
import { actionTypes } from 'reducers/section'

const endpoint = 'section'

export async function add(title, lessonId) {
  let res = await Api.post(endpoint, { title, lessonId })
  if (res.status !== 201) throw new Error('Section not created')

  store.dispatch({ type: actionTypes.ADD, payload: res.data })
}

export async function get(lessonId) {
  let res = await Api.get(`${endpoint}${lessonId && '?lessonId=' + lessonId}`)
  if (res.status !== 200) throw new Error('Sections not geted')

  store.dispatch({ type: actionTypes.SET, payload: res.data })
}

export async function edit(id, title) {
  console.log('id title', id, title)
  let res = await Api.put(`${endpoint}/${id}`, { title })
  if (res.status !== 200) throw new Error('Section not edited')

  store.dispatch({ type: actionTypes.EDIT, payload: { id, title } })
}

export function unset() {
  store.dispatch({ type: actionTypes.UNSET })
}
