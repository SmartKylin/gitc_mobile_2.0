import api from '../api'
import http from '../fetch'

export function getListNews(id) {
  return http.get(api.getListNews + `${id}/list.json?token=1afb756d16740266efde290917ca1a8e`)
}

export function getListImgs(id, phone) {
  // let phonenew = phone ? phone : "13800138000"
  return http.get(api.getListImgs + `${id}/list.json?token=1afb756d16740266efde290917ca1a8e&order_by=-weight`)
}