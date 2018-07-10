<!-- 最近买入组件 -->
<template>
<div class="recently-box">
	<div class="recently-title">
		<h3>{{title}}</h3></div>
	<div class="recently-moveBox">
		<div id='recently-moveA' class="recently-move">
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
						<span>买入：{{item.trade_buy_price}}</span>
						<span style="color:#8b8b8b;">止盈：{{item.trade_profit_price}}</span>
					</div>
					<div class="recently-moveBoxItem">
						<div class="recently-button" @click='goDetail(item)'>跟买</div>
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
			listA: [{
				created_at: '',
				nickname: '',
				policy_id: '',
				stock_name: '',
				stock_no: '',
				trade_buy_price: '',
				trade_buy_quantity: '',
				trade_profit_price: ''
			}],
			isListA: true,
			timer: null,
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
				nickname: '',
				policy_id: '',
				stock_name: '',
				stock_no: '',
				trade_buy_price: '',
				trade_buy_quantity: '',
				trade_profit_price: ''
			}]
		},
		title: {
			type: String,
			required: true,
			default: '最近买入'
		}
	},
	mounted() {
		this.timer = setInterval(() => {
			this.animation()
		}, 2000)
	},
	methods: {
		animation() {
			var x = this.marginTop * (-70) + 'px'
			this.marginTop++
				$('#recently-moveA').animate({
					marginTop: x
				})
			if (this.marginTop > 10) {
				if (this.no == 19) {
					this.no = 0
				}
				this.listData.push([])
				this.listData[this.listData.length - 1] = {
					created_at: this.listData[this.no].created_at,
					nickname: this.listData[this.no].nickname,
					policy_id: this.listData[this.no].policy_id,
					stock_name: this.listData[this.no].stock_name,
					stock_no: this.listData[this.no].stock_no,
					trade_buy_price: this.listData[this.no].trade_buy_price,
					trade_buy_quantity: this.listData[this.no].trade_buy_quantity,
					trade_profit_price: this.listData[this.no].trade_profit_price
				}
				this.no++
			}
		},
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
		clearInterval(this.timer)
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
</style>
