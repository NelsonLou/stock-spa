<!-- 在线充值 -->
<template>
<div>
	<div>
		<div class="dashboard">
			<div class="has-bank" v-if="!idCard">
				<p>请实名验证</p>
				<el-form :model="codeidform" :rules="rules">
					<el-form-item label="真实姓名" :label-width="formLabelWidth" prop="name">
						<el-input v-model="codeidform.name" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="身份证号" :label-width="formLabelWidth" prop="codeid">
						<el-input v-model="codeidform.codeid" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="idCheck">确 定</el-button>
						<span style="color:red;">{{errText}}</span>
					</el-form-item>
				</el-form>
			</div>
			<div class="has-bank" v-if="idCard">
				<el-form :model="recharge" :rules="bankRules">
					<el-form-item label="充值金额" :label-width="formLabelWidth" prop="bank">
						<el-input auto-complete="off" v-model="recharge.bank"></el-input>
						<!-- <span v-if="tip">手续费{{tipNumber}}元</span> -->
					</el-form-item>
					<el-form-item label="选择银行" :label-width="formLabelWidth">
						<el-select v-model="recharge.value" placeholder="请选择">
							<el-option v-for="item in recharge.options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>

					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="tips">确 定</el-button>
					</el-form-item>
				</el-form>
			</div>
			<el-dialog title="充值" :visible.sync="dialogFormVisible" width="25%">
				<el-form :model="recharge">
					<el-form-item label="充值金额" label-width="80px" prop="bank">
						<el-input v-model="recharge.bank" auto-complete="off" :disabled="true"></el-input>
					</el-form-item>
					<!--<p style="float:left;width:80px;text-align:center;">手续费：</p>
            <p style="float:left;width:60px;text-align:center;">{{tipNumber}}元</p>-->
				</el-form>
				<div slot="footer" class="dialog-footer">
					<div v-html="htmlCode" style="visibility:hidden;">
					</div>
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="goOutPage">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			codeidform: {
				name: '',
				codeid: '',
			},
			recharge: {
				options: [{
					value: '102C',
					label: '中国工商银行'
				}, {
					value: '103C',
					label: '中国农业银行'
				}, {
					value: '302C',
					label: '中信银行'
				}, {
					value: '303C',
					label: '中国光大银行'
				}, {
					value: '105C',
					label: '建设银行'
				}, {
					value: '305C',
					label: '民生银行'
				}, {
					value: '309C',
					label: '北京银行'
				}, {
					value: '312C',
					label: '上海银行'
				}, {
					value: '403C',
					label: '邮政银行'
				}],
				bank: '',
				value: ''
			},
			errText: '',
			tipNumber: '',
			tip: false,
			hasID: false,
			hasbank: false,
			formLabelWidth: '80px',
			dialogFormVisible: false,
			htmlCode: '',
			rules: {
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
			bankRules: {
				bank: [{
						required: true,
						message: '请输入充值金额',
						trigger: 'blur'
					},
					{
						pattern: /^[1-9]\d*00$/,
						message: '请输入100的整数倍'
					}
				]
			}
		};
	},
	methods: {
		goOutPage: function() {
			document.getElementsByName('pay')[0].submit();
		},
		tips: function() {
			var r = /^[1-9]\d*00$/;
			//	  if(r.test(this.recharge.bank) && this.recharge.value != ''){
			if (1) {
				this.dialogFormVisible = true;
				let me = this;
				axios.post(this.$api.user.recharge, {
					fee: me.recharge.bank,
					bank_info: me.recharge.value
				}).then(res => {
					me.tipNumber = res.data.fee;
					me.htmlCode = res.data.html;
				}).catch(err => {
					console.log('失败');
				})
			} else {
				return
			}
		},
		idCheck: function() {
			let me = this;
			axios.post(this.$api.user.id_card_certification, {
				name: me.codeidform.name,
				id_card: me.codeidform.codeid
			}).then(res => {
				me.errText = "实名认证成功";
				me.$store.dispatch('idName', me.codeidform)
			}).catch(err => {
				console.log(err.response);
				me.errText = err.response.data.message;
			})
		}
	},
	computed: {
		idCard() {
			return this.$store.state.AuthUser.verified;
		}
	},
	mounted() {
		console.log(this.idCard);
		if (this.idCard) {
			this.hasID = false;
		} else {
			this.hasID = true;
		}
	}
}
</script>
<style scoped>
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
	padding: 85px 0;
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
	height: 70px;
	background: #f9f7f7;
	padding-left: 60px;
	padding-top: 6px;
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

.dashboard .base-info-row {
	display: -webkit-box;
	display: -moz-box;
	display: -o-box;
	display: flex;
	display: -ms-flexbox;
	height: 45px;
	background: #f9f7f7;
	line-height: 45px;
	padding-left: 60px;
}

.dashboard .login-info-row {
	display: -webkit-box;
	display: -moz-box;
	display: -o-box;
	display: flex;
	display: -ms-flexbox;
	padding-left: 110px;
	font-size: 12px;
	color: #666;
	padding-top: 20px;
}

.dashboard .other-row .row-btn {
	padding-top: 10px;
	font-size: 16px;
}

.login-info-row span {
	display: inline-block;
	line-height: 20px;
}

@font-face {
	font-family: "iconfont";
	src: url('//at.alicdn.com/t/font_1477563149_3844395.eot');
	/* IE9*/
	src: url('//at.alicdn.com/t/font_1477563149_3844395.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
	url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'), /* chrome,firefox */
	url('//at.alicdn.com/t/font_1477563149_3844395.ttf') format('truetype'), /* chrome,firefox,opera,Safari, Android, iOS 4.2+*/
	url('//at.alicdn.com/t/font_1477563149_3844395.svg#iconfont') format('svg');
	/* iOS 4.1- */
	src: url('//at.alicdn.com/t/font_1477563149_3844395.eot')\0;
	/* ie8 fix */
}

.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}

.icon-bianji:before {
	content: "\e60b";
}

.icon-tablet:before {
	content: "\e60c";
}

.icon-weibo:before {
	content: "\e606";
}

.icon-qq:before {
	content: "\e60d";
}

.icon-weixin:before {
	content: "\e607";
}

.icon-telephone:before {
	content: "\e608";
}

.icon-position:before {
	content: "\e609";
}

.icon-ie:before {
	content: "\e60a";
}

.icon-shouji:before {
	content: "\e600";
}

.icon-shenfenzheng:before {
	content: "\e601";
}

.icon-xinlang:before {
	content: "\e60e";
}

.icon-iconfonticon01:before {
	content: "\e60f";
}

.icon-denglumima:before {
	content: "\e610";
}

.icon-tengxunweibo:before {
	content: "\e611";
}

.icon-gerenxuanzhong:before {
	content: "\e612";
}

.icon-youjiantou:before {
	content: "\e613";
}

.icon-geren:before {
	content: "\e602";
}

.icon-renminbi:before {
	content: "\e603";
}

.icon-bankcard:before {
	content: "\e604";
}

.icon-qiandai:before {
	content: "\e605";
}
</style>
