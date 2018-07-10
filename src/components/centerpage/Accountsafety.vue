<!-- 账户安全 -->
<template>
<div>
	<div class="accountsafety">
		<div class="card" style="margin-top:0px;height:auto;">
			<div class="title"><span>密码设置</span></div>
			<div class="body" style="min-height:500px;position:;">
				<div>
					<div class="item clear" style="opacity: 1; transform: translate(0px, 0px);">
						<div class="icon"><i class="iconfont icon-denglumima" style="font-size:24px;"></i></div>
						<div class="name">登录密码</div>
						<div class="status">已设置</div>
						<div class="tips">登录网站时需要输入的密码</div>
						<div class="operation"><a @click='dialogPwd = true'>修改</a></div>
					</div>
					<div class="item clear" style="opacity: 1; transform: translate(0px, 0px);">
						<div class="icon"><i class="iconfont icon-denglumima" style="font-size:24px;"></i></div>
						<div class="name">提现密码</div>
						<div class="status" v-if='has_withdraw_pwd'>已设置</div>
						<div class="status" v-else>未设置</div>
						<div class="tips">为了您的资金安全，请妥善保管好提现密码</div>
						<div class="operation"><a class="" @click='dialogEWPwd = true' v-if='has_withdraw_pwd'>修改&nbsp;&nbsp;</a><a @click='dialogWPwd = true' v-else>设置</a></div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div><noscript></noscript></div>
		<div><noscript></noscript></div>
		<div><noscript></noscript></div> -->
	</div>
	<!-- 修改登录密码弹窗 -->
	<el-dialog title="修改登录密码" :visible.sync="dialogPwd" @close="resetForm('pwdForm')">
		<el-form :model="pwdForm" status-icon :rules="ruleLPwd" ref="pwdForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="当前密码" prop="password">
				<el-input style="width:180px;" type='password' v-model="pwdForm.password"></el-input>
			</el-form-item>
			<el-form-item label="新密码" prop="new_password">
				<el-input style="width:180px;" type='password' v-model="pwdForm.new_password"></el-input>
			</el-form-item>
			<el-form-item label="确认新密码" prop="re_new_password">
				<el-input style="width:180px;" type='password' v-model="pwdForm.re_new_password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('pwdForm')">提交</el-button>
				<el-button @click="resetForm('pwdForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-dialog>
	<!-- 设置提现密码弹窗 -->
	<el-dialog title="设置提现密码" :visible.sync="dialogWPwd" @close="resetForm('setTransactionForm')">
		<el-form :model="setTransactionForm" status-icon :rules="ruleWPwd" ref="setTransactionForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="手机号码" prop="province">
				<span>{{mobile}}</span>
				<el-button size='small' style="margin-left:20px;" :disabled='sendSmsBtn' @click='sendSmsMsg(3)'>{{sendSmsTxt}}</el-button>
			</el-form-item>
			<el-form-item label="短信验证码" prop="verification_code">
				<el-input style="width:180px;" v-model="setTransactionForm.verification_code"></el-input>
			</el-form-item>
			<el-form-item label="提现密码" prop="withdraw_pwd">
				<el-input style="width:180px;" type='password' v-model="setTransactionForm.withdraw_pwd"></el-input>
				<span class="comment">密码格式为六位纯数字</span>
			</el-form-item>
			<el-form-item label="确认提现密码" prop="re_withdraw_pwd">
				<el-input style="width:180px;" type='password' v-model="setTransactionForm.re_withdraw_pwd"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('setTransactionForm')">提交</el-button>
				<el-button @click="resetForm('setTransactionForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-dialog>
	<!-- 修改提现密码弹窗 -->
	<el-dialog title="修改提现密码" :visible.sync="dialogEWPwd" @close="resetForm('editTransactionForm')">
		<el-form :model="editTransactionForm" status-icon :rules="ruleEWPwd" ref="editTransactionForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="当前密码" prop="withdraw_pwd">
				<el-input style="width:180px;" type='password' v-model="editTransactionForm.withdraw_pwd"></el-input>
			</el-form-item>
			<el-form-item label="新密码" prop="new_withdraw_pwd">
				<el-input style="width:180px;" type='password' v-model="editTransactionForm.new_withdraw_pwd"></el-input>
				<span class="comment">密码格式为六位纯数字</span>
			</el-form-item>
			<el-form-item label="确新密码" prop="re_new_withdraw_pwd">
				<el-input style="width:180px;" type='password' v-model="editTransactionForm.re_new_withdraw_pwd"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('editTransactionForm')">提交</el-button>
				<el-button @click="resetForm('editTransactionForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-dialog>
