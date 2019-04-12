import Api from './api'
import store from 'utils/store'
import { actionTypes } from 'reducers/user'
import history from 'utils/history'

const endpoint = 'user'

export async function getAllUsers() {
  let res = await Api.get(`${endpoint}/getAllUsers`)
  if (res.status !== 200) throw new Error('Users not geted')

  return res.data
}

export async function getUserInfo() {
  if (!Api.getTokenFromLocalStorage()) return null

  let res = await Api.get(`${endpoint}/getUserInfo`)
  if (res.status !== 200) return signOut()

  if (!res.data._id) return signOut()

  store.dispatch({ type: actionTypes.SET, payload: res.data })

  return res.data
}

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

export async function register(email, password, nick) {
  const body = {
    user: { email, password, nick },
  }

  let res = await Api.post(`${endpoint}/register`, body, false)
  if (res.status !== 200) throw new Error('Помилка регестрації')

  await login(email, password)
}

export function signOut() {
  Api.deleteTokenFromLocalStorage()
  history.replace('/')
  store.dispatch({ type: actionTypes.UNSET })
}
