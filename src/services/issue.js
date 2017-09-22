import api from '../api'
import http from '../fetch'

export function issue(params) {
  return http.post(api.issue + 'add.json?token=1afb756d16740266efde290917ca1a8e', params)
}