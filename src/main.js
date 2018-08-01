import Vue from 'vue'
import App from './App'

require('./bootstrap');

// 路由配置引入
import VueRouter from 'vue-router'
import router from './router/index'
Vue.prototype.$Router = router
Vue.use(VueRouter)

 // element-ui 完整引入
import ElementUI from 'element-ui'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$Message = Message

// vue-axios 插件引入
import axios from 'axios'
Vue.prototype.$axios = axios

// api 常量引入
import * as api from './axios/api.js'
Vue.prototype.$api = api

// token
import jwtToken from './jwt/jwt.js'
Vue.prototype.$jwtToken = jwtToken

// 加密引入
import "babel-polyfill";
window.md5 = require('js-md5')

// 基础样式引入
import './css/web.scss'
import './css/_variables.scss'

// echarts插件引入
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

// vuex 引入
import store from './store/index'
Vue.prototype.$store = store

// 阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// axios配置××××××××××××××××××××××××××
// 配置默认接口地址
axios.defaults.baseURL = api.config.url

// // 配置默认请求头
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 配置默认请求超时
// axios.defaults.timeout = 12000

// 请发送拦截验证
axios.interceptors.request.use(function(config){
  // 如果 accessToken存在，表示用户已经登陆
	if(jwtToken.getToken()){
		config.headers['Authorization'] = "Bearer " + jwtToken.getToken();
	}
	return config;
},function(err){
  	return promise.reject(err);
})

// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
// 	if(!response.data.success){
// 		return response;
// 	}
// }, function (error) {
// 		// 添加返回值message显示
// 		Message.error(error.response.data.message)
// 	return 0
//  });

 // **********************************************************
 // 添加响应拦截器
 axios.interceptors.response.use(function (response) {
 　　// 对响应数据做点什么
 　　return response
 }, function (error) {
 　　// 对响应错误做点什么
     console.log(error)
    Message.error(error.response.data.message)
 　　return Promise.reject(error.response)
 });
// ××××××××××××××××××××××××××××××××××

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
