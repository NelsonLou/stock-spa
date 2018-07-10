<!-- 账户信息 -->
<template>
<div>
	<div>
		<div class="dashboard">
			<div class="strategy-row">
				<div class="row-icon">
					<i class="iconfont icon-qiandai" style="font-size:30px;"></i>
				</div>
				<div class="row-value">
					<p>钱包余额</p>
					<p class="red-value">
						<span>{{wallet}}</span>
						<span>元</span>
					</p>
				</div>
				<div class="row-btn">
					<button class="button recharge" @click="RechargeMoney">充值</button>
					<button class="button withdraw" @click="dialogShow('a')">提现</button>
				</div>
			</div>
			<div class="strategy-row">
				<div class="row-icon">
					<i class="iconfont icon-qiandai" style="font-size:30px;"></i>
				</div>
				<div class="row-value">
					<p>策略余额</p>
					<p class="red-value">
						<span>{{AvailableAmount}}</span>
						<span>元</span>
					</p>
				</div>
				<div class="row-btn">
					<button class="button btn-empty" @click='dialogShow("b")'>转入</button>
					<button class="button btn-empty" @click='dialogShow("c")'>转出</button>
				</div>
			</div>
			<div class="money-info">
				<div class="info-item clear">
					<span class="left">当前冻结：{{frozenAmount}}元</span>
					<a class="right" @click='goInfo'>查看详情>></a>
				</div>
			</div>
			<div class="other-row" style="background-color:#fff;">
				<div class="row-icon">
					<i class="iconfont icon-shenfenzheng" style="font-size:30px;"></i>
				</div>
				<div class="row-value">
					<p>基本信息</p>
					<p>
						<span>用户名：</span><span>{{mobile}}</span>
					</p>
				</div>
			</div>
		</div>
		<!-- 提现弹窗 -->
		<el-dialog title="提现" :visible.sync="dialogCash" @close="resetForm('cashForm')">
			<el-form :model="cashForm" status-icon :rules="cashRules" ref="cashForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="提现金额" prop="total">
					<el-input v-model="cashForm.total"></el-input>
				</el-form-item>
				<el-form-item label="交易密码" prop="withdraw_pwd">
					<el-input v-model="cashForm.withdraw_pwd" type='password'></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('cashForm')">提交</el-button>
					<el-button @click="resetForm('cashForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<!-- 转出弹窗 -->
		<el-dialog title="从策略余额转出到策略钱包" :visible.sync="dialogOut" @close="resetForm('inOutForm')">
			<el-form :model="inOutForm" status-icon :rules="InOutRules" ref="inOutForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="转出金额" prop="balance">
					<el-input type='number' v-model="inOutForm.balance"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('inOutForm')">提交</el-button>
					<el-button @click="resetForm('inOutForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<!-- 转入弹窗 -->
		<el-dialog title="从策略钱包转出到策略余额" :visible.sync="dialogIn" @close="resetForm('inOutForm')">
			<el-form :model="inOutForm" status-icon :rules="InOutRules" ref="inOutForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="策略账户余额" prop="total">
					<span>{{AvailableAmount}}</span>
					<span>元</span>
				</el-form-item>
				<el-form-item label="转入金额" prop="balance">
					<el-input type='number' v-model="inOutForm.balance"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('inOutForm')">提交</el-button>
					<el-button @click="resetForm('inOutForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			inOut: true, // 判断转入转出
			dialogCash: false, // 提现弹窗
			dialogIn: false, // 转入弹窗
			dialogOut: false, // 转出弹窗
			codeidform: {
				name: '',
				codeid: '',
			}, // ???
			recharge: { // 充值表单
				bank: ''
			},
			tipNumber: '',
			tip: false,
			hasID: false, // ???
			hasbank: false, // ???
			formLabelWidth: '80px', // 表单宽度
			cashForm: { // 提现表单
				total: null,
				withdraw_pwd: null,
			},
			inOutForm: { // 转入转出表单
				balance: ''
			},
			rules: { // 实名认证
				name: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					},
					{
						min: 2,
						max: 4,
						message: '长度在 2 到 4 个字符',
						trigger: 'blur'
					},
					{
						pattern: /^[\u4E00-\u9FA5]+$/,
						message: '用户名只能为中文'
					}
				],
				codeid: [{
						required: true,
						message: '请输入身份证号',
						trigger: 'blur'
					},
					{
						min: 18,
						max: 18,
						message: '身份证位数错误'
					},
					{
						pattern: /(^\d{15}$)|(^\d{6}[1|2]\d{10}(\d|X|x)$)/,
						message: '身份证格式错误'
					}
				]
			},
			// bankRules: { //
			// 	bank: [{
			// 			required: true,
			// 			message: '请输入充值金额',
			// 			trigger: 'blur'
			// 		},
			// 		{
			// 			pattern: /^[1-9]\d*00$/,
			// 			message: '请输入100的整数倍'
			// 		}
			// 	]
			// },
			cashRules: { // 提现表单验证
				total: [{
					required: true,
					message: '请输入提现金额',
					trigger: 'blur'
				}],
				withdraw_pwd: [{
					required: true,
					message: '请输入提现密码',
					trigger: 'blur'
				}],
			},
			InOutRules: {
				balance: [{
					required: true,
					message: '请输入金额',
					trigger: 'blur'
				}]
			}
		}
	},
	created() {},
	methods: {
		tipChange() {
			axios.post(this.$api.user.recharge, {
				fee: this.recharge.bank
			}).then(res => {
				this.tip = true;
				let feeAll = JSON.parse(res.config.data);
				console.log(feeAll);
				this.tipNumber = feeAll.fee;
			}).catch(err => {
				console.log('shibai');
			})
		},
		RechargeMoney() {
			this.$router.push('/center/assets')
		},
		goInfo() {
			this.$router.push('/trade/sell')
		},
		// 显示弹窗
		dialogShow(type) {
			if (type == 'a') {
				if (!this.has_withdraw_pwd) {
					this.$Message.error('请先设置提现密码')
					this.$router.push('/center/accountsafety')
				} else {
					this.dialogCash = true
				}
			} else if (type == 'b') {
				this.dialogIn = true
				this.inOut = true
			} else {
				this.dialogOut = true
				this.inOut = false
			}
		},
		// 重置表单
		resetForm(formName) {
			console.log('重置表单')
			this.$refs[formName].resetFields();
		},
		// 提交表单
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// 提现表单
					if (formName == 'cashForm') {
						this.$axios.post(this.$api.user.withdraw, {
							total: this.cashForm.total,
							withdraw_pwd: this.cashForm.withdraw_pwd,
						}).then(res => {
							this.dialogCash = false
							this.resetForm(formName)
							console.log(res.data.message)
							this.$Message.success('提现成功')
						}).catch(err => {
							console.log('请求错误：/api/bind-the-bank-card');
						})
					} else {
						// 转入转出表单
						if (this.inOut) {
							var trans_type = 0
						} else {
							var trans_type = 1
						}
						this.$axios.post(this.$api.user.balance_trans, {
							trans_type: trans_type,
							balance: this.inOutForm.balance,
						}).then(res => {
							this.resetForm(formName)
							console.log(res.data.message)
							if (this.inOut) {
								this.dialogIn = false
								this.$Message.success('转入策略余额成功')
							} else {
								this.dialogOut = false
								this.$Message.success('转出策略余额成功')
							}
						}).catch(err => {
							console.log('请求错误：/api/bind-the-bank-card');
						})
					}
					this.getUserInfo()
				} else {
					console.log('error submit!!');
					return false;
				}
			})
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
		wallet() {
			return this.$store.state.AuthUser.wallet
		},
		AvailableAmount() {
			return this.$store.state.AuthUser.availableAmount
		},
		frozenAmount() {
			return this.$store.state.AuthUser.frozenAmount
		},
		has_withdraw_pwd() {
			console.log(this.$store.state.AuthUser.has_withdraw_pwd)
			return this.$store.state.AuthUser.has_withdraw_pwd
		}
	}
}
</script>
<style scoped>
a {
	text-decoration: none;
	cursor: pointer;
}

