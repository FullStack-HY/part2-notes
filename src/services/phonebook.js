import axios from 'axios'
const baseUrl = 'http://localhost:3001/phonebook'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

export default { getAll, create }