<!-- 模拟策略 -->
<template>
<div style="position: relative;">
	<header-nav></header-nav>
	<div class="sim-banner">
	</div>
	<div class="sim-main clear" style="padding: 20px 0;">
		<div class="container">
			<div class="sim-main-top clear">
				<!--<div class="sim-main-top-left left">-->
				<div>
					<div class="sim-header-desc">
						<span>交易规则</span>
						<!--<div class="head-img-button">更多详情 &gt;&gt;</div>-->
					</div>
					<div class="sim-header-content">
						<p>1.交易前请仔细阅读相关服务协议的具体规则；全部行情与沪深交易所实盘数据一致，交易品种支持沪深上市的A股</p>
						<p>不支持基金、权证、ST、新股申购、及不设涨跌停限制的股票（如增发）</p>
						<p>2.交易制度：实行T+1，即当天买入的股票不能在当天卖出</p>
						<p>3.交易时间：9:30-11:30；13:00-15:00</p>
						<p>4.江南策略系统是一套交易撮合系统。发送买入策略后，按市场实际交易情况承接，成交价格为实际成交价格</p>
						<p>5.江南策略员工及家属参赛不计入比赛排名</p>
					</div>
				</div>
				<!-- <div class="sim-main-top-right right">
					<div class="sim-header-desc">
						<span>我的比赛</span>
					</div>
					<div class="sim-header-info">
						<div class="info">
							<div style="font-size: 18px; color: rgb(83, 83, 83); margin-top: 50px;">
								<span>已有</span>
								<span style="font-size:24px;">1545</span>
								<span>人参赛</span>
							</div>
							<a class="btn-add-sim" href="//user.hclzx.com/login.html?url=http://pb.hclzx.com/sim/">
                                <i class="iconfont icon-edit" style="font-size:20px;margin-right:5px;"></i>
                                <span>报名参赛</span>
                            </a>
						</div>
					</div>
				</div> -->
			</div>
			<!--<div class="sim-main-bottom">
					<div class="sim-content-bar">收益排行榜</div>
					<el-tabs type="border-card">
					  <el-tab-pane label="月收益排行榜">
							<el-table
							 :data="tableData"
							 style="width: 100%">
							 <el-table-column
								 prop="order"
								 label="排序"
								 width="165">
							 </el-table-column>
							 <el-table-column
								 prop="name"
								 label="昵称"
								 width="165">
							 </el-table-column>
							 <el-table-column
								 prop="money"
								 label="总资产"
								 width="165">
							 </el-table-column>
							 <el-table-column
								 prop="rate"
								 label="胜率"
								 width="165">
							 </el-table-column>
							 <el-table-column
								 prop="monthRate"
								 label="月收益率"
								 width="169">
							 </el-table-column>
							 <el-table-column
								 prop="tradeNumber"
								 label="交易次数"
								 width="169">
							 </el-table-column>
							 <el-table-column
   							 label="查看持仓"
								 width="168">
								 <template slot-scope="scope">
					        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					      </template>
							 </el-table-column>
						 </el-table>
						</el-tab-pane>
					  <el-tab-pane label="周收益排行榜">周收益排行榜</el-tab-pane>
					  <el-tab-pane label="日收益排行榜">日收益排行榜</el-tab-pane>
					  <el-tab-pane label="总收益排行榜">总收益排行榜</el-tab-pane>
					  <el-tab-pane label="月冠军榜">月冠军榜</el-tab-pane>
					  <el-tab-pane label="周冠军榜">周冠军榜</el-tab-pane>
					  <el-tab-pane label="日冠军榜">日冠军榜</el-tab-pane>
					</el-tabs>
					<div class="block" style="float:right;margin-top:20px;background-color:#F6F8FA!important;">
					  <el-pagination
					    layout="prev, pager, next"
					    :total="200">
					  </el-pagination>
					</div>

			</div>-->
		</div>
		<foot-nav></foot-nav>
	</div>
</div>
</template>
<script>
import FootNav from './common/FootNav'
import HeaderNav from './common/HeaderNav'

export default {
	data() {
		return {
			seen: true,
			dialogSeen: false,
			tableData: [{
				order: '1',
				name: '138****8931',
				money: '23.92万',
				rate: '100%',
				monthRate: '160.22%',
				tradeNumber: '27次'
			}, {
				order: '2',
				name: '默默的爬坡',
				money: '22.88万',
				rate: '100%',
				monthRate: '160.22%',
				tradeNumber: '27次'
			}, {
				order: '3',
				name: '180****9709',
				money: '22.09万',
				rate: '100%',
				monthRate: '160.22%',
				tradeNumber: '27次'
			}, {
				order: '4',
				name: '157****9662',
				money: '21.22万',
				rate: '100%',
				monthRate: '160.22%',
				tradeNumber: '27次'
			}, {
				order: '5',
				name: '157****9662',
				money: '21.20万',
				rate: '100%',
				monthRate: '160.22%',
				tradeNumber: '27次'
			}, ]
		}
	},
	components: {
		FootNav,
		HeaderNav
	},
	methods: {
		handleClick(row) {
			console.log(row);
		}
	}
}
</script>
<style>
.el-dialog,
.el-pager li {
	background: #F6F8FA !important;
}

.el-pagination button.disabled {
	background: #F6F8FA !important;
}

.btn-next {
	background: #F6F8FA !important;
}

.btn-prev {
	background: #F6F8FA !important;
}

.el-tabs__content {
	padding: 0px !important;
	text-align: center;
}

.el-table__header th {
	text-align: center !important;
}

.sim-banner {
	height: 402px;
	background-position: top center;
	background-repeat: no-repeat;
	background: url(../assets/img/sim.png);
}

.sim-main-top-left {
	width: 840px;
	height: 254px;
	display: inline-block;
	border: 1px solid #e8e8e8;
}

.sim-header-desc {
	height: 54px;
	font-size: 18px;
	color: #363636;
	border-bottom: 1px solid #e8e8e8;
	overflow: hidden;
	position: relative;
}

.sim-header-desc span {
	display: block;
	height: 32px;
	margin-top: 11px;
	border-left: 5px solid #ff712a;
	padding-left: 25px;
	line-height: 32px;
}

.sim-header-desc .head-img-button {
	position: absolute;
	width: 106px;
	bottom: 11px;
	right: 10px;
	cursor: pointer;
	font-size: 18px;
	color: #2dbaff;
}

.sim-header-content {
	padding: 0 25px;
}

.sim-header-content p {
	font-size: 14px;
	line-height: 30px;
	color: #6e6e6e;
}

.sim-main-top-right {
	width: 300px;
	height: 254px;
	display: inline-block;
	border: 1px solid #e8e8e8;
	float: right;
	position: relative;
}

.sim-main-top-right .sim-header-info {
	position: relative;
}

.sim-main-top-right .info {
	margin-left: 70px;
	overflow: hidden;
}

.sim-main-top-right .info .btn-add-sim {
	display: block;
	width: 160px;
	height: 44px;
	line-height: 44px;
	background: #ff712a;
	border-radius: 6px;
	cursor: pointer;
	font-size: 18px;
	color: #fff;
	text-align: center;
	margin-top: 20px;
}

.sim-content-bar {
	width: 100%;
	height: 36px;
	line-height: 36px;
	font-size: 18px;
	color: #363636;
}

.cell {
	padding: 0px !important;
}

.el-tabs__item {
	width: 168px !important;
	text-align: center;
	font-size: 16px;
	height: 60px !important;
	line-height: 60px !important;
}

.el-table_1_column_1 {
	padding: 0 20px !important;

}
</style>