.has-bank {
	padding-top: 60px;
	padding-left: 60px;
	padding: 60px 200px 6px 60px;
	background: #f9f7f7;
	width: 100%;
	box-sizing: border-box;
}

.has-bank p {
	font-size: 18px;
	color: #222;
	margin-bottom: 30px;
}

.el-input {
	width: 60%;
}

.dashboard {
	width: 100%;
	/*height: 550px;*/
	background: #fff;
	border: 1px solid #E9E9Eb;
}

.dashboard .strategy-row {
	display: -webkit-box;
	display: -moz-box;
	display: -o-box;
	display: flex;
	display: -ms-flexbox;
	padding-top: 40px;
	padding-left: 60px;
}

.dashboard .row-icon {
	font-size: 24px;
	color: #fc5146;
	width: 50px;
	line-height: 40px;
}

.dashboard .row-value {
	width: 273px;
	font-size: 16px;
	color: #797979;
	line-height: 30px;
}

.red-value {
	color: #fc5146 !important;
}

.dashboard .strategy-row .row-btn {
	padding: 10px 0;
	font-size: 16px;
}

.dashboard .strategy-row .row-btn .recharge {
	width: 140px;
	height: 39px;
	display: inline-block;
	background: #fc5146;
	color: #fff;
	text-align: center;
	line-height: 39px;
	border-radius: 4px;
	outline: none;
	border: none;
}

