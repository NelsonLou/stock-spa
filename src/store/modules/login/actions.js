import * as types from './mutation_type';
import jwtToken from '../../../jwt/jwt.js'
import * as api from '../../../axios/api.js'
import axios from 'axios'

export default {
    loginRequest({dispatch}, formData) {
        return axios.post(api.user.login, formData).then(res => {
            dispatch('loginSuccess', res.data)
        }).catch( err => {
          dispatch('loginFail')
        })
    },
    loginSuccess({dispatch}, tokenResponse) {
        jwtToken.setToken(tokenResponse.token)
        jwtToken.setAuthId(tokenResponse.auth_id)
        dispatch('setAuthUser')
    },
    logoutRequest({dispatch}) {
        return axios.post(api.user.logout).then(res => {
            jwtToken.removeToken()
            jwtToken.removeAuthId()
            dispatch('unsetAuthUser')
        })
    }
}
