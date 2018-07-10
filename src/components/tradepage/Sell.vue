<!-- 点卖列表 -->
<template>
<div>
	<div class="no-data-his" v-if="!haveData">
		<span class="">暂时没有数据</span>
		<a class="link" @click='goT1()'>去创建策略</a>
	</div>
	<div class="" v-else style="overflow:scroll; width:100%;height:868px;">
		<sellItem v-for='item in dataList' :key='item.id' class="" :data='item' :fee_rate='fee_rate'></sellItem>
	</div>
</div>
</template>
<script>
import {
	Loading
} from 'element-ui'
import sellItem from "../common/sellItem"
export default {
	components: {
		sellItem
	},
	data() {
		return {
			haveData: true,
			pageNow: 1,
			dataList: [],
			timer: null,
			loadingInstance: null, // loading控件
			fee_rate: 0.7 // 止损比例
		}
	},
	created() {
		// loading控件
		var body = document.getElementById('tbody')
		this.loadingInstance = Loading.service({
			body: true,
			fullscreen: true,
			target: body,
			text: '正在努力加载 ...'
		})
		// 获取数据
		this.getDataList()
	},
	mounted() {
		this.timer = setInterval(() => {
			this.getDataList()
		}, 5000)
	},
	methods: {
		getDataList() {
			this.$axios.get(this.$api.stock.point_to_sell_list).then((res) => {
				this.fee_rate = res.data.fee_rate
				this.dataList = res.data.data
				if (this.dataList.length == 0) {
					this.haveData = false
				} else {
					for (let i = 0; i < this.dataList.length; i++) {
						if (Number(this.dataList[i].trade_buy_price) == 0) {
							this.dataList[i].trade_buy_price = '--'
						}
					}
				}
				this.$nextTick(() => {
					this.loadingInstance.close();
				})
			}).catch((err) => {
				console.log('错误: 接口settlement_list')
				this.$nextTick(() => {
					this.loadingInstance.close();
				})
			})
		},
		goT1() {
			this.$router.push({
				path: '/trade/buy/t1'
			})
		}
	},
	beforeDestroy() {
		clearInterval(this.timer)
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

.link {
	font-size: 14px;
	color: #f4282e;
}
</style>
