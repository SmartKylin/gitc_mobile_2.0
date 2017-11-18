import * as TYPES from '../action-types'
// import {sign, signOut} from "../../services/user";
import storage from '../../../src/helper/storage'

// 异步action
// export const loginIn = phone => dispatch => {
//   console.log(dispatch, 'dispatch');
//   return sign(phone)
//   .then(res => res.json())
//   .then(data => {
//     if (data.status) {
//       dispatch({
//         type: TYPES.SIGN_IN,
//         phone: data.data.phone,
//       })
//       storage.set(storage.PHONE_KEY, data.data.phone)
//     }
//   })
// }
//
// export const loginOut = phone => dispatch => {
//   return signOut(phone)
//   .then(res => res.json())
//   .then(data => {
//     if (data.status) {
//       dispatch({
//         type: TYPES.SIGN_OUT,
//         phone: '',
//       })
//       storage.remove(storage.PHONE_KEY)
//     }
//   })
// }

export const loginIn = phone => {
  storage.set(storage.PHONE_KEY, phone)
  return {
    type: TYPES.SIGN_IN,
    phone: phone
  }
}

export const loginOut = () => {
  storage.remove(storage.PHONE_KEY)
  return {
    type: TYPES.SIGN_OUT,
    phone: '',
  }
}

export const openLoginPop = () => {
  return {
    type: TYPES.OPEN_LOGIN
  }
}

export const closeLoginPop = () => {
  return {
    type: TYPES.CLOSE_LOGIN
  }
}

export const setLoginCb = (loginCb) => {
  return {
    type: TYPES.SET_LOGIN_CB,
    loginCb
  }
}

export default {
  loginIn,
  loginOut,
  openLoginPop,
  closeLoginPop,
  setLoginCb
}