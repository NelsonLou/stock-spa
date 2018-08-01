<!-- 点卖组件 -->
<template>
<div class="sellItem">
	<ul class="clearFloat sellItem-ul">
		<li>
			<span>交易单号</span>
			<span>{{data.policy_no}}</span>
		</li>
		<li>
			<span>{{data.stock_name}}{{stock_market}}{{data.stock_no}}</span>
			<span>{{data.message}}</span>
		</li>
		<li>
			<span>浮动盈亏</span>
			<span>{{data.float_profit}}</span>
		</li>
		<li>
			<span>现价</span>
			<span>{{data.current_price}}</span>
		</li>
		<li>
			<!-- <el-button class="infoBtn" @click='dialogVisible = true' :disabled='data.trade_buy_price=="--"' icon='el-icon-more'></el-button> -->
			<el-button class="infoBtn" @click="showDialog('a')" icon='el-icon-more'></el-button>
		</li>
	</ul>
	<!-- 策略详情弹窗 -->
	<el-dialog :title="dialogTitle" width='40%' :visible.sync="dialogInfo">
		<ul class="dialog-ul clearFloat">
			<li>
				<span>{{data.stock_name}}{{stock_market}}{{data.stock_no}}</span>
			</li>
			<li>
				<span>{{data.message}}</span>
			</li>
			<li>
				<span>交易单号：{{data.policy_no}}</span>
			</li>
			<li>
				<span>信用金：{{data.assurance_amount}}</span>
			</li>
			<li>
				<span>当前价格：{{data.current_price}}</span>
			</li>
			<li>
				<span v-if="data.float_profit>=0">浮动盈亏：</span>
				<span v-else>浮动盈亏：</span>
				<span v-if="data.float_profit>=0" class="up">{{data.float_profit}}</span>
				<span v-else class="down">{{data.float_profit}}</span>
			</li>
			<li>
				<span>股数：{{data.trade_buy_quantity}}</span>
			</li>
			<li>
				<span>买入价格：{{data.trade_buy_price}}</span>
			</li>
			<li>
				<span>单位递延费：{{data.trade_buy_quantity}}</span>
			</li>
			<li>
				<span>止盈：{{data.trade_profit_price}}</span>
			</li>
			<li>
				<span>止损：{{data.trade_loss_price}}</span>
			</li>
		</ul>
		<div v-if="showAutoHold">
			<div v-if='data.current_price > data.trade_buy_price' style="margin-top:20px;">
				<span>当前盈利：</span>
				<span>上涨 <i class="up">{{price}}</i>即将到达止盈价</span>
				<el-button class="infoBtn" @click="showDialog('b')" :disabled='data.trade_buy_price=="--"' size='mini'>设置止盈</el-button>
			</div>
			<div v-else style="margin-top:20px;">
				<span>当前亏损：</span>
				<span>下降 <i class="down">{{price}}</i> 即将到达止损价</span>
				<el-button class="infoBtn" @click="showDialog('c')" :disabled='data.trade_buy_price=="--"' size='mini'>设置止损</el-button>
			</div>
			<div>
				<el-switch v-model="data.auto_hold" inactive-text="自动递延" @change='postAutoHold()' active-color='#4cd964'></el-switch>
				<el-button class="infoBtn" @click='applyHold()' :disabled="data.auto_hold==true" size='mini'>{{hold_txt}}</el-button>
			</div>
		</div>
		<div slot="footer" class="dialog-footer">
			<!-- <el-button :disabled='BtnStatus' type="primary" @click='dialogTips = true'>{{data.status_name}}</el-button> -->
			<el-button @click="dialogInfo = false">确定</el-button>
		</div>
	</el-dialog>
	<!-- 止盈弹窗 -->
	<el-dialog :title='dialogTitle' width='40%' :visible.sync="dialogPrice">
		<div class="">
			<span>修改止盈</span>
			<el-input-number :step='0.01' size="mini" v-model='trade_profit_price'></el-input-number>
		</div>
		<div class="tips">
			<span>提示：当前盈利超过<i>{{trade_profit_prop_show}}%</i>时将发起自动平仓</span>
		</div>
		<div class="tips">
			<span>止盈金额：</span>
			<span>{{trade_profit_amount}}</span>
		</div>
		<div slot="footer" class="dialog-footer">
			<el-button @click="PostTradeLoss('a')" type="primary">确定</el-button>
			<el-button @click="dialogPrice = false">取消</el-button>
		</div>
	</el-dialog>
	<!-- 止损弹窗 -->
	<el-dialog :title='dialogTitle' width='40%' :visible.sync="dialogLoss">
		<div class="">
			<span>修改止损</span>
			<el-input-number :step='0.01' size="mini" v-model='trade_loss_price'></el-input-number>
		</div>
		<div class="tips">
			<span>提示：当前亏损超过<i>{{trade_loss_prop_show}}%</i>时将发起自动平仓</span>
		</div>
		<div class="tips">
			<span>止损金额：</span>
			<span>{{trade_loss_amount}}</span>
		</div>
		<div class="">
			<span>需补保证金:</span>
			<span>{{amount}}</span>
		</div>
		<div slot="footer" class="dialog-footer">
			<el-button @click="PostTradeLoss('b')" type="primary">确定</el-button>
			<el-button @click="dialogLoss = false">取消</el-button>
		</div>
	</el-dialog>
	<!-- 提示弹框 -->
	<el-dialog title='卖出' width='40%' :visible.sync="dialogTips">
		<span>您确定卖出：</span>
		<div>策略单号：{{data.policy_no}}</div>
		<div style="color:red;">{{data.stock_name}} {{data.stock_no}}</div>
		<div slot="footer" class="dialog-footer">
			<el-button @click="postSell()" type="primary">确定</el-button>
			<el-button @click="dialogTips = false">取消</el-button>
		</div>
	</el-dialog>
