import api from '../api'
import http from '../fetch'

export function gatMeetingDetails(id) {
  return http.get(api.gatMeetingDetails + id + `.json?token=1afb756d16740266efde290917ca1a8e`)
}