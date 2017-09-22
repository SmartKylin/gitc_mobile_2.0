import http from '../fetch'
import api from '../api'


export function collectGuest (params) {
  return http.post(api.collectGuest + params.phone + '.json?token=1afb756d16740266efde290917ca1a8e', params )
}

export function getGuestList(params) {
  return http.post(api.getGuestList + params.phone + `.json?token=1afb756d16740266efde290917ca1a8e`, params)
}

export function collectDocument(params) {
  return http.post(api.collectDocument + params.phone + '.json?token=1afb756d16740266efde290917ca1a8e', params)
  
}

export function getDocumentList(params) {
  return http.post(api.getDocumentList + params.phone + `.json?token=1afb756d16740266efde290917ca1a8e`, params)
}
