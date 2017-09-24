import api from '../api'
import http from '../fetch'

export function getPopleList(pageId) {
  return http.get(api.popleList + pageId + `/list.json?token=1afb756d16740266efde290917ca1a8e`)
}