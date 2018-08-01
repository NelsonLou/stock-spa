<!-- 个人中心主页 -->
<template>
<div>
	<header-nav></header-nav>
	<div class="center-main">
		<!-- <div class="container top-nav" v-if='!isBank'>
			<span>您还未绑定银行卡，将影响功能使用 <a class="a" @click="bindingCard">立即绑定</a> </span>
		</div> -->
		<div class="container clear">
			<div class="side_menu">
				<div class="head_nick">
					<div class="headimg"></div>
					<div class="nickname">
						<span>{{nickname}}</span>
						<span></span>
						<span></span>
						<a>
							<i class="iconfont icon-bianji" style="color:#666;"></i>
						</a>
					</div>
					<div class="info-icon hide">
						<span style="background:#999;">
								<i class="iconfont icon-geren"></i>
							</span>
						<span style="background:#54b5fc;">
								<i class="iconfont icon-shouji"></i>
							</span>
						<span style="background:#999;">
								<i class="iconfont icon-bankcard"></i>
							</span>
					</div>
				</div>
				<el-col>
					<el-menu default-active="router" class="el-menu-vertical-demo" background-color="#fff" text-color="#807f7f" active-text-color="#fc5146" unique-opened router style="text-align:center;">
						<el-menu-item index="account">
							<span slot="title">我的账户</span>
						</el-menu-item>
						<!-- <el-menu-item index="assets">
							<span slot="title">在线充值</span>
						</el-menu-item> -->
						<el-menu-item index="capital">
							<span slot="title">资产明细</span>
						</el-menu-item>
						<!-- <el-menu-item index="spread">
							<span slot="title">我的推广</span>
						</el-menu-item> -->
						<el-menu-item index="protocol">
							<span slot="title">相关协议</span>
						</el-menu-item>
						<!-- <el-menu-item index="accountsafety">
							<span slot="title">密码设置</span>
						</el-menu-item> -->
					</el-menu>
				</el-col>
			</div>
			<div class="content">
				<transition name="move" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
		</div>
		<!-- 弹窗 -->
		<el-dialog title="绑定银行卡" :visible.sync="dialogFormVisible" @close="resetForm()">
			<el-form :model="form" status-icon :rules="rules2" ref="form" label-width="100px" class="demo-ruleForm">
				<el-form-item label="选择银行" prop="bank_name">
					<el-select v-model="form.bank_name">
						<el-option v-for="item in bankList" :key="item.id" :label="item.bank_name" :value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="选择省份" prop="province">
					<el-select v-model="form.province" @change='changeProvince'>
						<el-option v-for="item in province" :key="item.ProID" :label="item.name" :value="item.ProID">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="选择城市" prop="city">
					<el-select v-model="form.city">
						<el-option v-for="item in cityData" :key="item.CityID" :label="item.name" :value="item.name">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="填写开户支行" prop="name_of_branch">
					<el-input v-model="form.name_of_branch"></el-input>
				</el-form-item>
				<el-form-item label="银行卡号" prop="bank_card_no">
					<el-input v-model="form.bank_card_no"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('form')">提交</el-button>
					<el-button @click="resetForm()">重置</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
	<foot-nav></foot-nav>