</div>
</template>
<script>
export default {
	data() {
		// 验证 数字加字母6-12
		var checkCombination = (rule, value, callback) => {
			var reg = /^[a-zA-Z0-9]{6,10}$/
			if (value === '') {
				callback(new Error('此处为必填'));
			} else {
				if (!reg.test(value)) {
					callback(new Error('请输入正确格式（6-12位字母与数字组合）'));
				} else {
					callback()
				}
			}
		}
		// 验证 4位纯数字
		var checkFour = (rule, value, callback) => {
			var reg = /^\d{4}$/
			if (value === '') {
				callback(new Error('此处为必填'));
			} else {
				if (!reg.test(value)) {
					callback(new Error('请输入正确格式（4位纯数字）'));
				} else {
					callback()
				}
			}
		}
		// 验证 六位纯数字
		var checkSix = (rule, value, callback) => {
			var reg = /^\d{6}$/
			if (value === '') {
				callback(new Error('此处为必填'));
			} else {
				if (!reg.test(value)) {
					callback(new Error('请输入正确格式（6位纯数字）'))
				} else {
					callback();
				}
			}
		};
		// 验证 设置登录密码 再次输入
		var checkrePwdL = (rule, value, callback) => {
			if (value == '') {
				callback(new Error('此处为必填'));
			} else {
				if (value == this.pwdForm.new_password) {
					callback();
				} else {
					callback(new Error('两次密码输入不同'));
				}
			}
		};
		// 验证 设置提现密码 再次输入
		var checkrePwdSW = (rule, value, callback) => {
			if (value == '') {
				callback(new Error('此处为必填'));
			} else {
				console.log(this.setTransactionForm.withdraw_pwd)
				console.log(value)
				if (value == this.setTransactionForm.withdraw_pwd) {
					callback();
				} else {
					callback(new Error('两次密码输入不同'));
				}
			}
		};
		// 验证 修改提现密码 再次输入
		var checkrePwdEW = (rule, value, callback) => {
			if (value == '') {
				callback(new Error('此处为必填'));
			} else {
				if (value == this.editTransactionForm.new_withdraw_pwd) {
					callback();
				} else {
					callback(new Error('两次密码输入不同'));
				}
			}
		};
		return {
			// 发送验证码控制
			sendSmsBtn: false,
			sendSmsTxt: '发送验证码',
			timer: null,
			time: 0,
			// 弹窗控制
			// 设置登录密码
			dialogPwd: false,
			// 设置提现密码
			dialogWPwd: false,
			// 修改提现密码
			dialogEWPwd: false,
			// 修改登录密码表单
			pwdForm: {
				password: '',
				new_password: '',
				re_new_password: '',
			},
			// 设置提现密码表单
			setTransactionForm: {
				verification_code: '',
				withdraw_pwd: '',
				re_withdraw_pwd: ''
			},
			// 修改提现密码表单
			editTransactionForm: {
				withdraw_pwd: '',
				new_withdraw_pwd: '',
				re_new_withdraw_pwd: ''
			},
			// 设置登录密码表单验证
			ruleLPwd: {
				password: [{
					validator: checkCombination,
					trigger: 'blur'
				}],
				new_password: [{
					validator: checkCombination,
					trigger: 'blur'
				}],
				re_new_password: [{
					validator: checkrePwdL,
					trigger: 'blur'
				}],
			},
			// 设置提现密码表单验证
			ruleWPwd: {
				verification_code: [{
					validator: checkFour,
					trigger: 'blur'
				}],
				withdraw_pwd: [{
					validator: checkSix,
					trigger: 'blur'
				}],
				rePwd: [{
					validator: checkrePwdSW,
					trigger: 'blur'
				}],
			},
			// 修改提现密码表单验证
			ruleEWPwd: {
				withdraw_pwd: [{
					validator: checkSix,
					trigger: 'blur'
				}],
				new_withdraw_pwd: [{
					validator: checkSix,
					trigger: 'blur'
				}],
				re_new_withdraw_pwd: [{
					validator: checkrePwdEW,
					trigger: 'blur'
				}],
			},
		}
	},
	created() {
		console.log(this.$store.state.AuthUser)
	},
	methods: {
		// 修改登录密码
		setLPwd() {
			this.$axios.post(this.$api.user.change_password, {
				password: md5(this.pwdForm.password),
				new_password: md5(this.pwdForm.new_password),
			}).then(res => {
				this.resetForm('pwdForm')
				this.$Message.success('修改登录密码成功')
				this.dialogPwd = false
				this.getUserInfo()
			}).catch(err => {
				console.log('请求错误：/api/send-sms-message');
			})
		},
		// 设置提现密码
		setWPwd() {
			this.$axios.post(this.$api.user.set_up_withdraw_password, {
				withdraw_pwd: md5(this.setTransactionForm.withdraw_pwd),
				verification_code: this.setTransactionForm.verification_code,
			}).then(res => {
				this.resetForm('setTransactionForm')
				this.$Message.success('设置提现密码成功')
				this.dialogWPwd = false
				this.getUserInfo()
			}).catch(err => {
				console.log('请求错误：/api/send-sms-message');
			})
		},
		// 修改/忘记 提现密码
		editEWPwd() {
			this.$axios.post(this.$api.user.change_withdraw_password, {
				withdraw_pwd: md5(this.editTransactionForm.withdraw_pwd),
				new_withdraw_pwd: md5(this.editTransactionForm.new_withdraw_pwd),
			}).then(res => {
				this.resetForm('editTransactionForm')
				this.$Message.success('修改提现密码成功')
				this.dialogEWPwd = false
				this.getUserInfo()
			}).catch(err => {
				console.log('请求错误：/api/send-sms-message');
			})
		},
		// 发送短信验证码
		sendSmsMsg(type) {
			type = 3
			this.time = 60
			this.sendSmsBtn = true
			this.sendSmsTxt = this.time + '秒后可再次发送'
			this.$axios.post(this.$api.other.send_message, {
				mobile: this.$store.state.AuthUser.mobile,
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
		// 发送表单
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					if (formName == 'setTransactionForm') {
						this.setWPwd()
					} else if (formName == 'pwdForm') {
						this.setLPwd()
					} else {
						this.editEWPwd()
					}
				}
			})
		},
		// 重置表单
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		// 重新拉取用户信息
		getUserInfo() {
			this.$store.dispatch('setAuthUser').then(response => {
				if (this.$store.state.AuthUser.loginIsFail) {
					this.loadFail = true;
				}
			})
		}
	},
	computed: {
		mobile() {
			return this.$store.state.AuthUser.mobile
		},
		has_withdraw_pwd() {
			return this.$store.state.AuthUser.has_withdraw_pwd
		}
	},
	beforeDestroy() {
		clearInterval(this.timer)
	}
}
</script>
<style scoped>
.card {
	background-color: #fff;
	border: 1px solid #E9E9Eb;
}

