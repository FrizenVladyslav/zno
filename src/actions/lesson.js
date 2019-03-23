import Api from './api'
import store from 'utils/store'
import { actionTypes } from 'reducers/lesson'

const endpoint = 'lesson'

export async function add(title) {
  let res = await Api.post(endpoint, { title })
  if (res.status !== 201) throw new Error('Lesson not created')

  store.dispatch({ type: actionTypes.ADD, payload: res.data })
}

export async function get() {
  let res = await Api.get(endpoint)
  if (res.status !== 200) throw new Error('Lessons not geted')

  store.dispatch({ type: actionTypes.SET, payload: res.data })
}

export async function edit(id, title) {
  let res = await Api.put(`${endpoint}/${id}`, { title })
  if (res.status !== 200) throw new Error('Lesson not edited')

  store.dispatch({ type: actionTypes.EDIT, payload: { id, title } })
}
