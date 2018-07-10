<!-- Td分时图组件 -->
<template>
<div>
	<div id="myChart2" :style="{width: '600px', height: '350px'}"></div>
	<!-- <div v-else id="normal" :style="{width: '600px', height: '300px'}">请选择股票</div> -->
</div>
</template>
<script>
export default {
	data() {
		return {
			timerC: null,
			min: 0,
			max: 0
		}
	},
	props: ['stockId'],
	watch: {
		stockId: {
			handler: function(val, oldval) {
				this.getData(this.stockId)
			},
		}
	},
	mounted() {
		this.getData(this.stockId)
		this.timerC = setInterval(() => {
			this.getData(this.stockId)
		}, 60000)
	},
	beforeDestroy() {
		clearInterval(this.timerC)
	},
	methods: {
		getData(stockId) {
			this.$axios.post(this.$api.stock.quotation_minute, {
				id: stockId
			}).then(res => {
				this.handleSplite(res.data.data)
			}).catch(err => {
				console.log('api:TimeLine-minute-ERROR', err)
			})
		},
		// 处理option数据 初始化表格
		handleSplite(rowOption) {
			var price = [] // 价格
			var volume = [] // 持有量
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
				price.push(arrB[0])
				volume.push(arrB[1])
				possession.push(arrB[2])
			}
			//time
			time = this.getTime(price)
			//ave
			for (var y = 0; y < arrA.length; y++) {
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
			let myEcharts = echarts.init(document.getElementById('myChart2'))
			myEcharts.setOption({
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						lineStyle: {
							color: '#57617B'
						}
					}
				},
				grid: [{
					top: '5%',
					left: '10%',
					right: '10%',
					bottom: '20%'
				}, {
					left: '10%',
					right: '10%',
					top: '88%',
					height: '10%'
				}],
				dataZoom: [{
					type: 'inside',
					xAxisIndex: [0, 1],
					start: 20,
					end: 100
				}],
				xAxis: [{
					type: 'category',
					data: time,
					scale: true,
					boundaryGap: false,
					axisLine: {
						onZero: false
					},
					splitLine: {
						show: false
					},
					splitNumber: 20,
				}, {
					type: 'category',
					gridIndex: 1,
					data: time,
					axisLabel: {
						show: false
					}
				}],
				axisPointer: {
					link: {
						xAxisIndex: 'all'
					},
					label: {
						backgroundColor: '#777'
					}
				},
				yAxis: [{
					scale: true,
					splitArea: {
						show: true
					},
					min: min,
					max: max
				}, {
					gridIndex: 1,
					splitNumber: 2,
					axisLine: {
						onZero: false
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: false
					},
					axisLabel: {
						show: true
					},
				}],
				animation: true,
				series: [{
					name: '均线',
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
					name: '价格',
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
				}, {
					name: '成交量',
					type: 'bar',
					coordinateSystem: 'cartesian2d',
					xAxisIndex: 1,
					yAxisIndex: 1,
					data: volume,
					itemStyle: {
						normal: {
							color: function(params) {
								var colorList;
								if (price[params.dataIndex] > price[Number(params.dataIndex) - 1]) {
									colorList = '#ef232a';
								} else {
									colorList = '#14b143';
								}
								return colorList;
							}
						}
					}
				}]
			})
		},
		// 获取时间坐标轴
		getTime(price) {
			var timeA = 9;
			var timeB = 30;
			var time = []
			var x = ''
			var y = ''
			for (var i = 0; i < price.length; i++) {
				if (timeA == 11 && timeB == 30) {
					timeA = 13;
					timeB = 0;
				} else if (timeB == 59) {
					timeB = 0
					timeA++
				} else {
					timeB++
				}
				x = timeA;
				y = timeB;
				if (timeA < 10) {
					x = '0' + timeA
				}
				if (timeB < 10) {
					y = '0' + timeB
				}
				time.push(x + ':' + y)
			}
			return time
		}
	}
}
</script>
<style scoped>

</style>
