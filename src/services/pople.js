import api from '../api'
import http from '../fetch'

export function pople(library_id, phone) {
  return http.get(api.pople + library_id + `/list.json?token=1afb756d16740266efde290917ca1a8e&phone=${phone}`)
}