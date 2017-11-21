import storage from './storage';

export function authCheck(context, cb) {
  let phone = storage.get(storage.PHONE_KEY);
  // if(phone) {}
  return phone;
}

export function setIphone(phone) {
  let cookie = document.cookie;
  document.cookie = cookie ? cookie + ';phone=' + phone : 'phone=' + phone;
}

export const TOKEN = '1afb756d16740266efde290917ca1a8e';
