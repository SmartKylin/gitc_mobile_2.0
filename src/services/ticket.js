import http from '../fetch'
import api from '../api'

export function getTicketList(params) {
  return http.post(api.getTicketList + `3.json?token=1afb756d16740266efde290917ca1a8e`, params)
}

export function getTicketDetail(params) {
    return http.post(api.getTicketDetail + `3.json?token=1afb756d16740266efde290917ca1a8e`, params)
}