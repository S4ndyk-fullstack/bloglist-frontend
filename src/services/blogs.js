import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null 

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data 
}

const create = async blog => {
  console.log(token)
  const res = await axios.post(baseUrl, blog, { headers: { Authorization: token } })
  return res.data
}

export default { getAll, create, setToken }