<!-- 注册 -->
<template>
<div>
	<header-nav></header-nav>
	<div class="user-app">
		<div class="container">
			<div class="reg-container">
				<p class="app-header-text">免费注册</p>
				<div class="bd">
					<el-form :model="registerForm" :rules="rules" ref="registerForm">

						<el-form-item prop="nickname">
							<el-input type="text" v-model="registerForm.nickname" placeholder="请输入昵称">
								<i slot="prefix" class="el-input__icon icon-nicheng"></i>
							</el-input>
						</el-form-item>

						<el-form-item prop="mobile" style="position:relative;">
							<el-input type="mobile" v-model="registerForm.mobile" placeholder="请输入您的手机号">
								<i slot="prefix" class="el-input__icon icon-shoujihao"></i>
							</el-input>
						</el-form-item>

						<el-form-item prop="verification_code" style="position:relative;">
							<el-input v-model="registerForm.verification_code" placeholder="请输入验证码">
								<i slot="prefix" class="el-input__icon icon-verification-code"></i>
								<el-button slot="append" @click="getCode(formData)" class="code-btn" :disabled="!show">
									<span v-show="show" @click="phonecode()">获取验证码</span>
									<span v-show="!show" class="count">{{count}} s</span>
								</el-button>
							</el-input>
						</el-form-item>

						<el-form-item prop="password" style="position:relative;">
							<el-input style="ime-mode:disabled!important;" v-model.trim="registerForm.password" placeholder="请输入密码" type="password" ref="psw">
								<i slot="prefix" class="el-input__icon icon-mima"></i>
							</el-input>
						</el-form-item>

						<el-form-item prop="checkPwd">
							<el-input style="ime-mode:disabled!important;" v-model.trim="registerForm.checkPwd" placeholder="请再次输入密码" type="password" ref="psw">
								<i slot="prefix" class="el-input__icon icon-mima"></i>
							</el-input>
						</el-form-item>

						<el-form-item prop="recommender">
							<!-- <el-input :disabled="true" v-model="registerForm.recommender" placeholder="请输入邀请人ID"> -->
							<el-input v-model="registerForm.recommender" placeholder="请输入邀请人ID(选填)">
								<i slot="prefix" class="el-input__icon icon-yaoqingren"></i>
							</el-input>
						</el-form-item>
						<div class="agree-row">
							<!-- <input id="ckbAgreement" type="checkbox" checked="checked" style="cursor:pointer;"> -->
							<el-checkbox v-model="checked"></el-checkbox>
							<label for="ckbAgreement" style="margin-left:10px;cursor:pointer;">我已阅读并同意</label>
							<a href="javascript:void(0)" style="color:#007bfe;">《江南策略网站服务协议》</a>
						</div>
						<div class="reg-link">
							<span style="float:left;color:red;">{{errText}}</span>
							<span>已有账号？</span>
							<router-link to="/login">登录</router-link>
						</div>
						<el-form-item>
							<el-button type="primary" :disabled="false" class="submitBtn" @click="regClick" style="width:100%;">立即注册</el-button>
						</el-form-item>
					</el-form>
				</div>

			</div>
		</div>
	</div>
	<foot-nav></foot-nav>
</div>
</template>
<script>
import FootNav from './common/FootNav'
import HeaderNav from './common/HeaderNav'
const TIME_COUNT = 60;
export default {
	data() {
		var validateCheckPwd = (rule, value, cb) => {
			if (value === '') {
				cb(new Error('请再次输入密码'))
			} else if (value !== this.registerForm.password) {
				cb(new Error('两次输入密码不一致!'))
			} else {
				cb()
			}
		}
		return {
			formData: {
				phone: '',
				code: '',
			},
			checked: false,
			errText: '',
			show: true,
			timer: null,
			count: '',
			registerForm: {
				nickname: '',
				mobile: '',
				verification_code: '',
				password: '',
				checkPwd: '',
				recommender: '',
				type: '1'
			},
			rules: {
				nickname: [{
						required: true,
						message: '请输入昵称',
						trigger: 'blur'
					},
					//{pattern: /^[1][3,4,5,7,8][0-9]{9}$/,message: '手机号错误',trigger : 'blur'}
				],
				mobile: [{
						required: true,
						message: '请输入手机号',
						trigger: 'blur'
					},
					{
						pattern: /1(3[0-9]|4[579]|5[0-35-9]|7[0135-8]|8[0-9])[0-9]{8}$/,
						message: '手机号错误',
						trigger: 'blur'
					}
				],
				verification_code: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					},
					{
						pattern: /^\d{4}$/,
						message: '验证码为4位数字'
					}
				],
				password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					},
					{
						pattern: /^(\w){6,20}$/,
						message: '只能输入6-20个字母、数字、下划线',
					}
				],
				checkPwd: [{
					validator: validateCheckPwd,
					trigger: 'blur'
				}],
				recommender: [

				]
			}
		}
	},
	components: {
		FootNav,
		HeaderNav
	},
	methods: {
		regClick() {
			for (var key in this.registerForm) {
				if (!this.registerForm[key]) {
					this.errText = "请填写完整信息";
					return;
				} else if (!this.checked) {
					this.errText = "请勾选协议"
					return;
				} else {
					let me = this;
					// me.$router.push({path:'/login'});
					this.$axios.post(this.$api.user.register, {
						mobile: this.registerForm.mobile,
						password: md5(this.registerForm.password),
						recommender: this.registerForm.recommender,
						verification_code: this.registerForm.verification_code,
						nickname: this.registerForm.nickname
					}).then(function(response) {
						me.errText = "注册成功";
						setTimeout(function() {
							me.$router.push({
								path: '/login'
							});
						}, 3000);
					}).catch(function(error) {
						me.errText = error.response.data.message;
					});
					return;
				}
			}
		},
		//验证码倒计时
		getCode(formData) {
			if (this.registerForm.mobile) {
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
			} else {
				//this.dialogVisible=true;
				//  this.errorText="请输入手机号";
			}
		},
		//获取验证码
		phonecode() {
			let me = this;
			this.$axios.post(this.$api.other.send_message, {
					mobile: me.registerForm.mobile,
					type: me.registerForm.type
				}).then(function(response) {
					console.log(response.data.message);
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}
}
</script>
<style scoped>
@import "../assets/icon/iconfont.css";
.user-app {
	width: 100%;
	height: 710px;
	position: relative;
	background: #fff;
	background-position: top center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(../assets/img/fly.png);
}

.reg-container {
	float: right;
	margin-top: 32px;
	border: 1px solid #d9d9d9;
	width: 347px;
	height: 570px;
	border-radius: 4px;
	padding: 20px 30px;
}

.app-header-text {
	font-size: 18px;
	color: #222;
	margin-bottom: 15px;
}

.reg-container .agree-row {
	margin-top: 10px;
}

.submitBtn {
	background-color: #fc5146 !important;
	border: none !important;
}

.reg-container .reg-btn {
	width: 100%;
	height: 48px;
	line-height: 48px;
	text-align: center;
	color: #fff;
	font-size: 18px;
	background: #fc3042;
	border-radius: 4px;
	cursor: pointer;
}

.reg-container .reg-link {
	text-align: right;
	font-size: 14px;
	line-height: 48px;
	color: #3b3a3a;
}

.reg-container .reg-link>a {
	color: #007bfe;
}
</style>
