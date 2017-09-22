import http from '../fetch'
import api from '../api'

export function getTicketList(phone) {
  return http.get(api.getTicketList + phone + `.json?token=1afb756d16740266efde290917ca1a8e&phone=${phone}`)
}

export function getTicketDetail(phone, id) {
  return http.get(api.getTicketDetail + phone + `.json?token=1afb756d16740266efde290917ca1a8e&phone=${phone}&cid=${id}`)
}