.dashboard .strategy-row .row-btn .withdraw {
	width: 140px;
	height: 39px;
	display: inline-block;
	background: #55b5fc;
	color: #fff;
	text-align: center;
	line-height: 39px;
	border-radius: 4px;
	float: left;
	margin-right: 10px;
	outline: none;
	border: none;
}

.dashboard .other-row {
	display: -webkit-box;
	display: -moz-box;
	display: -o-box;
	display: flex;
	display: -ms-flexbox;
	width: 100%;
	background: #f9f7f7;
	padding-left: 60px;
	padding-top: 36px;
	padding-bottom: 36px;
	box-sizing: border-box;
}

.dashboard .row-icon {
	font-size: 24px;
	color: #fc5146;
	width: 50px;
	line-height: 40px;
}

.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}

.dashboard .other-row .value-to-strategy {
	width: 140px;
	height: 39px;
	display: inline-block;
	background: transparent;
	border: 1px solid #55b5fc;
	color: #55b5fc;
	text-align: center;
	line-height: 39px;
	border-radius: 4px;
}

.dashboard .data-row {
	width: 100%;
	height: 200px;
	padding-left: 110px;
	font-size: 12px;
	color: #666;
	display: -webkit-box;
	display: -moz-box;
	display: -o-box;
	display: flex;
	display: -ms-flexbox;
	flex-direction: column;
	padding-top: 20px;
	box-sizing: border-box;
}

.dashboard .data-row .data-row-child {
	width: 747px;
	height: 42px;
	line-height: 42px;
	border-bottom: 1px dashed #e0e0e0;
}

.dashboard .data-row .data-row-child>div {
	width: 330px;
}

.dashboard .data-row .data-row-child>div>a {
	float: right;
	color: #55b5fc;
}

.dashboard .login-info-row {
	display: -webkit-box;
	display: -moz-box;
	display: -o-box;
	display: flex;
	display: -ms-flexbox;
	line-height: 45px;
	padding-left: 60px;
	padding-top: 20px;
}

/*.dashboard .login-info-row {
	    display: -webkit-box;
	    display: -moz-box;
	    display: -o-box;
	    display: flex;
	    display: -ms-flexbox;
	    padding-left: 110px;
	    font-size: 12px;
	    color: #666;
	    padding-top: 20px;
	}*/

.dashboard .other-row .row-btn {
	padding-top: 10px;
	font-size: 16px;
}

.login-info-row span {
	display: inline-block;
	line-height: 20px;
}

.btn-empty {
	width: 140px;
	height: 39px;
	display: inline-block;
	background: transparent;
	border: 1px solid #55b5fc;
	color: #55b5fc;
	text-align: center;
	line-height: 39px;
	border-radius: 4px;
}

.money-info {
	width: 90%;
	margin: 0 auto;
	padding-left: 40px;
	margin-top: 40px;
	margin-bottom: 40px;
}

.money-info .info-item {
	width: 480px;
	padding: 20px;
	font-size: 16px;
}

.money-info .info-item .right {
	color: #fc5146;
}

/*.icon-bianji:before { content: "\e60b"; }
.icon-tablet:before { content: "\e60c"; }
.icon-weibo:before { content: "\e606"; }
.icon-qq:before { content: "\e60d"; }
.icon-weixin:before { content: "\e607"; }
.icon-telephone:before { content: "\e608"; }
.icon-position:before { content: "\e609"; }
.icon-ie:before { content: "\e60a"; }
.icon-shouji:before { content: "\e600"; }
.icon-shenfenzheng:before { content: "\e601"; }
.icon-xinlang:before { content: "\e60e"; }
.icon-iconfonticon01:before { content: "\e60f"; }
.icon-denglumima:before { content: "\e610"; }
.icon-tengxunweibo:before { content: "\e611"; }
.icon-gerenxuanzhong:before { content: "\e612"; }
.icon-youjiantou:before { content: "\e613"; }
.icon-geren:before { content: "\e602"; }
.icon-renminbi:before { content: "\e603"; }
.icon-bankcard:before { content: "\e604"; }
.icon-qiandai:before { content: "\e605"; }*/
</style>
