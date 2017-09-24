import api from '../api'
import http from '../fetch'

export function pagepople(pagepopleall, phone) {
  return http.get(api.pagepople + pagepopleall + `/all/list.json?token=1afb756d16740266efde290917ca1a8e&phone=${phone}`)
}