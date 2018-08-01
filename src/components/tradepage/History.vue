<!-- 历史策略 -->
<template>
<div id='tbody'>
	<div v-if='!haveData' class="no-data-his">
		<span>暂时没有数据</span>
		<a class="link" @click='goT1()'>去创建策略</a>
	</div>
	<div class="" v-else style="overflow:scroll;height:868px;">
		<div v-for='item in dataList' class="have-data">
			<strategyNow :data='item'></strategyNow>
		</div>
	</div>
</div>
</template>
<script>
import strategyNow from "../common/historyItem"
import {
	Loading
} from 'element-ui'
export default {
	data() {
		return {
			haveData: true,
			dataList: [],
			pageNow: 1,
			limit: 10,
			loadingInstance: {}, // loading控件
		}
	},
	components: {
		strategyNow
	},
	created() {
		var body = document.getElementById('tbody')
		this.loadingInstance = Loading.service({
			body: true,
			fullscreen: true,
			target: body,
			text: '正在努力加载 ...'
		})
		this.getDataList()
	},
	mounted() {},
	methods: {
		getDataList() {
			var para = {
				per_page: this.limit,
				page: this.pageNow
			}
			this.$axios.post(this.$api.stock.settlement_list, para).then((res) => {
				this.dataList = res.data.data
				for (let i = 0; i < this.dataList.length; i++) {
					// 格式化策略状态
					if (this.dataList[i].policy_status == 4) {
						this.dataList[i].policy_status = '平台平仓委托中'
					} else if (this.dataList[i].policy_status == 5) {
						this.dataList[i].policy_status = '系统平仓委托中'
					} else if (this.dataList[i].policy_status == 6) {
						this.dataList[i].policy_status = '平仓委托成功'
					} else if (this.dataList[i].policy_status == 7) {
						this.dataList[i].policy_status = '结算中'
					} else if (this.dataList[i].policy_status == 8) {
						this.dataList[i].policy_status = '已结算'
					} else {
						this.dataList[i].policy_status = '未知'
					}
					// 格式化卖出方式
					if (this.dataList[i].trade_sell_type == 0) {
						this.dataList[i].trade_sell_type = '主动平仓'
					} else if (this.dataList[i].trade_sell_type == 1) {
						this.dataList[i].trade_sell_type = '止盈平仓'
					} else if (this.dataList[i].trade_sell_type == 2) {
						this.dataList[i].trade_sell_type = '止损平仓'
					} else if (this.dataList[i].trade_sell_type == 3) {
						this.dataList[i].trade_sell_type = '自动平仓'
					} else {
						this.dataList[i].trade_sell_type = '未知'
					}
				}
				if (this.dataList.length == 0) {
					this.haveData = false
				}
				// 关闭loading
				this.$nextTick(() => {
					this.loadingInstance.close();
				})
			}).catch((err) => {
				console.log('错误: 接口settlement_list')
				// 关闭loading
				this.$nextTick(() => {
					this.loadingInstance.close();
				})
			}).then(() => {})
		},
		goT1() {
			this.$router.push({
				path: '/trade/buy/t1'
			})
		}
	}
}
</script>
<style scoped>
.no-data-his {
	font-size: 20px;
	text-align: center;
	line-height: 91px;
	color: #97979f;
	background: #fff !important;
	height: 91px;
	padding: 0;
	border: 1px solid #eee;
}

.have-data {
	font-size: 16px;
	color: #97979f;
	background: #fff !important;
	height: 80px;
	padding: 0;
	border: 1px solid #eee;
}

.link {
	font-size: 14px;
	color: #f4282e;
}
</style>
