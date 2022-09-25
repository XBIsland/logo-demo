import axios from 'axios'
import { getToken } from '../utils'
const base = '/api'

export const login = params => {
  return new Promise((resolve, reject) => {
    axios.post(`${base}/demo/login.php?phase=1`, params, {
      headers: { 'content-type': 'multipart/form-data' }
    }).then(res => {
      const { status, data, message } = res?.data
      if (status === 0) {
        resolve(data)
      } else {
        reject(message)
      }
    })
  })
}

export const verify = params => {
  return new Promise((resolve, reject) => {
    axios.post(`${base}/demo/login.php?phase=2`, params, {
      headers: { 
        'content-type': 'multipart/form-data', 
        'authorization': `Bearer ${getToken()}` }
    }).then(res => {
      const { status, data, message } = res?.data
      if (status === 0) {
        resolve(data)
      } else {
        reject(message)
      }
    })
  })
}
