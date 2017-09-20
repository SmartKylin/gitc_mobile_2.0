import api from '../api'
import http from '../fetch'

export function getDetalisNews(id) {
    return http.get(api.getDetalisNews + `/${id}.json?token=1afb756d16740266efde290917ca1a8e`)
}
