import Api from './api'
import store from 'utils/store'
import { actionTypes } from 'reducers/user'
import history from 'utils/history'

const endpoint = 'user'

export async function login(email, password) {
  const body = {
    user: { email, password },
  }

  let res = await Api.post(`${endpoint}/login`, body, false)
  if (res.status === 400) throw new Error('Невірна пошта або пароль')
  if (res.status !== 200)
    throw new Error(res.data.message || 'Невірна пошта або пароль')

  if (!res.data.token) throw new Error('Невірна пошта або пароль')

  Api.setTokenToLocalStorage(res.data.token)
  let user = await getUserInfo()
  if (user.role === 'admin') {
    history.push('/admin')
  } else {
    history.push('/')
  }

  return res.data
}

export function signOut() {
  Api.deleteTokenFromLocalStorage()
  history.replace('/')
  store.dispatch({ type: actionTypes.UNSET })
}

export async function getUserInfo() {
  if (!Api.getTokenFromLocalStorage()) return null

  let res = await Api.get(`${endpoint}/getUserInfo`)
  if (res.status !== 200) return signOut()

  if (!res.data._id) return signOut()

  store.dispatch({ type: actionTypes.SET, payload: res.data })

  return res.data
}