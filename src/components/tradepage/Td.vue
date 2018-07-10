<!-- 点买页面 -->
<template>
<div id='tdBody' class="clear" style="padding:40px 20px 0">
	<!-- 创建策略部分 -->
	<div class="" style="float:left;width:480px;border-right:1px solid #ccc;">
		<!-- 搜索框 -->
		<div class="stock-input">
			<el-row class="demo-autocomplete">
				<el-col :span="12">
					<el-autocomplete class="inline-input searchInput" valueKey='stock_name' v-model="stock_choose_ready" :fetch-suggestions="querySearchAsync" placeholder="股票代码／股票名称／股票缩写" :trigger-on-focus="false" @select='handleSelect'>
						<template slot-scope="props">
                            <span class="addr">{{ props.item.stock_name }}</span>
                            <span class="addr">{{ props.item.stock_show }}</span>
                            <span class="addr">{{ props.item.stock_abb }}</span>
                        </template>
					</el-autocomplete>
				</el-col>
			</el-row>
		</div>
		<div style="padding-top:15px;">
			<!-- 选择信用金 -->
			<div class="trade-row clear">
				<div class="trade-col-left" style="line-height:30px;padding-left:8px;">投入信用金</div>
				<div class="trade-col-right" style="width:368px;">
					<div class="deposit-layout">
						<div class="deposite-input-layout">
							<input @blur='handldDeal()' v-model='assurance_amount_show' placeholder="请输入1000的整数倍">
							<span class="">元</span>
						</div>
						<div>
							<span> </span>
							<span> </span>
						</div>
					</div>
				</div>
			</div>
			<div class="trade-row clear" style="margin-top:20px;">
				<div class="trade-col-left" style="width:40px;color:#c2c2c2;">推荐</div>
				<div class="trade-col-right" style="width:380px;padding-left:10px;">
					<div style="float:left;margin-right:5px;">
						<el-button size='mini' style="display:block" @click='handleStockNum(1)'>1000元</el-button>
						<el-button size='mini' style="display:block;margin: 0 auto;margin-top:5px;" @click='handleStockNum(20)'>2万元</el-button>
					</div>
					<div style="float:left;margin-right:5px;">
						<el-button size='mini' style="display:block" @click='handleStockNum(3)'>3000元</el-button>
						<el-button size='mini' style="display:block;margin: 0 auto;margin-top:5px;" @click='handleStockNum(30)'>3万元</el-button>
					</div>
					<div style="float:left;margin-right:5px;">
						<el-button size='mini' style="display:block" @click='handleStockNum(5)'> 5000元 </el-button>
						<el-button size='mini' style="display:block;margin: 0 auto;margin-top:5px;" @click='handleStockNum(40)'> 4万元 </el-button>
					</div>
					<div style="float:left;margin-right:5px;">
						<el-button size='mini' style="display:block" @click='handleStockNum(10)'> 1万元 </el-button>
						<el-button size='mini' style="display:block;margin: 0 auto;margin-top:5px;" @click='handleStockNum(50)'> 5万元 </el-button>
					</div>
				</div>
			</div>
			<div class="trade-row clear" style="margin-top:20px;padding-left:15px;">
				<div class="trade-col-left" style="line-height:30px;text-align:center">
					<span>买入股数</span>
				</div>
				<el-input size='mini' :disabled='true' v-model='stock_num_txt' style='width:200px;margin-top:5px;margin-left:20px;'>
				</el-input>
				<el-button size='mini' @click='editStockNum()' icon='el-icon-edit'></el-button>
			</div>
			<div class="trade-row clear" style="margin-top:20px;padding-left:15px;">
				<div class="trade-col-left" style="line-height:30px;text-align:center">
					<span>参考市值</span>
				</div>
				<el-input size='mini' :disabled='true' v-model='stock_value_txt' style='width:200px;margin-top:5px;margin-left:20px;'>
				</el-input>
			</div>
			<div class="buy-border"></div>
			<div class="" style="padding-left:15px">
				<div class="trade-row clear" style="margin-top:20px;line-height:30px;">
					<div class="trade-col-left">止盈价格：</div>
					<div class="trade-col-right" style="width:389px;padding-left:30px;">
						<span v-if='!showCount'>请选择信用金</span>
						<el-input-number @blur='judgeNumber(1)' :step='0.01' v-if='showCount' size="mini" v-model="stop_profit_ratio"></el-input-number>
						<span v-if='showCount' style="margin-left:10px;">赚信用金的{{stop_profit_prop_show}}%平仓</span>
					</div>
				</div>
				<div class="trade-row clear" style="margin-top:20px;line-height:30px;">
					<div class="trade-col-left">止损价格：</div>
					<div class="trade-col-right" style="width:389px;padding-left:30px;">
						<span v-if='!showCount'>请选择信用金</span>
						<el-input-number @blur='judgeNumber(2)' :step='0.01' v-if='showCount' size="mini" v-model="stop_loss_ratio"></el-input-number>
						<span v-if='showCount' style="margin-left:10px;">亏信用金的{{stop_loss_prop_show}}%平仓</span>
					</div>
				</div>
				<div class="trade-row clear" style="margin-top:20px;height:24px;">
					<div class="trade-col-left">持仓时间 一天</div>
					<br/>
					<div class="" style="margin-top:10px;font-size:12px;color:#B6B6B6;">若未申请递延下个交易日{{stock_choose_info.auto_closing_time}}投资人将卖出股票</div>
				</div>
				<div class="trade-row clear" style="margin-top:40px;height:24px;">
					<div class="trade-col-left">自动递延（一天递延费{{hold_price}}元)</div>
					<div class="trade-col-left" style="margin-left:20px">
						<el-switch v-model="auto_hold" active-color="#13ce66" inactive-color="#B6B6B6">
						</el-switch>
					</div>
				</div>
				<div class="trade-col-left" syle='margin-top:20px;'>合计：{{assurance_amount}}</div>
				<br/>
				<div class="trade-col-left">可用策略余额 {{AvailableAmount}} 元</div>
			</div>
			<div class="" style="margin-top:60px;height:162px;">
				<el-button type="primary" @click='createdBefore()' :disabled='!canCreate' style="display:block;margin: 0 auto;width:225px;">{{canCreate_txt}}</el-button>
				<div class="agree-row" style="margin:0 auto;width:190px;margin-top:40px;">
					<el-checkbox v-model="checked"></el-checkbox>
					<label for="ckbAgreement" style="margin-left:10px;cursor:pointer;">我已阅读并同意</label>
					<a href="javascript:void(0)" @click='goProtocol()' style="color:#007bfe;">《相关协议》</a>
				</div>
			</div>
		</div>
	</div>
	<!-- 显示数据部分 -->
	<div class="right" style="width:600px;">
		<!-- 相关数据 -->
		<div class="stock-layout">
			<div class="stock-name">
				<b>{{stock_choose_name}}</b>
				<span>（</span>
				<span>{{stock_choose_no}}</span>
				<span>）</span>
			</div>
			<div v-if='quotation[2]<0' class="stock-value clearfix down" style="margin-top:20px;">
				<span class="value1">{{quotation[0]}}</span>
				<i class="iconfont arrow-pf  icon-arrow-loss"></i>
				<span class="num">
						<span>{{quotation[2]}}</span>
				<span> </span>
				</span>
				<span class="num">
						<span>{{quotation[1]}}</span>
				<span>%</span>
				</span>
			</div>
			<div v-else class="stock-value clearfix" style="margin-top:20px;">
				<span class="value1">{{quotation[0]}}</span>
				<i class="iconfont arrow-pf  icon-arrow-profit"></i>
				<span class="num">
						<span>{{quotation[2]}}</span>
				<span> </span>
				</span>
				<span class="num">
						<span>{{quotation[1]}}</span>
				<span>%</span>
				</span>
			</div>
			<div class="stock-items-row clearfix" style="margin-top:30px;">
				<div class="d-row">
					<div class="name-value">
						<span class="name">今开</span>
						<span class="value">{{stock_choose_info.opening_price}}</span>
					</div>
					<div class="name-value">
						<span class="name">昨收</span>
						<span class="value">{{stock_choose_info.closed_yesterday_price}}</span>
					</div>
				</div>
				<div class="d-row">
					<div class="name-value">
						<span class="name">最高</span>
						<span class="value">{{quotation[3]}}</span>
					</div>
					<div class="name-value">
						<span class="name">最低</span>
						<span class="value">{{quotation[4]}}</span>
					</div>
				</div>
				<div class="d-row">
					<div class="name-value">
						<span class="name">涨停价</span>
						<span class="value">{{stock_choose_info.raising_limit}}</span>
					</div>
					<div class="name-value">
						<span class="name">跌停价</span>
						<span class="value">{{stock_choose_info.limit_down}}</span>
					</div>
				</div>
				<div class="d-row">
					<div class="name-value">
						<span class="name">成交量</span>
						<span class="value">{{quotation[5]}}</span>
					</div>
					<div class="name-value">
						<span class="name">成交额</span>
						<span class="value">{{quotation[6]}}</span>
					</div>
				</div>
				<div class="d-row sell-buy">
					<div class="buy-sell-detail">
						<div class="buy-sell-row">
							<span>卖</span>
							<span>5</span>
							<span v-show='quotation[12]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[12]}}</span>
							<span v-show='quotation[12]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[12]}}</span>
							<span v-show='quotation[12]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[12]}}</span>
						</div>
						<div class="buy-sell-row">
							<span>卖</span>
							<span>4</span>
							<span v-show='quotation[13]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[13]}}</span>
							<span v-show='quotation[13]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[13]}}</span>
							<span v-show='quotation[13]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[13]}}</span>
						</div>
						<div class="buy-sell-row">
							<span>卖</span>
							<span>3</span>
							<span v-show='quotation[14]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[14]}}</span>
							<span v-show='quotation[14]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[14]}}</span>
							<span v-show='quotation[14]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[14]}}</span>
						</div>
						<div class="buy-sell-row">
							<span>卖</span>
							<span>2</span>
							<span v-show='quotation[15]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[15]}}</span>
							<span v-show='quotation[15]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[15]}}</span>
							<span v-show='quotation[15]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[15]}}</span>
						</div>
						<div class="buy-sell-row">
							<span>卖</span>
							<span>1</span>
							<span v-show='quotation[16]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[16]}}</span>
							<span v-show='quotation[16]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[16]}}</span>
							<span v-show='quotation[16]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[16]}}</span>
						</div>
						<div class="buy-sell-line">
						</div>
						<div class="buy-sell-row">
							<span>买</span>
							<span>1</span>
							<span v-show='quotation[7]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[7]}}</span>
							<span v-show='quotation[7]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[7]}}</span>
							<span v-show='quotation[7]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[7]}}</span>
						</div>
						<div class="buy-sell-row">
							<span>买</span>
							<span>2</span>
							<span v-show='quotation[8]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[8]}}</span>
							<span v-show='quotation[8]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[8]}}</span>
							<span v-show='quotation[8]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[8]}}</span>
						</div>
						<div class="buy-sell-row">
							<span>买</span>
							<span>3</span>
							<span v-show='quotation[9]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[9]}}</span>
							<span v-show='quotation[9]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[9]}}</span>
							<span v-show='quotation[9]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[9]}}</span>
						</div>
						<div class="buy-sell-row">
							<span>买</span>
							<span>4</span>
							<span v-show='quotation[10]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[10]}}</span>
							<span v-show='quotation[10]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[10]}}</span>
							<span v-show='quotation[10]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[10]}}</span>
						</div>
						<div class="buy-sell-row">
							<span>买</span>
							<span>5</span>
							<span v-show='quotation[11]>stock_choose_info.closed_yesterday_price' class="sell-value win">{{quotation[11]}}</span>
							<span v-show='quotation[11]<stock_choose_info.closed_yesterday_price' class="buy-value win">{{quotation[11]}}</span>
							<span v-show='quotation[11]==stock_choose_info.closed_yesterday_price' class="center-value win">{{quotation[11]}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 图表 -->
		<div class="" style="margin-top:110px;">
			<div style="font-size:14px;color:#a2a2a8;margin-bottom:20px;padding-left:40px;">
				<a class="timeLine" @click='chartNow = 1' style="text-decoration:none;">分时图</a>
				<span style="color:#a2a2a8;"> | </span>
				<a @click='chartNow = 2' class="kLine" style="text-decoration:none;">日K</a>
				<span style="color:#a2a2a8;"> | </span>
				<a @click='chartNow = 3' class="kLine" style="text-decoration:none;">周K</a>
				<span style="color:#a2a2a8;"> | </span>
				<a @click='chartNow = 4' class="kLine" style="text-decoration:none;">月K</a>
			</div>
			<TimeLine :stockId='stock_choose' v-show='chartNow==1'></TimeLine>
			<k-line :stockId='stock_choose' :kdata='4' v-show='chartNow==2'></k-line>
			<k-line :stockId='stock_choose' :kdata='5' v-show='chartNow==3'></k-line>
			<k-line :stockId='stock_choose' :kdata='6' v-show='chartNow==4'></k-line>
			<!-- <k-line :stockId='stock_choose' :kdata='6' v-else></k-line> -->
		</div>
	</div>
	<!-- ****弹窗**** -->
	<el-dialog title='编辑股数' width='30%' :close-on-click-modal='false' :close-on-press-escape='false' type="text" :show-close='false' :visible.sync="dialogVisible">
		<el-form class="demo-form-inline" label-width="100px">
			<el-form-item label="股数:">
				<el-input v-model="stock_num_ready" placeholder="请输入购入股数"></el-input>
				<div style="font-size:12px;">提示：每次增减股数必须是100的整数</div>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="handleCancel()">取消</el-button>
				<el-button type="primary" @click="handleEditStockNum()">确认</el-button>
			</el-form-item>
		</el-form>
	</el-dialog>
	<el-dialog title="提交创建" :visible.sync="dialogCreate" width="30%">
		<span>您是否确定创建策略</span>
		<b>{{stock_choose_name}}</b>
		<span>（</span>
		<span>{{stock_choose_no}}</span>
		<span>）</span>
		<span slot="footer" class="dialog-footer">
			<el-button @click="dialogCreate = false">取 消</el-button>
			<el-button type="primary" @click="handleCreate()">确 定</el-button>
			</span>
	</el-dialog>
	<el-dialog title="策略已成功提交" :close-on-click-modal='false' :close-on-press-escape='false' :visible.sync="dialogLate" width="30%">
		<b>{{stock_choose_name}}</b>
		<span>（</span>
		<span>{{stock_choose}}</span>
		<span>）</span>
		<span style="margin-left:200px;">{{this.stock_num}}股</span>
		<span slot="footer" class="dialog-footer">
				<el-button @click="goT1()">查看其他股票</el-button>
				<el-button type="primary" @click="goContinue()">继续购买</el-button>
			</span>
	</el-dialog>
	<!-- ****弹窗**** -->
</div>
</template>
<script>
import KLine from "./chart/KLine"
import TimeLine from "./chart/TimeLine"
import {
	Loading
} from 'element-ui'
import {
	mapState
} from 'vuex'
export default {
	data() {
		return {
			state: false, // 判断用户是否手动修改止盈止损
			canCreate: false, // 判断能否创建策略
			canCreate_txt: '非交易时间', // 创建策略按钮显示文本
			timerA: null, // 定时器
			dialogCreate: false, // 创建时显示弹窗
			dialogLate: false, // 创建后显示弹窗
			chartNow: 1, // 当前显示图表
			stock_list: [], // 股票列表数据
			stock_choose: '', // 已选择的股票ID
			stock_choose_no: 0, // 股票NO
			stock_choose_ready: '', // 待选择股票
			stock_choose_name: '', // 已选择的股票Name
			assurance_amount: 0, // 保证金
			assurance_amount_show: '', // 保证金
			stock_choose_info: { // 已选择的股票详情
				leverage_ratio: 1, //配资比例
				opening_price: '', // 开盘价
				closed_yesterday_price: '', // 昨日闭盘价
				raising_limit: '', //涨停价
				limit_down: '', //跌停价
				current_price: '', //当前价格
				quote_change: '', //涨跌幅
				margin_is_the_highest_proportion: '', //保证金止盈最高比例
				margin_stop_loss_highest_proportion: '', //保证金止损最低比例
				auto_deferred_time: '', //自动递延时间
				auto_closing_time: '', //自动平仓时间
				deferred_fee_ratio: '', // 递延费比例
				is_trading_day: false // 是否交易日
			},
			quotation: [], // 实时行情
			checked: true, // checkbox
			stock_num: 0, // 买入股数
			stock_num_ready: 0, // 用户编辑买入股数
			stock_value: 0, // 买入股价
			stock_num_txt: '', // 买入现实文本num
			stock_value_txt: '', // 买入现实文本value
			dialogVisible: false, // 控制弹窗
			showCount: false, // 控制止盈止损修改
			stop_profit_ratio: 0, // 止盈价
			stop_loss_ratio: 0, // 止损价
			stop_loss_ratio_default: 0, // 默认止损价
			stop_profit_ratio_default: 0, // 默认止盈价格
			auto_hold: true, //是否自动递延
			stop_profit_prop: 0, // 修改股票止盈价格之后的保证金的止盈比例
			stop_loss_prop: 0, // 修改股票止盈价格之后的保证金的止盈比例
			hold_price: 0, // 递延费
			loadingInstance: {}, // loading控件
			stock_num_highest: 0 // 可购买最高股数
		}
	},
	watch: {
		// 监听勾选框
		checked: {
			handler: function(val, oldval) {
				this.judgeCreate()
			},
			deep: true
		},
		// 监听显示信用金
		assurance_amount_show: {
			handler: function(val, oldval) {
				if (!isNaN(val)) {
					if (Number(this.assurance_amount_show) % 1000 == 0) {
						var x = this.assurance_amount_show
						this.assurance_amount = x
						this.state = false
						this.stock_num_highest = parseInt((Number(this.assurance_amount) * Number(this.stock_choose_info.leverage_ratio)) / Number(this.stock_choose_info.raising_limit) / 100) * 100
						this.handleStockNum(x / 1000)
					}
				} else {
					this.assurance_amount_show = oldval
				}
			},
			deep: true
		},
		// 监听价格变动
		quotation: {
			handler: function(val, oldval) {
				if (!this.state) {
					console.log('监听价格')
					this.handleStockNum()
				}
			},
			deep: true
		},
		// 监控股数修改
		stock_num: {
			handler: function(val, oldval) {
				// 设置弹窗股数
				this.stock_num_ready = this.stock_num
				// 计算市值
				if (this.quotation[0] == '--') {
					this.stock_value = parseInt(this.stock_num * 0 * 100) / 100
				} else {
					this.stock_value = parseInt((this.stock_num * this.quotation[0]) * 100) / 100
				}
				// 设置市值显示文档
				this.stock_value_txt = this.stock_value + '元'
				// 设置股数显示文档
				this.stock_num_txt = this.stock_num + '股'
				if (this.quotation[0] == '--') {
					// 计算默认止盈价格
					this.stop_profit_ratio = 0
					// 计算默认止损价格
					this.stop_loss_ratio = 0
				} else {
					// 计算默认止盈价格
					this.stop_profit_ratio = (Number(this.quotation[0]) + Number((this.assurance_amount * this.stock_choose_info.margin_is_the_highest_proportion) / this.stock_num)).toFixed(2)
					this.stop_profit_ratio_default = this.stop_profit_ratio
					// 计算默认止损价格
					this.stop_loss_ratio_default = (Number(this.quotation[0]) - Number((this.assurance_amount * this.stock_choose_info.margin_stop_loss_highest_proportion) / this.stock_num)).toFixed(2)
					this.stop_loss_ratio = this.stop_loss_ratio_default
				}
			},
			deep: true
		},
		// 监控止盈价格
		stop_profit_ratio: {
			handler: function(val, oldval) {
				if (this.stop_profit_ratio == this.stop_profit_ratio_default) {
					this.stop_profit_prop = 1
					this.stop_profit_prop_show = 100
				} else {
					this.stop_profit_prop = (Number(this.stop_profit_ratio) - Number(this.quotation[0])) * Number(this.stock_num) / Number(this.assurance_amount)
					this.stop_profit_prop_show = (this.stop_profit_prop * 100).toFixed(2)
					this.stop_profit_prop = this.stop_profit_prop.toFixed(2)
					this.state = true
				}
			},
			deep: true
		},
		// 监控止损价格
		stop_loss_ratio: {
			handler: function(val, oldval) {
				if (this.stop_loss_ratio == this.stop_loss_ratio_default) {
					this.stop_loss_prop = 0.7
					this.stop_loss_prop_show = 70
				} else {
					this.stop_loss_prop = (Number(this.quotation[0]) - Number(this.stop_loss_ratio)) * Number(this.stock_num) / Number(this.assurance_amount)
					this.stop_loss_prop_show = (this.stop_loss_prop * 100).toFixed(2)
					this.state = true
				}
			},
			deep: true
		}
	},
	components: {
		KLine,
		TimeLine
	},
	created() {
		// 开启loading
		var body = document.getElementById('tbody')
		this.loadingInstance = Loading.service({
			body: true,
			fullscreen: true,
			target: body,
			text: '正在努力加载 ...'
		})
		// 获取localstorage 存储的已选股票信息
		this.stock_choose = localStorage.getItem('choosen_id')
		this.stock_choose_name = localStorage.getItem('choosen_name')
		this.stock_choose_no = localStorage.getItem('choosen_no')
		this.getChoosenInfo(this.stock_choose)
	},
	mounted() {
		this.timerA = setInterval(() => {
			this.getSelectQuotation(this.stock_choose)
		}, 2000)
	},
	beforeDestroy() {
		clearInterval(this.timerA)
	},
	methods: {
		// 判断可否创建时间
		judgeCreate() {
			this.$axios.get(this.$api.other.server_time).then(res => {}).catch(err => {
				console.log('请求错误：/api/server/time');
			})
			if (this.isTime != true) {
				this.canCreate = false
				this.canCreate_txt = '非交易时间'
			} else if (this.isTime == true && this.checked == true) {
				this.canCreate = true
				this.canCreate_txt = '创建策略'
			} else {
				this.canCreate = false
				this.canCreate_txt = '创建策略'
			}
		},
		// 获取服务器时间
		getTime() {
			this.$axios.get(this.$api.other.server_time).then(res => {
				var timeNow = res.data.data
				var hour = new Date(timeNow).getHours()
				var min = new Date(timeNow).getMinutes()
				var isDay = false
				if (this.stock_choose_info.is_trading_day) {
					isDay = true
				}
				if (hour >= 13 && hour < 15 && isDay == true) {
					this.isTime = true
				} else if (hour == 10 && isDay == true) {
					this.isTime = true
				} else if (hour == 9 && min > 30 && isDay == true) {
					this.isTime = true
				} else if (hour == 11 && min < 30 && isDay == true) {
					this.isTime = true
				} else {
					this.isTime = false
				}
				this.judgeCreate()
			}).catch(err => {
				console.log('请求错误：/api/server/time');
			})
		},
		// 创建策略
		handleCreate() {
			var para = {
				id: this.stock_choose,
				delegate_quantity: this.stock_num,
				assurance_amount: this.assurance_amount,
				trade_fee: 0,
				stop_profit_ratio: this.stop_profit_prop,
				stop_loss_ratio: this.stop_loss_prop,
				auto_hold: true
			}
			this.$axios.post(this.$api.stock.policy_add, para).then(res => {
				console.log(res)
				this.dialogLate = true
				this.$Message.success('创建策略成功')
				this.getUserInfo()
			}).catch(error => {
				console.log('请求错误：/api/policy/add')
			}).then(() => {
				this.dialogCreate = false
			})
		},
		// 创建策略前判断
		createdBefore() {
			if (!this.$store.state.AuthUser.authenticated || !this.$jwtToken.getToken()) {
				this.$Message.error('请先登录')
				this.$router.push({
					path: '/login'
				})
			} else {
				this.dialogCreate = true
			}
		},
		editStockNum() {
			this.dialogVisible = true
			this.state = true
		},
		// 搜索回调
		querySearchAsync(queryString, cb) {
			this.stock_list = []
			var that = this
			var date = new Date().getTime()
			$.ajax({
				url: "http://suggest3.sinajs.cn/suggest/type=111&key=" + queryString + "&name=suggestdata_" + date,
				dataType: "script",
				cache: "false",
				type: "GET",
				success: function(a) {
					var name = 'suggestdata_' + date
					var x = window[name].split(';')
					for (var i = 0; i < x.length; i++) {
						var y = x[i].split(',')
						that.stock_list.push({
							stock_abb: y[0],
							stock_no: y[2],
							stock_show: y[3],
							stock_name: y[4]
						})
					}
					if (i == x.length) {
						cb(that.stock_list);
					}
				}
			});
		},
		// 获取股票详情
		getChoosenInfo(id) {
			this.$axios.post(this.$api.stock.purchase, {
				id: id
			}).then(res => {
				this.stock_choose_info = res.data.data
				// 获取初始止盈比例
				this.stop_profit_prop = parseInt(res.data.data.margin_is_the_highest_proportion * 100) / 100
				// 获取初始止损比例
				this.stop_loss_prop = parseInt(res.data.data.margin_stop_loss_highest_proportion * 100) / 100
				this.stop_profit_prop_show = this.stop_profit_prop * 100
				this.stop_loss_prop_show = this.stop_loss_prop * 100
				// 获取实时行情
				this.getTime()
				this.getSelectQuotation(id)
			}).catch(err => {
				console.log('请求错误：/api/purchase')
			})
		},
		// 获取股票实时行情
		getSelectQuotation(id) {
			this.$axios.post(this.$api.stock.quotation, {
				id: id
			}).then(res => {
				this.quotation = res.data.data.quotation.split(',')
				if (Number(this.quotation[5]) > 100000000) {
					this.quotation[5] = parseInt((this.quotation[5] / 100000000) * 100) / 100 + '亿元'
				} else if (Number(this.quotation[5]) > 10000) {
					this.quotation[5] = parseInt((this.quotation[5] / 10000) * 100) / 100 + '万元'
				}
				if (Number(this.quotation[6]) > 100000000) {
					this.quotation[6] = parseInt((this.quotation[6] / 100000000) * 100) / 100 + '亿元'
				} else if (Number(this.quotation[6]) > 10000) {
					this.quotation[6] = parseInt((this.quotation[6] / 10000) * 100) / 100 + '万元'
				}
				for (let i = 7; i < 17; i++) {
					this.quotation[i] = ((this.quotation[i] * 100) / 100).toFixed(2)
				}
				if (this.quotation[0] == 0) {
					this.quotation[0] = '--'
				}
				// 关闭loading
				this.$nextTick(() => {
					this.loadingInstance.close();
				})
			}).catch(err => {
				console.log('请求错误：/api/quotation');
			})
		},
		//计算股数
		handleStockNum(num) {
			this.changeNum = 1
			// 控制显示
			this.showCount = true
			num = num * 1000
			// 赋值投入金
			this.assurance_amount = Number(num)
			this.assurance_amount_show = Number(num)
			this.stock_num_highest = parseInt((Number(this.assurance_amount) * Number(this.stock_choose_info.leverage_ratio)) / Number(this.stock_choose_info.raising_limit) / 100) * 100
			// 计算股数
			if (this.quotation[0] == '--') {
				this.stock_num = 0
			} else {
				this.stock_num = parseInt((Number(this.assurance_amount) * Number(this.stock_choose_info.leverage_ratio)) / Number(this.stock_choose_info.raising_limit) / 100) * 100
			}
			// 计算递延费
			this.hold_price = parseInt((Number(this.assurance_amount) * Number(this.stock_choose_info.leverage_ratio)) * Number(this.stock_choose_info.deferred_fee_ratio) * 100) / 100
		},
		//提交弹窗表单
		handleEditStockNum() {
			if (Number(this.stock_num_ready) % 100 != 0) {
				this.$Message.error('请输入正确的股数（每次增减股数必须是100的整数）')
			} else if (Number(this.stock_num_ready) > Number(this.stock_num)) {
				this.$Message.error('投入信用金不足')
			} else {
				if (this.stock_num_ready == this.stock_num) {
					this.state = false
				} else {
					this.state = true
				}
				let num = 0
				num = this.stock_num_ready
				// 设置股数
				this.stock_num = num
				// 设置市值
				this.stock_value = num
				// 设置市值显示文档
				this.stock_value_txt = this.stock_value + ''
				// 隐藏弹窗
				this.dialogVisible = false
			}
		},
		//取消修改
		handleCancel() {
			this.stock_num_ready = this.stock_num
			this.state = false
			this.dialogVisible = false
		},
		// 修改自动递延
		handleAutoHold() {
			if (this.auto_hold == false) {
				this.auto_hold = true
			} else {
				this.auto_hold = false
			}
		},
		// 搜索股票
		handleSelect(item) {
			var header = item.stock_show.substring(0, 2)
			if (header == 'sz') {
				var para = '0_' + item.stock_no
				var paraNo = 'sz' + item.stock_no
			} else {
				var para = '1_' + item.stock_no
				var paraNo = 'sh' + item.stock_no
			}
			this.$axios.post(this.$api.stock.get_stock_id, {
				stock_market_and_no: para
			}).then(res => {
				localStorage.setItem('choosen_id', res.data.data.stock_id)
				localStorage.setItem('choosen_name', res.data.data.stock_name)
				localStorage.setItem('choosen_no', paraNo)
				// this.$router.push({path: '/trade/buy/detail'})
				location.reload([false])
			}).catch(err => {
				console.log(err);
			})
		},
		// 返回t1页面
		goT1() {
			this.dialogLate = false
			this.$router.push({
				path: '/trade/buy/t1'
			})
		},
		// 相关协议
		goProtocol() {
			this.$router.push({
				path: '/center/protocol'
			})
		},
		//  策略创建后
		goContinue() {
			this.dialogLate = false
			this.$router.push({
				path: '/trade/buy/detail'
			})
		},
		// 判断修改数值
		judgeNumber(count) {
			if (count == 1) {
				// '止盈价不能低于当前价格'
				if (this.stop_profit_ratio < this.quotation[0]) {
					this.$Message.error('止盈价不能低于当前价格')
					this.stop_profit_ratio = this.stop_profit_ratio_default
				}
				if (isNaN(this.stop_loss_ratio)) {
					this.$Message.error('请输入正确格式')
				}
			}
			if (count == 2) {
				// '止损价不能高于当前价格'
				if (this.stop_loss_ratio > this.quotation[0]) {
					this.$Message.error('止损价不能高于当前价格')
					this.stop_loss_ratio = this.stop_loss_ratio_default
				}
				// '止损价不能低于最小止损'
				if (this.stop_loss_ratio < this.stock_choose_info.margin_stop_loss_highest_proportion) {
					this.$Message.error('止损价不能低于最小止损')
					this.stop_loss_ratio = this.stop_loss_ratio_default
				}
				// 请输入正确格式
				if (isNaN(this.stop_loss_ratio)) {
					this.$Message.error('请输入正确格式')
				}
			}
		},
		// 判断保证金输入
		handldDeal() {
			if (Number(this.assurance_amount_show) < 1000) {
				this.assurance_amount_show = 1000
				this.$Message.error('投入金最少为1000')
			} else if (this.assurance_amount_show % 1000 != 0) {
				this.assurance_amount_show = parseInt(this.assurance_amount_show / 1000) * 1000
			}
		},
		getUserInfo() {
			this.$store.dispatch('setAuthUser').then(response => {
				if (this.$store.state.AuthUser.loginIsFail) {
					this.loadFail = true;
				}
			})
		}
	},
	computed: {
		AvailableAmount() {
			return this.$store.state.AuthUser.availableAmount
		}
	}
}
</script>
<style scoped>
.charActive {
	color: #fc5146;
}

.right a {
	text-decoration: none;
	cursor: pointer;
}

.right .active {
	color: #fc5146;
}

.searchInput {
	width: 400px;
}

.trade-row {
	color: #222;
	font-size: 14px;
}

.trade-row .trade-col-left {
	float: left;
	color: #222;
	text-align: right;
}

.trade-row .trade-col-right {
	float: left;
	width: 389px;
}

.deposit-layout {
	overflow: hidden;
	position: relative;
}

.deposit-layout .deposite-input-layout {
	overflow: hidden;
	width: 190px;
	height: 30px;
	line-height: 30px;
	border: 1px solid #999;
	border-radius: 6px;
	color: #999;
	font-size: 14px;
	margin-left: 60px;
}

.deposit-layout .deposite-input-layout>input {
	background: transparent;
	width: 165px;
	height: 30px;
	line-height: 30px;
	text-align: left;
	float: left;
	padding: 0 10px;
	border-radius: 6px;
	border: none;
}

.input-container {
	float: left;
	margin-right: 8px;
}

.market-value {
	float: left;
	height: 30px;
}

.market-value span {
	display: inline-block;
	height: 30px;
	line-height: 30px;
}

.quntity-modify-layout .input-container>input {
	width: 100px;
	height: 30px;
	border: 1px solid #eee;
	text-align: center;
	line-height: 30px;
	font-size: 16px;
	color: #fc5146;
	overflow: hidden;
	margin-right: 20px;
	border-radius: 4px;
}

.buy-border {
	height: 1px;
	border-bottom: 1px solid #ddd;
	margin: 20px 20px 0 26px;
}

.trade-row .auto-defer-btn {
	float: left;
	margin-left: 46px;
	cursor: pointer;
	color: #2dbaff;
}

.stock-layout {
	padding-left: 10px;
}

.stock-layout .stock-name {
	font-size: 24px;
	color: #333;
}

.stock-layout .stock-name span {
	font-size: 18px;
}

.stock-layout .stock-value.down {
	color: #00a104;
}

.stock-layout .stock-value {
	font-size: 18px;
	color: #fc5146;
	margin-top: 4px;
}

.stock-layout .stock-value .value1 {
	font-size: 48px;
}

.stock-layout .stock-value span {
	float: left;
	display: block;
}

.stock-layout .stock-value .arrow-pf {
	display: block;
	float: left;
	margin-right: 20px;
	font-size: 48px;
	width: 40px;
}

@font-face {
	font-family: "iconfont";
	src: url('//at.alicdn.com/t/font_xvhxkjohpmf8byb9.eot?t=1483005401790');
	/* IE9*/
	src: url('//at.alicdn.com/t/font_xvhxkjohpmf8byb9.eot?t=1483005401790#iefix') format('embedded-opentype'), /* IE6-IE8 */
	url('//at.alicdn.com/t/font_xvhxkjohpmf8byb9.woff?t=1483005401790') format('woff'), /* chrome, firefox */
	url('//at.alicdn.com/t/font_xvhxkjohpmf8byb9.ttf?t=1483005401790') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	url('//at.alicdn.com/t/font_xvhxkjohpmf8byb9.svg?t=1483005401790#iconfont') format('svg');
	/* iOS 4.1- */
}

.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-sousuo:before {
	content: "\e600";
}

.icon-edit:before {
	content: "\e606";
}

.icon-weibo:before {
	content: "\e601";
}

.icon-exchange:before {
	content: "\e607";
}

.icon-weixin:before {
	content: "\e602";
}

.icon-telephone:before {
	content: "\e603";
}

.icon-position:before {
	content: "\e604";
}

.icon-selected:before {
	content: "\e608";
}

.icon-redpacket:before {
	content: "\e609";
}

.icon-ie:before {
	content: "\e605";
}

.icon-love:before {
	content: "\e614";
}

.icon-warning:before {
	content: "\e60a";
}

.icon-trophy:before {
	content: "\e60b";
}

.icon-stock-market:before {
	content: "\e60c";
}

.icon-return:before {
	content: "\e60d";
}

.icon-triangle-up:before {
	content: "\e60e";
}

.icon-triangle-down:before {
	content: "\e60f";
}

.icon-triangle-right:before {
	content: "\e610";
}

.icon-triangle-left:before {
	content: "\e611";
}

.icon-arrow-loss:before {
	content: "\e612";
}

.icon-arrow-profit:before {
	content: "\e613";
}

.icon-down:before {
	content: "\e615";
}

.icon-up:before {
	content: "\e616";
}


.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-arrow-loss:before {
	content: "\e612";
}

.icon-arrow-profit:before {
	content: "\e613";
}

.stock-layout .stock-value .num {
	margin-top: 34px;
	margin-right: 20px;
}

.stock-layout .stock-items-row {
	position: relative;
	margin-top: 10px;
}

.stock-layout .stock-items-row .d-row {
	float: left;
	display: block;
	width: 100px;
}

.stock-layout .stock-items-row .d-row.sell-buy {
	width: auto;
	cursor: pointer;
	position: relative;
}

.stock-layout .stock-items-row .d-row .name-value span.name {
	font-size: 14px;
	color: #989898;
}

.stock-layout .stock-items-row .d-row .name-value span {
	display: block;
	line-height: 26px;
}

.stock-layout .stock-items-row .d-row .name-value span.value {
	font-size: 16px;
	color: #333;
}

.stock-layout .stock-items-row .d-row.sell-buy .buy-sell-detail {
	opacity: 1;
	position: absolute;
	left: 40px;
	width: 170px;
	top: -74px;
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
}

.stock-layout .stock-items-row .d-row .buy-sell-row {
	font-size: 14px;
	color: #323232;
	line-height: 26px;
	overflow: hidden;
}

.stock-layout .stock-items-row .d-row .buy-sell-row .sell-value.win {
	margin: 0 20px;
}

.stock-layout .stock-items-row .d-row .buy-sell-row .buy-value.win {
	margin: 0 20px;
}

.stock-layout .stock-items-row .d-row .buy-sell-row .buy-value {
	color: #00a104;
}

.stock-layout .stock-items-row .d-row .buy-sell-row .sell-value {
	color: #fc5146;
}

.stock-layout .stock-items-row .d-row .buy-sell-row .center-value.win {
	margin: 0 20px;
}

.stock-layout .stock-items-row .d-row .buy-sell-row .center-value {
	color: #666;
}

.addr {
	display: inline-block;
	width: 33%;
	text-align: center;
}
</style>
