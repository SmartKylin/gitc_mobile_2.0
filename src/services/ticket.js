import http from '../fetch'
import api from '../api'

export function getTicketList(params) {
  return http.post(api.getTicketList + params.phone + `.json?token=1afb756d16740266efde290917ca1a8e`, params)
}

export function getTicketDetail(params) {
  return http.post(api.getTicketDetail + params.phone + `.json?token=1afb756d16740266efde290917ca1a8e&domain=3`, params)
}