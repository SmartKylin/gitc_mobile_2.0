import http from '../fetch'
import api from '../api'

export function getTicketList(params) {
  return http.post(api.getTicketList + `5.json?token=9d349496a7dab8f131c620a806e9ec6d`, params)
}

export function getTicketDetail(params) {
    return http.post(api.getTicketDetail + `5.json?token=9d349496a7dab8f131c620a806e9ec6d`, params)
}