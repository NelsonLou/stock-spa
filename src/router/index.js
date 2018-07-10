import Vue from 'vue'
import Router from 'vue-router'
import jwtToken from '../jwt/jwt'
import store from '../store/index'
import {Message} from 'element-ui'
// page
// import Index from '@/components/Index'
const Index = () => import('@/components/Index')
// import Login from '@/components/Login'
const Login = () => import('@/components/Login')
// import Register from '@/components/Register'
const Register = () => import('@/components/Register')
// import New from '@/components/New'
const New = () => import('@/components/New')
// import Sim from '@/components/Sim'
const Sim = () => import('@/components/Sim')
// center
// import Account from '@/components/centerpage/Account'
const Account = () => import('@/components/centerpage/Account')
// import Center from '@/components/centerpage/Center'
const Center = () => import('@/components/centerpage/Center')
// import ResultOfPayment from '@/components/centerpage/ResultOfPayment'
const ResultOfPayment = () => import('@/components/centerpage/ResultOfPayment')
// import Assets from '@/components/centerpage/Assets'
const Assets = () => import('@/components/centerpage/Assets')
// import Redpacket from '@/components/centerpage/Redpacket'
const Redpacket = () => import('@/components/centerpage/Redpacket')
// import Spread from '@/components/centerpage/Spread'
const Spread = () => import('@/components/centerpage/Spread')
// import Protocol from '@/components/centerpage/Protocol'
const Protocol = () => import('@/components/centerpage/Protocol')
// import Accountsafety from '@/components/centerpage/Accountsafety'
const Accountsafety = () => import('@/components/centerpage/Accountsafety')
// import Agreement from '@/components/centerpage/Agreement'
const Agreement = () => import('@/components/centerpage/Agreement')
// import Capital from '@/components/centerpage/Capital'
const Capital = () => import('@/components/centerpage/Capital')

// trade
// import Trade from '@/components/tradepage/Trade'
const Trade = () => import('@/components/tradepage/Trade')
// import Sell from '@/components/tradepage/Sell'
const Sell = () => import('@/components/tradepage/Sell')
// import History from '@/components/tradepage/History'
const History = () => import('@/components/tradepage/History')
// import t1 from '@/components/tradepage/T1'
const t1 = () => import('@/components/tradepage/T1')
// import Td from  '@/components/tradepage/Td'
const Td = () => import('@/components/tradepage/Td')

Vue.use(Router)

let routes = [
        {
            path: '/',
            component: Index
        },
        {
            path: "/introducation",
            component: New,
        },
        {
            path: "/login",
            component: Login,
            meta: {requireGuest: true}
        },
        {
            path: '/register',
            component: Register,
            meta: {requireGuest: true}
        },
        {
            path: '/sim',
            component: Sim
        },
        {
            path: '/trade',
            component: Trade,
            children: [
                {path: '/', redirect: 'buy/t1'},
                {path: 'sell', component: Sell},
                {path: 'history', component: History},
                {path: 'buy/t1', component: t1},
                {path: 'buy/detail', component: Td}
            ],
        },
        {
            path: '/center',
            component: Center,
            children: [
                {path: '/', redirect: 'account'},
                {path: 'account',component: Account,meta: {requireAuth: true}},
                {path: 'result-of-payment',component: ResultOfPayment,meta: {requireAuth: true}},
                {path: 'assets',component: Assets,meta: {requireAuth: true}},
                {path: 'redpacket',component: Redpacket,meta: {requireAuth: true}},
                {path: 'spread',component: Spread,meta: {requireAuth: true}},
                {path: 'protocol',component: Protocol,meta: {requireAuth: true}},
                {path: 'accountsafety',component: Accountsafety,meta: {requireAuth: true}},
                {path: 'agreement',component: Agreement,meta: {requireAuth: true}},
                {path: 'capital',component: Capital,meta: {requireAuth: true}}
            ],
            meta: {requireAuth: true}
        },
    ]
const router = new Router({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    // 判断用户是否可进入创建策略页面
    if(to.path == '/trade/buy/detail'||to.fullPath == '/trade/buy/detail'){
        if(localStorage.getItem('choosen_id')==null){
            return next({path: '/trade/buy/t1'});
        } else {
            return next();
        }
    }
    // 判断用户是否可进入历史记录页
    if(to.path == '/trade/history'||to.fullPath == '/trade/history'){
        if(store.state.AuthUser.authenticated || jwtToken.getToken()){
            return next();
        } else {
            return next({path: '/login'});
        }
    }
    // 判断用户是否可进入当前策略
    if(to.path == '/trade/sell'||to.fullPath == '/trade/sell'){
        if(store.state.AuthUser.authenticated || jwtToken.getToken()){
            return next();
        } else {
            return next({path: '/login'});
        }
    }
    // 判断用户Token是否过期
    if (to.meta.requireAuth) {
        if (store.state.AuthUser.authenticated || jwtToken.getToken()) {
            return next();
        } else {
            return next({path: '/login'});
        }
    }
    // 判断用户Token是否过期
    if (to.meta.requireGuest) {
        if (store.state.AuthUser.authenticated || jwtToken.getToken()) {
            return next({path: '/center'});
        } else {
            return next();
        }
    }
    next();
})

export default router
