<!-- 历史记录单条 -->
<template>
<div>
	<ul class="historyItem-ul">
		<li>
			<span>策略单号</span>
			<span>{{data.policy_no}}</span>
		</li>
		<li>
			<span>交易本金</span>
			<span>{{data.assurance_amount}}</span>
		</li>
		<li>
			<span>{{data.stock_name}}</span>
			<span>{{data.trade_buy_quantity}}股</span>
		</li>
		<li>
			<span>交易盈亏</span>
			<span v-if='data.profit_and_loss>0' style="color:#fc5146">{{profit_and_loss}}元</span>
			<span v-else style="color:#00a104">{{profit_and_loss}}元</span>
		</li>
		<li>
			<span>盈利分配</span>
			<span>{{data.individual_profit}}</span>
		</li>
	</ul>
	<div class="historyItem-button" @click='dialogFormVisible = true'>查看详情</div>
	<!-- 弹窗 -->
	<el-dialog title="策略详情" :visible.sync="dialogFormVisible">
		<div style="line-height:40px;">
			<span>交易单号:</span>
			<span>{{data.policy_no}}</span>
			<span style="margin-left:30%;">策略状态:</span>
			<span>{{data.policy_status}}</span>
		</div>
		<el-collapse style="background-color:#F6F8FA;">
			<el-collapse-item class="dialogItem" title="交易概况" name="1">
				<ul class="clearFloat">
					<li>
						<span>交易本金：{{data.assurance_amount}}元</span>
					</li>
					<li>
						<span>交易股数：{{data.trade_sell_quantity}}</span>
					</li>
					<li>
						<span>买入价：{{data.trade_buy_price}}元</span>
					</li>
					<li>
						<span>卖出价：{{data.trade_sell_price}}元</span>
					</li>
					<li>
						<span>止盈价：{{data.trade_profit_price}}元</span>
					</li>
					<li>
						<span>止损价：{{data.trade_loss_price}}元</span>
					</li>
					<li>
						<span>买入类型：市场买入</span>
					</li>
					<li>
						<span>卖出类型：{{data.trade_sell_type}}</span>
					</li>
				</ul>
			</el-collapse-item>
			<el-collapse-item class="dialogItem" title="交易明细" name="2">
				<ul class="clearFloat">
					<li>
						<span>买入时间：{{data.trade_buy_time}}</span>
					</li>
					<li>
						<span>卖出时间：{{data.trade_sell_time}}</span>
					</li>
					<li>
						<!-- ? -->
						<span>策略盈亏：{{data.total_profit}}</span>
					</li>
					<li>
						<span>交易盈亏：</span>
						<span v-if='data.profit_and_loss>0' style="color:#fc5146">{{profit_and_loss}}元</span>
						<span v-else style="color:#00a104">{{profit_and_loss}}元</span>
					</li>
					<li>
						<span>盈利分配：{{data.individual_profit}}元</span>
					</li>
					<li>
						<span>亏损减扣：{{LossDeduction}}元</span>
					</li>
					<li>
						<span>总佣金：{{allFee}}元</span>
					</li>
					<li>
						<span>(卖)印花税：{{data.stamp_duty}}元</span>
					</li>
					<li>
						<span>(买)佣金：{{data.trade_buy_fee}}元</span>
					</li>
					<li>
						<span>(卖)佣金：{{data.trade_sell_fee}}元</span>
					</li>
					<li>
						<span>(买)过户费：{{data.transfer_buy_fee}}元</span>
					</li>
					<li>
						<span>(卖)过户费：{{data.transfer_sell_fee}}元</span>
					</li>
					<li>
						<span>递延费：{{data.hold_fee}}（递延天数{{data.hold_days}}）</span>
					</li>
				</ul>
			</el-collapse-item>
			<el-collapse-item class="dialogItem" title="策略信用金结算" name="3">
				<ul>
					<li>
						<span>冻结：{{data.assurance_amount}}元</span>
					</li>
					<li>
						<span>返还：{{data.return_amount}}元</span>
					</li>
				</ul>
			</el-collapse-item>
		</el-collapse>
	</el-dialog>
</div>
</template>
<script>
export default {
	data() {
		return {
			listData: {},
			dialogFormVisible: false,
		}
	},
	props: {
		data: {
			require: true,
			default: {
				id: 1, //策略ID
				policy_no: "60128820170823104051", //策略编号
				stock_id: 19264, //股票ID
				stock_name: "农业银行", //股票名称
				stock_no: "601288", //股票代码
				trade_buy_quantity: 100, //下单成交数量
				trade_sell_quantity: 100, //平仓成交数量
				assurance_amount: 50, //保证金 + 追加保证金
				trade_fee: "3.20", //手续费
				trade_profit_price: "4.00", //止盈价格
				trade_loss_price: "3.40", //止损价格
				trade_buy_price: "3.74", //下单成交价格
				trade_sell_price: "3.94", //平仓成交价格
				trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
				trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
				trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
				total_profit: "20.00", //盈亏总额
				trade_buy_fee: "5.00", //买入佣金
				trade_sell_fee: "5.00", //卖出佣金
				transfer_buy_fee: "0.00", //买入过户费
				transfer_sell_fee: "0.00", //卖出过户费
				stamp_duty: "0.00", //印花税
				individual_profit: "6.12", //策略人盈亏
				hold_fee: "0.00", //递延费总额
				hold_days: 1, //持仓天数
				policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
				return_amount: "0.00", //退还金额
				unit_hold_fee: "0.00" //单位递延费
			},
		},
	},
	created() {},
	mounted() {},
	computed: {
		// 交易盈亏
		profit_and_loss() {
			return (Number(this.data.total_profit) - (Number(this.data.trade_buy_fee) + Number(this.data.trade_sell_fee) + Number(this.data.transfer_buy_fee) + Number(this.data.transfer_sell_fee) + Number(this.data.stamp_duty))).toFixed(2)
		},
		// 总佣金
		allFee() {
			return Number(this.data.trade_buy_fee) + Number(this.data.trade_sell_fee) + Number(this.data.transfer_buy_fee) + Number(this.data.transfer_sell_fee) + Number(this.data.stamp_duty)
		},
		// 亏损减扣
		LossDeduction() {
			if (this.profit_and_loss > 0) {
				return 0
			} else {
				if ((Number(this.data.assurance_amount) + Number(this.data.profit_and_loss)) > 0) {
					return this.profit_and_loss
				} else {
					return Number(this.data.assurance_amount) - Number(this.allFee)
				}
			}
		}
	}
}
</script>
<style scoped>
.historyItem-ul {
	height: 100%;
}

.historyItem-ul li {
	height: 74px;
	min-width: 100px;
	display: inline-block;
	float: left;
	text-align: left;
	line-height: 27px;
	padding: 20px 0 0 25px;
	margin-left: 30px;
}

.historyItem-ul li span {
	display: block;
	line-height: 27px;
}

.historyItem-button {
	float: right;
	width: 100px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	font-size: 16px;
	color: #fc5146;
	background: #fff;
	border-radius: 6px;
	border: 1px solid #fc5146;
	margin-right: 100px;
	margin-top: 30px;
}

.dialogItem ul {
	width: 100%;
	display: block;
	margin-top: 10px;
}

.dialogItem ul li {
	display: inline-block;
	float: left;
	width: 33%;
	text-align: center;
}

.dialogItem span {
	float: left;
	line-height: 35px;
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
</style>