</div>
</template>
<script>
import FootNav from '../common/FootNav'
import HeaderNav from '../common/HeaderNav'
// import { mapState } from 'vuex'
import province from './city/province'
import city from './city/city'
export default {
	data() {
		var checkbank_name = (rule, value, callback) => {
			if (value === '') {
				return callback(new Error('请选择银行'));
			} else {
				callback();
			}
		};
		var checkprovince = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请选择开户省'));
			} else {
				callback();
			}
		};
		var checkcity = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请选择开户市'));
			} else {
				callback();
			}
		};
		var checkname_of_branch = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请填写开户行'));
			} else {
				callback()
			}
		};
		var checkbank_card_no = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入银行卡号'));
			} else {
				var bol = this.luhnCheck(value)
				if (bol) {
					callback()
				} else {
					callback(new Error('请输入正确的银行卡号'));
				}
			}
		};
		return {
			province,
			city,
			cityData: [],
			isAccount: false,
			isAssets: false,
			isSpread: false,
			isProtocol: false,
			path: '',
			seen: true,
			dialogSeen: false,
			dialogFormVisible: false,
			form: {
				bank_name: '',
				province: '',
				city: '',
				name_of_branch: '',
				bank_card_no: ''
			},
			bankList: [],
			rules2: {
				bank_name: [{
					validator: checkbank_name,
					trigger: 'blur'
				}],
				province: [{
					validator: checkprovince,
					trigger: 'blur'
				}],
				city: [{
					validator: checkcity,
					trigger: 'blur'
				}],
				name_of_branch: [{
					validator: checkname_of_branch,
					trigger: 'blur'
				}],
				bank_card_no: [{
					validator: checkbank_card_no,
					trigger: 'blur'
				}],
			}
			// nickname:''
		}
	},
	created() {
		this.getBankList()
	},
	components: {
		FootNav,
		HeaderNav
	},
	methods: {
		// 获取银行列表
		getBankList() {
			this.$axios.get(this.$api.other.bankList).then(res => {
				this.bankList = res.data.data
			}).catch(err => {
				console.log('请求错误：/api/bank-info/list');
			})
		},
		// 控制弹窗
		bindingCard() {
			this.dialogFormVisible = true
		},
		// 提交绑定银行卡
		// 6228480316029316361
		submitForm(formName) {
			for (let i = 0; i < this.province.length; i++) {
				if (this.form.province == this.province[i].ProID) {
					var province = this.province[i].name
				}
			}
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$axios.post(this.$api.user.bind_the_bank_card, {
						bank_name: this.form.bank_name,
						province: province,
						city: this.form.city,
						name_of_branch: this.form.name_of_branch,
						bank_card_no: this.form.bank_card_no,
					}).then(res => {
						this.dialogFormVisible = false
						this.resetForm()
						console.log(res.data.message)
						this.$Message.success('绑定银行卡成功!')
						this.getUserInfo()
					}).catch(err => {
						console.log('请求错误：/api/bind-the-bank-card');
					})
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		// 重置表单
		resetForm() {
			this.$refs['form'].resetFields();
		},
		// 选择省份变动城市
		changeProvince() {
			this.form.city = ''
			this.cityData = []
			for (let i = 0; i < this.city.length; i++) {
				if (this.city[i].ProID == this.form.province) {
					this.cityData.push(this.city[i])
				}
			}
		},
		// 验证银行卡号
		luhnCheck(bankno) {
			var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhn进行比较）
			var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
			var newArr = new Array();
			for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
				newArr.push(first15Num.substr(i, 1));
			}
			var arrJiShu = new Array(); //奇数位*2的积 <9
			var arrJiShu2 = new Array(); //奇数位*2的积 >9
			var arrOuShu = new Array(); //偶数位数组
			for (var j = 0; j < newArr.length; j++) {
				if ((j + 1) % 2 == 1) { //奇数位
					if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
					else arrJiShu2.push(parseInt(newArr[j]) * 2);
				} else //偶数位
					arrOuShu.push(newArr[j]);
			}
			var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
			var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
			for (var h = 0; h < arrJiShu2.length; h++) {
				jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
				jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
			}
			var sumJiShu = 0; //奇数位*2 < 9 的数组之和
			var sumOuShu = 0; //偶数位数组之和
			var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
			var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
			var sumTotal = 0;
			for (var m = 0; m < arrJiShu.length; m++) {
				sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
			}
			for (var n = 0; n < arrOuShu.length; n++) {
				sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
			}
			for (var p = 0; p < jishu_child1.length; p++) {
				sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
				sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
			}
			//计算总和
			sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);
			//计算luhn值
			var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
			var luhn = 10 - k;
			if (lastNum == luhn) {
				$("#banknoInfo").html("luhn验证通过");
				return true;
			} else {
				$("#banknoInfo").html("银行卡号必须符合luhn校验");
				return false;
			}
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
		nickname() {
			return this.$store.state.AuthUser.nickname
		},
		onRoutes() {
			return this.$route.path.replace('/', '');
		},
		isBank() {
			return this.$store.state.AuthUser.has_bank_card
		}
	},
}
</script>
<style scoped>
.el-menu-item {
	border-bottom: 1px solid #f3f3f3;
}

.el-menu-item.active {
	color: red;
}

.menus li a {
	text-decoration: none;
}

.content {
	float: left;
	margin-left: 16px;
	margin-top: 12px;
	width: 944px;
	background: #fff;
}

.no_card_bound {
	height: 54px;
	line-height: 54px;
	background-color: #fc5146;
	color: #fff;
	font-size: 16px;
	text-align: center;
	display: none;
}

.no_card_bound a {
	font-size: 14px;
	color: #fee295;
	text-decoration: underline;
}

.no_card_bound i {
	font-size: 20px;
}

.side_menu {
	float: left;
	border: 1px solid #E9E9Eb;
	background-color: #fff;
	width: 210px;
	height: 550px;
	margin-top: 12px;
}

.side_menu .head_nick {
	width: 210px;
	padding-top: 26px;
}

.side_menu .head_nick .headimg {
	margin: 0 auto;
	width: 70px;
	height: 70px;
	border-radius: 70px;
	border: 1px solid #E9E9Eb;
	background: #e6f2fa;
	background-size: 70px 70px;
}

.side_menu .head_nick .nickname {
	text-align: center;
	margin: 10px 0;
	font-size: 14px;
}

.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}

.side_menu .menus {
	border-top: 1px solid #E9E9Eb;
}

.side_menu .menus li a {
	display: block;
	width: 207px;
	height: 54px;
	line-height: 54px;
	text-align: center;
	font-size: 14px;
	color: #807f7f;
}

.side_menu .menus li a.actived {
	background-color: #fc5146;
	color: #fff;
}

.center-main {
	background: #efefef;
	padding-bottom: 30px;
	padding-top: 30px;
	min-height: 760px !important;
}

.hide {
	display: none !important;
}

.top-nav {
	height: 54px;
	line-height: 54px;
	margin-top: 30px;
	background-color: #fc5146;
	color: #fff;
	font-size: 16px;
	text-align: center;
}

.a {
	font-size: 14px;
	color: #fee295;
	text-decoration: underline;
	background: transparent;
	outline: none;
	cursor: pointer;
	transition: color .3s ease;
}
</style>
