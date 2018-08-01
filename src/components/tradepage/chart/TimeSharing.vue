<!-- t1分时图组件 -->
<template>
<div>
	<div style="border:1px solid #ececec;width:200px;height:270px;padding:10px;">
		<div>
			<div style="overflow:hidden;">
				<span style="font-size: 16px;color: #010101;float:left;line-height:24px;">{{sharesInfo.stock_name}}</span>
				<span style="font-size: 16px;color: #010101;float:right;line-height:24px;">{{sharesInfo.quotation.current_price}}</span>
			</div>
			<div>
				<span style="font-size: 14px;color: #8c8c8c;line-height:19px;">涨跌幅(一天)</span>
				<div class="color-green" v-if='sharesInfo.quotation.ups_and_downs<0' align="" style="line-height:19px;">
					<i class="iconfont icon-arrow-loss"></i>
					<span>{{sharesInfo.quotation.ups_and_downs}}%</span>
				</div>
				<div class="color-red" v-else style="line-height:19px;">
					<i class="iconfont icon-arrow-profit"></i>
					<span>{{sharesInfo.quotation.ups_and_downs}}%</span>
				</div>
			</div>
		</div>
		<div :id="tId" :style="{width: '180px', height: '180px'}" style="margin-top:-50px;">
		</div>
		<div class="choose-btn" @click="goDetail">
			选择
		</div>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			name: 'test',
			myEcharts: {},
			min: 0,
			max: 0
		}
	},
	props: {
		sharesInfo: {
			require: true,
			default: {
				stock_name: '',
				stock_id: '16',
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			},
		},
		tId: {
			require: true,
			default: 1
		},
	},
	watch: {
		sharesInfo: {
			handler(curVal, oldVal) {
				this.getOptionData()　　　　　　　　　　　　
			},
			deep: true
		}
	},
	mounted() {
		this.myEcharts = echarts.init(document.getElementById(this.tId))
		this.getOptionData()
	},
	methods: {
		goDetail() {
			if (this.$store.state.AuthUser.authenticated == false) {
				this.$Message.warning('请先登录')
				this.$router.push('/login')
			} else {
				if (this.sharesInfo.stock_market == 0) {
					var market = 'sz'
				} else {
					var market = 'sh'
				}
				localStorage.setItem('choosen_id', this.sharesInfo.stock_id)
				localStorage.setItem('choosen_name', this.sharesInfo.stock_name)
				localStorage.setItem('choosen_no', market + this.sharesInfo.stock_no)
				this.$router.push({
					path: '/trade/buy/detail'
				})
			}

		},
		// 初始化表格
		getOptionData(resId) {
			var x = this.handleSplite(this.sharesInfo.minuteData)
			if (this.sharesInfo.minuteData != '') {
				this.myEcharts.setOption(this.handleSplite(this.sharesInfo.minuteData))
			} else {}
		},
		// 处理option数据
		handleSplite(rowOption) {
			var price = []
			var volume = []
			var possession = []
			var time = []
			var ave = []
			var arrA = rowOption.split(';')
			var length = arrA.length - 1
			arrA = arrA.slice(0, length)
			var arrB = []
			var amount = 0
			for (var i = 0; i < arrA.length; i++) {
				arrB = arrA[i].split(',')
				if (Number(arrB[0]) > this.max) {
					this.max = Number(arrB[0])
				}
				if (i == 0 || Number(arrB[0]) < this.min) {
					this.min = Number(arrB[0])
				}
				arrB = arrA[i].split(',')
				price.push(arrB[0])
				volume.push(arrB[1])
				possession.push(arrB[2])
			}
			//time
			for (var j = 0; j < 240; j += 0.1) {
				time.push(j)
			}
			//ave
			for (var y = 0; y < price.length; y++) {
				amount = 0
				if (y > 8) {
					for (var x = 9; x >= 0; x--) {
						amount = Number(amount) + Number(price[Number(y) - Number(x)])
					}
					ave.push((amount / 10).toFixed(2))
				} else {
					ave.push(price[y])
				}
			}
			var min = Number(this.min)
			var max = Number(this.max)
			return {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						lineStyle: {
							color: '#57617B'
						}
					}
				},
				grid: {
					width: 2000,
					left: 'left'
				},
				xAxis: [{
					show: false,
					type: 'category',
					boundaryGap: false,
					axisLine: {
						lineStyle: {
							color: '#57617B'
						}
					},
					axisLabel: {
						show: false,
						interval: 0
					},
					axisTick: {
						interval: 1,
					},
					data: time
				}],
				axisPointer: {
					show: false,
					snap: false
				},
				yAxis: [{
					show: false,
					type: 'value',
					axisTick: {
						show: false
					},
					min: min,
					max: max,
					axisLine: {
						lineStyle: {
							color: '#57617B'
						}
					},
					axisLabel: {
						margin: 10,
						textStyle: {
							fontSize: 14
						},
						show: false
					},
					splitLine: {
						show: false,
					}
				}],
				animation: true,
				series: [{
					type: 'line',
					step: false,
					symbol: 'none',
					smooth: true,
					lineStyle: {
						normal: {
							width: 0.5
						}
					},
					smooth: false,
					itemStyle: {
						normal: {
							color: '#F89201'
						}
					},
					data: ave
				}, {
					type: 'line',
					symbol: 'none',
					smooth: true,
					lineStyle: {
						normal: {
							width: 0.5
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(141,185,239,0.5)'
							}], false),
							shadowColor: 'rgba(0, 0, 0, 0.1)',
							shadowBlur: 10
						}
					},
					itemStyle: {
						normal: {
							color: 'rgb(141,185,239)'
						}
					},
					data: price
				}]
			}
		}
	},
}
</script>
<style scoped>
.choose-btn {
	width: 60px;
	height: 27px;
	text-align: center;
	line-height: 27px;
	border-radius: 3px;
	font-size: 16px;
	background: #fff;
	color: #fc5146;
	border: 1px solid #fc5146;
	cursor: pointer;
	display: block;
	margin: 0 auto;
	margin-top: 50px;
	cursor: pointer;
	z-index: 999;
}

.iconfont {
	font-size: 14px;
	font-family: "iconfont" !important;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.color-green {
	float: right;
	color: #00a104;
}

.color-red {
	float: right;
	color: #FF3B2B;
}

.icon-arrow-loss:before {
	content: "\e612";
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
</style>
