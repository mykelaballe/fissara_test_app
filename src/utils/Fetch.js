import axios from 'axios'
import Consts from './Consts'
import Storage from './Storage'

let headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const callAPI = async (method, url, data = null) => {
  let user = await Storage.doLoad(Consts.db.user)
  if(user) {
    headers.Authorization = `Bearer ${user.access_token}`
  }

  let config = {
    method,
    url:`${Consts.baseURL}${url}`,
    headers
  }

  if(data) config.data = JSON.stringify(data)

  let response = await axios(config)

  return response.data
}

export default {
  post: async (url, data = null) => callAPI('post', url, data),

  put: async(url, data = null) => callAPI('put', url, data),

  delete: async (url, data = null) => callAPI('delete', url, data),

  get: async url => callAPI('get', url)
}