</div>
</template>
<script>
export default {
	data() {
		return {
			listData: {},
			stock_market: '', // 股票市场
			dialogInfo: false,
			dialogPrice: false,
			dialogLoss: false,
			dialogTips: false,
			hold_txt: '申请递延',
			holdToday: false,
			dialogTitle: '设置',
			trade_profit_price: 0, // 止盈价
			trade_loss_price: 0, // 止盈价
			total_amount: 0, // 之前已添加的保证金
		}
	},
	props: {
		//    单条数据
		data: {
			require: true,
			default: {
				id: null, // 策略ID
				policy_no: null, // 策略单号
				stock_id: null, // 股票ID
				stock_name: null, // 股票名称
				stock_no: null, // 股票代码
				delegate_quantity: null, // 下单委托数量
				trade_buy_quantity: null, // 下单成交数量
				assurance_amount: null, // 保证金
				trade_fee: null, // 手续费
				unit_hold_fee: null, // 单位递延费
				trade_buy_fee: null, // 买入佣金
				transfer_buy_fee: null, // 买入过户费
				trade_profit_price: null, // 止盈价格
				trade_loss_price: null, // 止损价格
				current_price: null, // 当前价格
				float_profit: null, // 浮动盈亏
				auto_hold: null, // 是否自动递延
				trade_buy_price: null, // 下单成交价格
				trade_buy_time: null, // 下单成交时间
				is_today_hold: null, // 当日是否递延
				policy_status: null, // 策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
				is_trade: null, // 能否交易
				status_name: null, // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
				message: null,
				hold_info: null,
			}
		},
		//    止损比例
		fee_rate: {
			require: true,
			default: 0.7,
		}
	},
	mounted() {
		console.log(this.data);
	},
	watch: {
		// 监听止盈价
		trade_profit_price: {
			handler: function(val, oldval) {
				if (val < this.data.trade_buy_price) {
					this.trade_profit_price = this.data.trade_profit_price
					this.$Message.error('止盈价格不得低于买入价')
				}
			},
			deep: true
		},
		holdToday: {
			handler: function(val, oldval) {
				if (this.holdToday == false) {
					this.hold_txt = '申请递延'
				} else {
					this.hold_txt = '取消递延'
				}
			},
			deep: true
		},
	},
	methods: {
		// 自动递延交互
		postAutoHold() {
			if (this.data.auto_hold == true) {
				var lastHold = false
			} else {
				var lastHold = true
			}
			this.$axios.post(this.$api.stock.auto_hold, {
				policy_id: this.data.id,
				auto_hold: this.data.auto_hold
			}).then((res) => {
				if (res.data.message == 'success') {
					if (lastHold == false) {
						this.$Message.success('自动递延成功')
					} else {
						this.$Message.success('取消递延成功')
					}
				}
			}).catch((err) => {
				this.data.auto_hold = lastHold
				console.log('接口错误: /api/auto_hold')
			})
		},
		// 设置单日递延交互
		applyHold() {
			this.holdToday = !this.holdToday
			var hold = !this.holdToday
			this.$axios.post(this.$api.stock.today_hol, {
				policy_id: this.data.id,
				is_today_hold: this.holdToday
			}).then((res) => {
				if (res.data.message == 'success') {
					this.$Message.success('自动递延成功')
					this.data.is_today_hold = this.holdToday
				}
			}).catch((err) => {
				console.log('接口错误: /api/auto_hold')
			}).then(() => {
				this.holdToday = this.data.is_today_hold
			})
		},
		// 控制弹窗
		showDialog(type) {
			if (type == 'a') {
				this.dialogInfo = true
				this.dialogTitle = this.data.stock_name
				this.trade_profit_price = this.data.trade_profit_price
				this.trade_loss_price = this.data.trade_loss_price
			} else if (type == 'b') {
				this.dialogPrice = true
				this.dialogTitle = '设置止盈'
			} else {
				this.dialogLoss = true
				this.dialogTitle = '设置止损'
			}
		},
		// 修改止盈/止损价
		PostTradeLoss(type) {
			var para = {}
			if (type == 'a') {
				para = {
					policy_id: this.data.id,
					type: 0, //0 止盈； 1 止损
					price: this.trade_profit_price, // 新的止盈/止损价
					amount: this.amount, // 新的止盈/止损价
				}
			} else {
				para = {
					policy_id: this.data.id,
					type: 1, //0 止盈； 1 止损
					price: this.trade_loss_price, // 新的止盈/止损价
					amount: this.amount, //追加的保证金金额
				}
			}
			this.$axios.post(this.$api.stock.trade_profit_and_loss, para).then((res) => {
				if (type == 'a') {
					this.dialogPrice = false
					this.$Message.success('止盈价设置成功')
					this.data.trade_profit_price = this.trade_profit_price
				} else {
					this.dialogLoss = false
					this.$Message.success('止损价设置成功')
					this.data.assurance_amount = this.data.assurance_amount + this.amount
					this.data.trade_loss_price = this.trade_profit_price
				}
			}).catch((err) => {
				console.log('接口错误: /api/trade-profit-and-loss')
			})
		},
		// 卖出接口
		postSell() {
			this.$axios.post(this.$api.stock.policy_sell, {
				policy_id: this.data.id, //策略ID
			}).then((res) => {
				console.log(res.data.message)
				this.$router.push({
					path: '/trade/sell'
				})
			}).catch((err) => {
				console.log('接口错误: /api/trade-profit-and-loss')
			})
		}
	},
	computed: {
		// 控制显示盈利/亏损
		price() {
			return Math.abs((Number(this.data.current_price) - Number(this.data.trade_loss_price)).toFixed(2))
		},
		// 控制设置按钮可点击
		BtnStatus() {
			if (this.data.policy_status == 3) {
				return false
			} else {
				return true
			}
		},
		// 控制显示设置止盈止损
		showAutoHold() {
			if (this.data.policy_status == 3) {
				return true
			} else {
				return false
			}
		},
		// 止盈比例
		trade_profit_prop_show() {
			return ((Math.abs(Number(this.trade_profit_amount) / Number(this.data.assurance_amount))) * 100).toFixed(2)
		},
		// 止损比例
		trade_loss_prop_show() {
			return ((Math.abs(Number(this.trade_loss_amount) / Number(this.data.assurance_amount))) * 100).toFixed(2)
		},
		// 止盈金额
		trade_profit_amount() {
			return parseInt((Number(this.trade_profit_price) - Number(this.data.trade_buy_price)) * Number(this.data.trade_buy_quantity))
			// 止盈金额 = （止盈价 - 买入价）* 股数
		},
		// 止损金额
		trade_loss_amount() {
			return parseInt((Number(this.trade_loss_price) - Number(this.data.trade_buy_price)) * Number(this.data.trade_buy_quantity))
			// 止损金额 = （止损价 - 买入价）* 股数
		},
		// 追加保证金
		amount() {
			return (Math.abs(((Number(this.trade_loss_price) - Number(this.data.trade_buy_price)) * Number(this.data.trade_buy_quantity) / Number(this.fee_rate))) - Number(this.data.assurance_amount)).toFixed(
				2)
		}
	},
}
</script>
<style scoped>
.dialog-ul {
	width: 100%;
}

.dialog-ul li {
	width: 50%;
	float: left;
	line-height: 40px;
}

.sellItem-ul {
	font-size: 14px;
	width: 100%;
	height: 100px;
	border-bottom: 1px solid rgb(182, 182, 182);
}

.sellItem-ul li {
	width: 18%;
	height: 100%;
	float: left;
	text-align: center;
}

.sellItem-ul li:first-child {
	margin-left: 10px;
}

.sellItem-ul li span {
	display: block;
	text-align: center;
	margin-top: 20px;
}

.state {
	line-height: 60px;
	font-size: 20px;
	color: red;
}

.clearFloat:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}

.clearFloat {
	zoom: 1;
	/* for IE6 IE7 */
}

.infoBtn {
	margin-left: 20px;
	margin-top: 30px;
}

.up {
	color: #fc5146;
}

.down {
	color: #00a104;
}

.tips {
	margin-top: 10px;
	font-size: 12px;
	color: rgb(182, 182, 182);
}
</style>