.card .title {
	width: 100%;
	height: 47px;
	position: relative;
	border-bottom: 1px solid #E9E9Eb;
	background: #f5f5f5;
}

.card .body {
	min-height: 100px;
	padding-left: 50px;
	padding-right: 50px;
}

.card .title span {
	display: block;
	position: absolute;
	left: 33px;
	height: 47px;
	line-height: 47px;
	color: #6ea9d9;
	border-bottom: 1px solid #1586cc;
	font-size: 18px;
	border: 0;
	font-size: 14px;
	color: #333;
}

.card .body {
	min-height: 100px;
	padding-left: 50px;
	padding-right: 50px;
}

.accountsafety .item {
	line-height: 125px;
	font-size: 16px;
	border-bottom: 1px solid #E9E9Eb;
}

.accountsafety .item .icon {
	color: #ff6f00;
	width: 62px;
	font-size: 25px;
	height: 125px;
}

.accountsafety .item div {
	float: left;
}

.accountsafety .item .name {
	width: 182px;
	font-size: 14px;
	color: #333;
}

.accountsafety .item .status {
	width: 62px;
	font-size: 14px;
	color: #333;
}

.accountsafety .item .tips {
	color: #acacac;
	font-size: 14px;
	width: 358px;
}

.operation a {
	color: #2db7f5;
	background: transparent;
	text-decoration: none;
	outline: none;
	cursor: pointer;
	transition: color .3s ease;
}

.hide {
	display: none !important;
}

.comment {
	color: #acacac;
	font-size: 12px;
	width: 358px;
}
</style>
