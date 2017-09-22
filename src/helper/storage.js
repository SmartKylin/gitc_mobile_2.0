const get  = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

const set = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

const PHONE_KEY = 'phone'

export default {
  get,
  set,
  PHONE_KEY
}