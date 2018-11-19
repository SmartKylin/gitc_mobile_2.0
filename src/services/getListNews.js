import api from '../api'
import http from '../fetch'

export function getListNews(id) {
  return http.get(api.getListNews + `${id}/list.json?token=1afb756d16740266efde290917ca1a8e`)
}

export function getListImgs(id, phone) {
  // let phonenew = phone ? phone : "13800138000"
  //http://api.thegitc.com/api/gitc/page/img-19/list.json?token=1afb756d16740266efde290917ca1a8e
  return http.get(api.getListImgs + `${id}/list.json?token=9d349496a7dab8f131c620a806e9ec6d&order_by=-weight`)
}
//现场加群
export function getListPageImgs(id, phone) {
  // let phonenew = phone ? phone : "13800138000"
  //http://api.thegitc.com/api/gitc/page/img-19/list.json?token=1afb756d16740266efde290917ca1a8e
  return http.get(api.getListPageImgs + `${id}/list.json?token=1afb756d16740266efde290917ca1a8e`)
}
