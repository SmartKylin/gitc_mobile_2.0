import api from '../api'
import http from '../fetch'

export function sign(phone, params) {
  return http.post(api.user + phone + '.json?token=1afb756d16740266efde290917ca1a8e', params)
}