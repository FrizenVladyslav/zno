import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function(status) {
    return true
  },
})

export default class Api {
  static host = instance.defaults.baseURL

  static getTokenFromLocalStorage() {
    return localStorage.getItem('access_token')
  }

  static setTokenToLocalStorage(token) {
    return localStorage.setItem('access_token', token)
  }

  static deleteTokenFromLocalStorage() {
    return localStorage.removeItem('access_token')
  }

  static get(endpoint, authorization = true, id = '') {
    if (authorization) {
      instance.defaults.headers.common['Authorization'] =
        'Bearer ' + Api.getTokenFromLocalStorage()
    }
    return instance.get(endpoint)
  }

  static post(endpoint, body = null, authorization = true) {
    if (authorization) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + Api.getTokenFromLocalStorage()
    } else {
      delete axios.defaults.headers.common['Authorization']
    }

    return instance.post(endpoint, body)
  }

  static put(endpoint, body = null, authorization = true) {
    if (authorization) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + Api.getTokenFromLocalStorage()
    } else {
      delete axios.defaults.headers.common['Authorization']
    }

    return instance.put(endpoint, body)
  }

  static patch(endpoint, body = null, authorization = true, headers = {}) {
    body = JSON.stringify(body)

    if (Object.keys(headers).length === 0)
      headers = {
        'Content-Type': 'application/json',
        'Content-Length': body ? body.length : 0,
      }

    if (authorization)
      headers.Authorization = 'Bearer ' + Api.getTokenFromLocalStorage()

    return fetch(`${Api.host}${endpoint}`, {
      mode: 'cors',
      method: 'PATCH',
      headers,
      body,
    })
  }

  static del(endpoint, body = null, authorization = true, headers = {}) {
    body = JSON.stringify(body)

    if (Object.keys(headers).length === 0)
      headers = {
        'Content-Type': 'application/json',
        'Content-Length': body ? body.length : 0,
      }

    if (authorization)
      headers.Authorization = 'Bearer ' + Api.getTokenFromLocalStorage()

    return fetch(`${Api.host}${endpoint}`, {
      mode: 'cors',
      method: 'DELETE',
      headers,
      body,
    })
  }
}
