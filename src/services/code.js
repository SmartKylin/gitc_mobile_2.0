import api from '../api'
import http from '../fetch'

export function sendCode(phone) {
  return http.get(api.sendCode + phone + '.json?token=1afb756d16740266efde290917ca1a8e&phone=' + phone)
}