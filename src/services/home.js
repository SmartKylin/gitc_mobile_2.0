import api from '../api'
import http from '../fetch'

export function getSpeecherGroup(phone) {
  let phonenew = phone? phone : "13800138000"
  return http.get(`http://api.thegitc.com/api/gitc/person-90/list.json?token=9d349496a7dab8f131c620a806e9ec6d&phone=13800138000&phone=${phonenew}`)
}

export function getPopleList(pageId, phone) {
  let phonenew = phone? phone : "13800138000"
  return http.get(api.popleList + pageId + `/list.json?token=1afb756d16740266efde290917ca1a8e&phone=${phonenew}&order_by=ename`)
}

export function getAgenda(phone) {
  let phonenew = phone? phone : "13800138000"
  return http.get(`http://api.thegitc.com/api/gitc/person/beijing.json?token=1afb756d16740266efde290917ca1a8e&phone=${phonenew}&order_by=stime`)
}

export function getDate1(phone) {
  let phonenew = phone? phone : "13800138000"
  return http.get(`http://api.thegitc.com/api/gitc/person-4/all/list.json?token=1afb756d16740266efde290917ca1a8e&type=1&phone=${phonenew}`)
}

export function getDate2(phone) {
  let phonenew = phone? phone : "13800138000"
  return http.get(`http://api.thegitc.com/api/gitc/person-6/all/list.json?token=1afb756d16740266efde290917ca1a8e&type=1&phone=${phonenew}`)
}


// 亮点环节
export function getLightDot() {
  return http.get(api.getListNews + `94/list.json?token=1afb756d16740266efde290917ca1a8e`)
}

// 服务信息
export function getServiceInfo() {
  return http.get(api.getListNews + `97/list.json?token=1afb756d16740266efde290917ca1a8e`)
}
