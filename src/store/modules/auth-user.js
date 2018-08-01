export const SET_AUTH_USER = 'SET_AUTH_USER';
export const UNSET_AUTH_USER = 'UNSET_AUTH_USER';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const ID_NAME = 'ID_NAME';
import * as api from '../../axios/api.js'
import axios from 'axios'
export default {
    state: {
        authenticated: false,
        nickname: null,
        mobile: null,
        loginIsFail: false,
        codeid: null,
        name : null,
        wallet : null,
        verified : null,
        availableAmount: null,
        frozenAmount: null,
        simulation_frozen_amount: null,
        simulation_available_balance: null,
        withdraw_amount: null,
        has_withdraw_pwd: null,
        has_bank_card: null,
    },
    mutations: {
        [SET_AUTH_USER](state, payload) {
            state.authenticated = true; // 登录是否成功
            state.nickname = payload.user.nickname; // 昵称
            state.mobile = payload.user.mobile; // 用户手机
            state.loginIsFail = false; // 登录失败
            state.codeid = payload.user.id_card; // 身份证号
            state.name = payload.user.name; // 用户名
            state.wallet = payload.user.wallet_amount; // 钱包余额
            state.verified = payload.user.verified; // 身份认证
            state.availableAmount = payload.user.available_balance; // 策略余额
            state.frozenAmount = payload.user.frozen_amount;  // 冻结金额
            state.simulation_frozen_amount = payload.user.simulation_frozen_amount; //当前模拟冻结余额
            state.simulation_available_balance = payload.user.simulation_available_balance; //当前模拟可用余额
            state.withdraw_amount = payload.user.withdraw_amount; // 提现中金额
            state.has_withdraw_pwd = payload.user.has_withdraw_pwd; // 是否设置体现密码
            state.has_bank_card = payload.user.bank_card_no==''?false:true; // 是否绑定银行卡
        },
        [UNSET_AUTH_USER](state) {
            state.authenticated = false;
            state.nickname = null;
            state.mobile = null;
            state.name = null;
            state.codeid = null;
            state.wallet = null;
            state.verified = null;
            state.availableAmount = null;
            state.frozenAmount = null;
            state.simulation_frozen_amount = null;
            state.simulation_available_balance = null;
            state.withdraw_amount = null;
            state.has_withdraw_pwd = null;
            state.has_bank_card = null;
        },
        [LOGIN_FAIL](state) {
            state.loginIsFail = true;
        },
        [ID_NAME](state ,codeidform) {
          state.codeid=codeidform.codeid;
          state.name=codeidform.name;
        }
    },
    actions: {
        setAuthUser({commit, dispatch}) {
            axios.post(api.user.user_info).then(res => {
                commit({
                    type: SET_AUTH_USER,
                    user: res.data.data
                })
            }).catch(err => {
                dispatch('refreshToken')
            })
        },
        unsetAuthUser({commit}) {
            commit({
                type: UNSET_AUTH_USER
            })
        },
        refreshToken({commit, dispatch}) {
            return axios.post(api.user.token_refresh).then(res => {
                dispatch('loginSuccess', res.data)
            }).catch(err => {
                dispatch('logoutRequest')
            })
        },
        loginFail({commit}) {
            commit({
                type: LOGIN_FAIL
            })
        },
        idName({commit} , codeidform){
          commit('ID_NAME',codeidform)
        }
    },
    getters: {
        AvailableAmount: state => {
            return state.availableAmount
        },
        codeid: state => {
            return state.codeid
        },
        name: state => {
            return state.name
        },
        has_bank_card: state => {
            return state.has_bank_card
        },
        mobile: state => {
            return state.mobile
        },
		wallet: state => {
			return state.wallet
		},
		frozenAmount: state => {
			return state.frozenAmount
		},
		has_withdraw_pwd: state => {
			return state.has_withdraw_pwd
		}
    }
}
