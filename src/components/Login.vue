<!-- 登录 -->
<template>
<div>
	<header-nav></header-nav>
	<div class="user-app">
		<div class="container">
			<div class="formbox">
				<p class="load-text">登录</p>
				<el-form ref="form" :model="form" :rules="rules">
					<el-form-item prop="tel">
						<el-input placeholder="请输入手机号" v-model="form.tel" auto-complete="new-password">
						</el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="请输入密码" v-model="form.password" auto-complete="new-password">
						</el-input>
					</el-form-item>
					<p class="login-link">
						<router-link to="/register" style="color:#007bfe;">免费注册</router-link>
						<a @click='dialogWPwd = true' style="margin-right:10px;">忘记密码?</a>
					</p>
					<p class="loadFail" v-if="loadFail">用户名或密码错误。</p>
					<el-form-item>
						<el-button type="primary" @click="login" class="sub-btn">登陆</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
	<!-- 弹窗 -->
	<el-dialog title="找回密码" :visible.sync="dialogWPwd" @close="resetForm('formPwd')">
		<el-form :model="formPwd" status-icon :rules="rulePwd" ref="formPwd" label-width="100px" class="demo-ruleForm">
			<el-form-item label="手机号码" prop="mobile">
				<el-input style="width:180px;" v-model="formPwd.mobile"></el-input>
				<el-button size='small' style="margin-left:20px;" :disabled='sendSmsBtn' @click='sendSmsMsg(2)'>{{sendSmsTxt}}</el-button>
			</el-form-item>
			<el-form-item label="短信验证码" prop="verification_code">
				<el-input style="width:180px;" v-model="formPwd.verification_code"></el-input>
			</el-form-item>
			<el-form-item label="新密码" prop="new_password">
				<el-input style="width:180px;" type='password' v-model="formPwd.new_password"></el-input>
				<span class="comment">格式要求为6-20位数字,字母,下划线</span>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('formPwd')">提交</el-button>
				<el-button @click="resetForm('formPwd')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-dialog>
</div>
</template>
<script>
import FootNav from './common/FootNav'
import HeaderNav from './common/HeaderNav'

export default {
	data() {
		return {
			dialogWPwd: false, // 弹窗控制
			sendSmsBtn: false, // 控制发送短信验证码
			sendSmsTxt: '发送短信验证码', // 控制发送短信验证码
			/*btn: false,*/
			timer: null,
			loadFail: false,
			formPwd: {
				mobile: null,
				verification_code: null,
				new_password: null,
			},
			form: {
				tel: '',
				password: ''
			},
			loadapi: 'api/login',
			rules: {
				tel: [{
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
				password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					},
					{
						pattern: /^(\w){6,20}$/,
						message: '只能输入6-20个字母、数字、下划线',
					}
				]
			},
			rulePwd: {
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
				new_password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					},
					{
						pattern: /^(\w){6,20}$/,
						message: '只能输入6-20个字母、数字、下划线',
					}
				]
			},
		}
	},
	components: {
		FootNav,
		HeaderNav
	},
	methods: {
		login: function() {
			if (!this.form.tel || !this.form.password) return
			let formData = {
				mobile: this.form.tel,
				password: md5(this.form.password)
			}
			this.$store.dispatch('loginRequest', formData).then(response => {
				this.$router.push({
					path: '/center'
				});
				if (this.$store.state.AuthUser.loginIsFail) {
					//console.log(this.$store.state.AuthUser.loginIsFail);
					this.loadFail = true;
				}
			})
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$axios.post(this.$api.user.forget_password, {
						mobile: this.formPwd.mobile,
						verification_code: this.formPwd.verification_code,
						new_password: md5(this.formPwd.new_password),
					}).then((res) => {
						console.log(res)
						this.dialogWPwd = false
						this.$Message.success('修改密码成功')
					}).catch(() => {
						console.log('接口错误 /api/forget-password')
					})
				}
			})
		},
		// 重置表单
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		// 发送短信验证码
		sendSmsMsg(type) {
			this.time = 60
			this.sendSmsBtn = true
			this.sendSmsTxt = this.time + '秒后可再次发送'
			this.$axios.post(this.$api.other.send_message, {
				mobile: this.formPwd.mobile,
				type: type,
			}).then(res => {
				this.$Message.success(res.data.message)
			}).catch(err => {
				console.log('请求错误：/api/send-sms-message');
			})
			this.timer = setInterval(() => {
				if (Number(this.time) < 1) {
					this.resetBtnSengSms()
				} else {
					this.time--
						this.sendSmsTxt = this.time + '秒后可再次发送'
				}
			}, 1000)
		},
		// 重置发送短信验证码
		resetBtnSengSms() {
			clearInterval(this.timer)
			this.sendSmsTxt = '发送验证码'
			this.sendSmsBtn = false
		},
	},
	beforeDestroy() {
		clearInterval(this.timer)
	}
}
</script>
<style scoped>
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

.formbox {
	float: right;
	margin-top: 130px;
	border: 1px solid #d9d9d9;
	width: 380px;
	height: 326px;
	border-radius: 4px;
	padding: 20px 30px;
}

.load-text {
	font-size: 18px;
	color: #222;
	margin-bottom: 30px;
}

.login-link {
	overflow: hidden;
	margin-top: 0px;
	color: #3b3a3a;
	font-size: 14px;
	margin-bottom: 35px;
}

.login-link * {
	float: right;
}

.login-link span {
	margin: 0 10px;
}

.sub-btn {
	width: 100%;
	background-color: #fc5146 !important;
	border: none !important;
}

.loadFail {
	text-align: center;
	font-size: 14px;
	color: red;
}
</style>
