import Api from './api'
import store from 'utils/store'
import { actionTypes } from 'reducers/lection'

const endpoint = 'lection'

export async function add(lectionInfo) {
  let res = await Api.post(endpoint, lectionInfo)
  if (res.status !== 201) throw new Error('Lesson not created')

  store.dispatch({ type: actionTypes.ADD, payload: res.data })
}

export async function get(params) {
  let res = await Api.post(`${endpoint}/getAllLections`, params)
  if (res.status !== 200) throw new Error('Lections not geted')

  store.dispatch({ type: actionTypes.SET, payload: res.data })
}

export async function edit(body) {
  let res = await Api.put(`${endpoint}/${body.id}`, body)
  if (res.status !== 200) throw new Error('Lection not edited')

  store.dispatch({ type: actionTypes.EDIT, payload: body })
}
