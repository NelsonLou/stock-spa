<!-- 最近获利组件 -->
<template>
<div class="recently-box">
	<div class="recently-title">
		<h3>{{title}}</h3></div>
	<div class="recently-moveBox">
		<div class="noData" v-show='listData.length==0'>
			暂无数据
		</div>
		<div id='recently-move' class="recently-move" v-show='listData.length!=0'>
			<ul id='listA'>
				<li v-for='item in listData'>
					<div class="recently-moveBoxItem">
						<span>{{item.nickname}}</span>
						<span style="color:#8b8b8b;">{{item.created_at}}</span>
					</div>
					<div class="recently-moveBoxItem">
						<span style="color:#bb7708;">{{item.stock_name}}</span>
						<span style="color:#8b8b8b;">{{item.trade_buy_quantity}}</span>
					</div>
					<div class="recently-moveBoxItem">
						<span style="color:#f4282e">{{item.individual_profit}}</span>
						<span style="color:#8b8b8b;">盈利分配</span>
					</div>
					<div class="recently-moveBoxItem">
						<div @click='goDetail(item)' class="recently-button">跟买</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			timerA: null,
			marginTop: 0,
			marginTopA: 0,
			marginTopB: 0,
			no: 0
		}
	},
	props: {
		listData: {
			type: Array,
			required: true,
			default: [{
				created_at: '',
				individual_profit: '',
				nickname: '',
				policy_id: '',
				stock_id: '',
				stock_market: '',
				stock_name: '',
				stock_no: '',
				trade_buy_quantity: '',
			}]
		},
		title: {
			type: String,
			required: true,
			default: '最近买入'
		}
	},
	methods: {
		goDetail(item) {
			localStorage.setItem('choosen_id', item.stock_id)
			localStorage.setItem('choosen_name', item.stock_name)
			localStorage.setItem('choosen_no', 'sh_' + item.stock_no)
			this.$router.push({
				path: '/trade/buy/detail'
			})
		}
	},
	beforeDestroy() {
		clearInterval(this.timerA)
	}
}
</script>
<style scoped>
.box {
	width: 528px;
	height: 530px;
}

.recently-title {
	width: 80%;
	height: 69px;
	border-bottom: 1px solid #333;
	text-align: center;
	margin: 0 auto;
	line-height: 70px;
}

.recently-title h3 {
	line-height: 70px;
}

.recently-moveBox {
	width: 80%;
	margin: 0 auto;

	overflow: hidden;
	height: 420px;
}

.recently-moveBox ul {
	width: 100%;
	height: 100%;
}

.recently-moveBox ul li {
	width: 100%;
	height: 70px;
	border-bottom: 1px solid #e5e5e5;
}

.recently-moveBoxItem {
	float: left;
	width: 25%;
	font-size: 14px;
}

.recently-moveBoxItem span {
	display: block;
	line-height: 33px;
	text-align: center;
}

.recently-button {
	width: 64px;
	height: 28px;
	line-height: 28px;
	margin-top: 20px;
	text-align: center;
	color: #f4282e;
	cursor: pointer;
	border: 1px solid #f4282e;
	border-radius: 4px;
	margin-left: 10px;
}

.noData {
	text-align: center;
	padding-top: 100px;
	font-size: 39px;
}
</style>
