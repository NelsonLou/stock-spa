<!-- K线图组件 -->
<template>
<div>
	<div :id="kdata" :style="{width: '600px', height: '300px'}"></div>
</div>
</template>
<script>
export default {
	data() {
		return {
			optionDataA: {}, // charts数据
			volume: [], // 成交量
			turnover: [], // 成交额
			otherA: '', // 未知变量
			otherB: '', // 未知变量
			myEchartsA: {},
			name: ''
		}
	},
	props: {
		stockId: {
			require: true,
			default: 16381
		},
		kdata: {
			require: true,
			default: 3
		}
	},
	created() {
		if (this.kdata == 4) {
			this.name = '日K'
		} else if (this.kdata == 5) {
			this.name = '周K'
		} else if (this.kdata == 6) {
			this.name = '月K'
		}
	},
	mounted() {
		this.myEchartsA = echarts.init(document.getElementById(this.kdata))
		this.getData(this.stockId)
	},
	watch: {
		stockId: {
			handler: function(val, oldval) {
				this.getData(this.stockId)
			},
		},
		kdata: {
			handler: function(val, oldval) {
				this.getData(this.stockId)
			},
		}
	},
	methods: {
		// 获取charts数据
		getData(id) {
			// 绘制日k
			this.$axios.post(this.$api.stock.quotation_kLine, {
				id: id,
				category: this.kdata
			}).then(res => {
				var data = res.data.data
				var data0 = data.split(';')
				this.optionDataA = this.splitData(data0)
				var option = this.optionDataA
				this.myEchartsA.clear()
				this.myEchartsA.setOption({
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'line'
						}
					},
					animation: true,
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							animation: false,
							axisPointer: {
								lineStyle: {
									type: 'solid',
									color: '#b2b5c1'
								}
							}
						},
						textStyle: {
							fontSize: '.24rem'
						},
						hideDelay: 0,
						padding: 5,
						formatter: function(params) {
							var time = params[0].name
							var kd = params[0].data
							var ma5 = params[1].data
							var ma10 = params[2].data
							var ma20 = params[3].data
							var rate = (kd[2] - kd[1]) / kd[1] * 100
							rate = rate > 0 ? ('+' + rate.toFixed(2)) : rate.toFixed(2)
							var html =
								`${time}<br>开：${kd[1]} 高：${kd[4]}<br>收：${kd[2]} 低：${kd[3]}<br><span class='rate'>涨跌：${rate}%</span><br><span class="ma5">MA5：${ma5}</span><br><span class="ma10">MA10：${ma10}</span><br><span class="ma20">MA20：${ma20}</span>`
							return html
						}.bind(this)
					},
					axisPointer: {
						link: {
							xAxisIndex: 'all'
						},
						label: {
							backgroundColor: '#777'
						}
					},
					legend: {
						data: [this.name, 'MA5', 'MA10', 'MA20'],
						animation: true
					},
					grid: [{
						top: '10%',
						left: '15%',
						right: '10%',
						bottom: '20%'
					}, {
						left: '15%',
						right: '10%',
						top: '88%',
						height: '10%'
					}],
					xAxis: [{
						type: 'category',
						data: this.optionDataA.categoryData,
						scale: true,
						boundaryGap: false,
						axisLine: {
							onZero: false
						},
						splitLine: {
							show: false
						},
						splitNumber: 20,
						min: 'dataMin',
						max: 'dataMax'
					}, {
						type: 'category',
						gridIndex: 1,
						data: this.optionDataA.categoryData,
						axisLabel: {
							show: false
						}
					}],
					yAxis: [{
						scale: true,
						splitArea: {
							show: true
						}
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
						}
					}],
					dataZoom: [{
						type: 'inside',
						xAxisIndex: [0, 1],
						start: 20,
						end: 100
					}],
					series: [{
						name: this.name,
						type: 'candlestick',
						data: this.optionDataA.values,
						markLine: {
							symbol: ['none', 'none'],
							data: [{
									name: 'min line on close',
									type: 'min',
									valueDim: 'close'
								},
								{
									name: 'max line on close',
									type: 'max',
									valueDim: 'close'
								}
							]
						}
					}, {
						name: 'MA5',
						type: 'line',
						data: this.calculateMA(5),
						smooth: true,
						lineStyle: {
							normal: {
								opacity: 0.5
							}
						}
					}, {
						name: 'MA10',
						type: 'line',
						data: this.calculateMA(10),
						smooth: true,
						lineStyle: {
							normal: {
								opacity: 0.5
							}
						}
					}, {
						name: 'MA20',
						type: 'line',
						data: this.calculateMA(20),
						smooth: true,
						lineStyle: {
							normal: {
								opacity: 0.5
							}
						}
					}, {
						name: '交易量',
						type: 'bar',
						coordinateSystem: 'cartesian2d',
						xAxisIndex: 1,
						yAxisIndex: 1,
						data: this.volume,
						itemStyle: {
							normal: {
								color: function(params) {
									var colorList;
									if (option.values[params.dataIndex][1] > option.values[params.dataIndex][0]) {
										colorList = '#ef232a';
									} else {
										colorList = '#14b143';
									}
									return colorList;
								}
							}
						}
					}]
				}, true);
			}).catch(err => {
				console.log(err);
			})
		},
		// 处理数据
		splitData(rawData) {
			var categoryData = [];
			var values = []
			var arr = []
			for (var i = 0; i < rawData.length; i++) {
				arr = rawData[i].split(',')
				if (arr.length > 7) {
					this.otherA = arr[7]
					this.otherB = arr[8]
					arr.splice(7, 2)
				}
				this.volume.push(arr[5])
				this.turnover.push(arr[6])
				arr.splice(5, 2);
				categoryData.push(arr[0])
				arr.splice(0, 1);
				var a = arr[3]
				var b = arr[2]
				arr[2] = a
				arr[3] = b
				values.push(arr)
			}
			return {
				categoryData: categoryData,
				values: values
			};
		},
		calculateMA(dayCount) {
			var result = [];
			for (var i = 0, len = this.optionDataA.values.length; i < len; i++) {
				if (i < dayCount) {
					result.push('-');
					continue;
				}
				var sum = 0;
				for (var j = 0; j < dayCount; j++) {
					sum = Number(sum) + Number(this.optionDataA.values[i - j][1]);
				}
				result.push((sum / dayCount).toFixed(2));
			}
			return result;
		}
	}
}
</script>
<style scoped>
</style>
