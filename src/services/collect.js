import http from '../fetch'
import api from '../api'




export function getGuestList(params) {
  return http.post(api.getGuestList + params.phone + `.json?token=1afb756d16740266efde290917ca1a8e&pages=15&pages=16&year=2018`, params)
}

export function collectDocument(params) {
  return http.post(api.collectDocument + params.phone + '.json?token=1afb756d16740266efde290917ca1a8e', params)
  
}

export function collectGuest (params) {
  return http.post(api.collectGuest + params.phone + '.json?token=1afb756d16740266efde290917ca1a8e', params )
}

export function cancelCollectDocument(params) {
  return http.post(api.disCollectDocument + params.phone + '.json?token=1afb756d16740266efde290917ca1a8e', params)
}

export function cancelCollectGuest (params) {
  return http.post(api.disCollectGuest + params.phone + '.json?token=1afb756d16740266efde290917ca1a8e', params )
}

export function getDocumentList(params) {
  return http.post(api.getDocumentList + params.phone + `.json?token=1afb756d16740266efde290917ca1a8e`, params)
}

export function updateCollectStatus(params) {
  return http.post(`http://api.thegitc.com/api/gitc/collect/status/${params.phone}.json?token=1afb756d16740266efde290917ca1a8e`, params)
}
