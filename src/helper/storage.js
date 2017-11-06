const get  = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

const set = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

const remove = (key) => {
  localStorage.removeItem(key)
}

const PHONE_KEY = 'phone'
const DATA_KEY = 'gitc-data'

export default {
  get,
  set,
  remove,
  PHONE_KEY,
  DATA_KEY
}