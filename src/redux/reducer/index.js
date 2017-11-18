import * as TYPES from '../action-types'
// import storage from '../../helper/storage'

const userSign = (state={}, action) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return Object.assign({}, state,
        {phone: action.phone}
      )
    case TYPES.SIGN_OUT:
      return Object.assign({}, state,
      {phone: ''}
      )
    case TYPES.OPEN_LOGIN:
      return Object.assign({}, state,
      {
        loginShow: true
      }
      )
    case TYPES.CLOSE_LOGIN:
      return Object.assign({}, state,
      {
        loginShow: false
      }
      )
    case TYPES.SET_LOGIN_CB:
      return Object.assign({}, state,
      {
        loginCb: action.loginCb
      }
      )
    case TYPES.SET_SCROLLTOP:
      return Object.assign({}, state,
      {
        scrollTop: action.scrollTop
      }
      )
    default:
      return state
  }
}


export default () => {
  return userSign
}