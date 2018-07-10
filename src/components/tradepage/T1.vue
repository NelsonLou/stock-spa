<!-- 创建策略首页 -->
<template>
<div id='tbody'>
	<div class="head-row">
		<div class="stock-input" style="padding-top:40px;">
			<el-row class="demo-autocomplete">
				<el-col :span="12">
					<el-autocomplete style="width:300px;border: none;" class="inline-input searchInput" valueKey='stock_name' v-model="stock_choose" :fetch-suggestions="querySearchAsync" placeholder="股票代码／股票名称／股票缩写" :trigger-on-focus="false" @select='handleSelect'>
						<template slot-scope="props">
                            <span class="addr">{{ props.item.stock_name }}</span>
                            <span class="addr">{{ props.item.stock_show }}</span>
                            <span class="addr">{{ props.item.stock_abb }}</span>
                        </template>
					</el-autocomplete>
				</el-col>
			</el-row>
		</div>
		<!-- 上证指数 -->
		<div v-if='stock_list_normal[0].quotation.quote_change>=0' class="top-stock market-info" style="width:330px;left:380px;">
			<div class="stock-name">
				<b>上证指数</b>
				<span>（SH000001）</span>
			</div>
			<div>
				<span class="value1">{{stock_list_normal[0].quotation.current_price}}</span>
				<i class="iconfont arrow-pf icon-arrow-profit"></i>
				<span class="num">{{stock_list_normal[0].quotation.ups_and_downs}}</span>
				<span class="num">
                    <span>{{stock_list_normal[0].quotation.quote_change}}</span>
				<span>%</span>
				</span>
			</div>
		</div>
		<div v-else class="top-stock market-info-b down" style="width:330px;left:380px;">
			<div class="stock-name">
				<b>上证指数</b>
				<span>（sh0000001）</span>
			</div>
			<div>
				<span class="value2">{{stock_list_normal[0].quotation.current_price}}</span>
				<i class="iconfont arrow-pf  icon-arrow-loss"></i>
				<span class="num">{{stock_list_normal[0].quotation.ups_and_downs}}</span>
				<span class="num">
                    <span>{{stock_list_normal[0].quotation.quote_change}}</span>
				<span>%</span>
				</span>
			</div>
		</div>
		<!-- 深证指数 -->
		<div v-if='stock_list_normal[1].quotation.quote_change>=0' class="top-stock market-info" style="width:350px;left:750px;">
			<div class="stock-name">
				<b>深证指数</b>
				<span>（SZ0399001）</span>
			</div>
			<div style="display:block;">
				<!-- <span>{{stock_list_normal[1].quotation.current_price}}</span> -->
				<span class="value1">{{stock_list_normal[1].quotation.current_price}}</span>
				<i class="iconfont arrow-pf icon-arrow-profit"></i>
				<span class="num">{{stock_list_normal[1].quotation.ups_and_downs}}</span>
				<span class="num">
                        <span>{{stock_list_normal[1].quotation.quote_change}}</span>
				<span>%</span>
				</span>
			</div>
		</div>
		<div v-else class="top-stock market-info-b down" style="width:350px;left:750px;">
			<div class="stock-name">
				<b>深证指数</b>
				<span>（SZ0399001）</span>
			</div>
			<div>
				<!-- <span>{{stock_list_normal[1].quotation.current_price}}</span> -->
				<span class="value2">{{stock_list_normal[1].quotation.current_price}}</span>
				<i class="iconfont arrow-pf  icon-arrow-loss"></i>
				<span class="num">{{stock_list_normal[1].quotation.ups_and_downs}}</span>
				<span class="num">
                        <span>{{stock_list_normal[1].quotation.quote_change}}</span>
				<span>%</span>
				</span>
			</div>
		</div>
	</div>
	<!-- 分时图 -->
	<div style="padding-left:20px;padding-top:20px;">
		<p style="font-size: 16px;text-align: left;color: #333;line-height: 40px;">最近买入
		</p>
		<TimeSharing :tId='11' :sharesInfo='listData[0]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<TimeSharing :tId='12' :sharesInfo='listData[1]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<TimeSharing :tId='13' :sharesInfo='listData[2]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<TimeSharing :tId='14' :sharesInfo='listData[3]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<TimeSharing :tId='15' :sharesInfo='listData[4]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<TimeSharing :tId='16' :sharesInfo='listData[5]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<TimeSharing :tId='17' :sharesInfo='listData[6]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<TimeSharing :tId='18' :sharesInfo='listData[7]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<TimeSharing :tId='19' :sharesInfo='listData[8]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<TimeSharing :tId='20' :sharesInfo='listData[9]' style="display:inline-block;margin-left:5px;margin-top:5px;">
		</TimeSharing>
		<!-- </div> -->
	</div>
	<!-- <div id="container" style="min-width:400px;height:400px;"></div> -->
</div>
</template>


<script>
import TimeSharing from "./chart/TimeSharing"
import KLine from "./chart/KLine"
import TimeLine from "./chart/TimeLine"
import {
	Loading
} from 'element-ui'
export default {
	data() {
		return {
			timerB: null,
			timeout: null,
			tableData: null,
			styles: {
				width: 600,
				height: 400
			},
			restaurants: [],
			state2: '',
			listData: [{ // 组件传入数据
				stock_name: '',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}, {
				stock_name: '-',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}, {
				stock_name: '-',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}, {
				stock_name: '-',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}, {
				stock_name: '-',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}, {
				stock_name: '-',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}, {
				stock_name: '-',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}, {
				stock_name: '-',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}, {
				stock_name: '-',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}, {
				stock_name: '-',
				stock_id: 16381,
				quotation: {
					current_price: '',
					ups_and_downs: ''
				},
				minuteData: ''
			}],
			loadingInstance: {}, // loading控件
			minuteData: {},
			stock_list: [],
			stock_choose: '',
			stock_list_normal: [{
				quotation: {
					quote_change: '',
					current_price: '',
					ups_and_downs: ''
				}
			}, {
				quotation: {
					quote_change: '',
					current_price: '',
					ups_and_downs: ''
				}
			}]
		}
	},
	components: {
		TimeSharing,
		KLine,
		TimeLine
	},
	created() {
		var body = document.getElementById('tbody')
		this.loadingInstance = Loading.service({
			body: true,
			fullscreen: true,
			target: body,
			text: '正在努力加载 ...'
		})
	},
	mounted() {
		this.getData()
	},
	methods: {
		// 获取最近买入列表
		getData() {
			this.$axios.post(this.$api.stock.policy_new_list, {
				count: "10"
			}).then(res => {
				for (let i = 0; i < 10; i++) {
					this.listData[i].stock_id = res.data.data[i].stock_id;
					this.listData[i].stock_name = res.data.data[i].stock_name;
					this.$set(this.listData[i], 'stock_market', res.data.data[i].stock_market)
					this.$set(this.listData[i], 'stock_no', res.data.data[i].stock_no)
				}
				this.getDataOnTime()
				this.timerB = setInterval(() => {
					this.getDataOnTime()
				}, 5000)
				// 关闭loading
				this.$nextTick(() => {
					this.loadingInstance.close();
				})
			}).catch(err => {
				console.log(err);
			})
		},
		// 股票列表数据刷新
		getDataOnTime() {
			var para = ""
			for (var i = 0; i < this.listData.length; i++) {
				if (i == 0) {
					para = para + this.listData[i].stock_id
				} else {
					para = para + "," + this.listData[i].stock_id
				}
			}
			this.getMinutesOnTime(para)
			para = '1,' + '2,' + para
			this.$axios.post(this.$api.stock.quotation_list, {
				stock_id_list: para
			}).then(res => {
				if (res.data.data[0].quotation.current_price == 0) {
					this.stock_list_normal[0].quotation.current_price = '--'
				} else {
					this.stock_list_normal[0].quotation.current_price = res.data.data[0].quotation.current_price
				}
				if (res.data.data[1].quotation.current_price == 0) {
					this.stock_list_normal[1].quotation.current_price = '--'
				} else {
					this.stock_list_normal[1].quotation.current_price = res.data.data[1].quotation.current_price
				}
				this.stock_list_normal[0].quotation.ups_and_downs = res.data.data[0].quotation.ups_and_downs
				this.stock_list_normal[0].quotation.quote_change = res.data.data[0].quotation.quote_change
				this.stock_list_normal[1].quotation.ups_and_downs = res.data.data[1].quotation.ups_and_downs
				this.stock_list_normal[1].quotation.quote_change = res.data.data[1].quotation.quote_change
				for (let i = 0; i < 10; i++) {
					if (res.data.data[i].quotation.current_price == 0) {
						this.listData[i].quotation.current_price = '--'
					} else {
						this.listData[i].quotation.current_price = res.data.data[i + 2].quotation.current_price;
						this.listData[i].quotation.ups_and_downs = res.data.data[i + 2].quotation.ups_and_downs;
					}
				}
			}).catch(err => {
				console.log(err);
			})
		},
		// 分时图数据实时刷新
		getMinutesOnTime(para) {
			this.$axios.post(this.$api.stock.minute_list, {
				stock_id_list: para
			}).then(res => {
				for (let i = 0; i < 10; i++) {
					if (res.data.data[this.listData[i].stock_id] != undefined) {
						this.listData[i].minuteData = res.data.data[this.listData[i].stock_id]
					} else {
						this.listData[i].minuteData = ''
					}
				}
			}).catch(err => {
				console.log(err);
			})
		},
		// 0深证 1上证
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
				this.$router.push({
					path: '/trade/buy/detail'
				})
			}).catch(err => {
				console.log(err);
			})
		},
	},
	beforeDestroy() {
		clearInterval(this.timerB)
	},
}
</script><style scoped>
.searchInput {
    width: 350px;
    border:1px solid #D42B2E;
    border-radius: 3px;
}

.head-row {
    height: 130px;
    position: relative;
    /*padding-top: 40px;*/
}

.stock-input {
    position: absolute;
    width: 350px;
    top: 15px;
    left: 20px;
}

.suggest-list {
    position: absolute;
    left: 20px;
    top: 50px;
    width: 438px;
    background-color: #fff;
    z-index: 999;
    box-shadow: 0 1px 10px #e0e0e0;
    -webkit-box-shadow: 0 1px 10px #e0e0e0;
    -moz-box-shadow: 0 1px 10px #e0e0e0;
    -ms-box-shadow: 0 1px 10px #e0e0e0;
    -o-box-shadow: 0 1px 10px #e0e0e0;
}

.stock-input .suggest-list li {
    width: 438px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-indent: 15px;
    cursor: pointer;
    color: #636363;
    overflow: hidden;
}

.suggest-list li div {
    text-align: center;
    text-indent: 0;
}

.market-info {
    color: #fc5146;
}
.market-info-b{
    color: #00a104;
}

.stock-name {
    /* float: left; */
    color: #333;
    font-size: 16px;
    margin-top: 5px;
}

.value1 {
    float: left;
    margin-top: 0px;
    font-size: 36px;
    color: #fc5146;
}
.value2 {
    float: left;
    margin-top: 0px;
    font-size: 36px;
    color: #00a104;
}

.head-row .market-info .stock-name b {
    font-size: 24px;
    font-weight: 700;
}
.head-row .market-info-b .stock-name b {
    font-size: 24px;
    font-weight: 700;
}

.arrow-pf {
    float: left;
    font-size: 40px;
    margin-top: -18px;
    margin-left: 5px;
}

.num {
    font-size: 16px;
    float: left;
    margin-top: 15px;
    margin-left: 15px;
}

.input-wrapper {
    position: absolute;
    left: 20px;
    top: 10px;
    z-index: 9;
    width: 448px;
}

.input-wrapper input {
    height: 38px;
    width: 368px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #fc5146;
    border-right: 0;
}

.stock-search {
    width: 79px;
    height: 40px;
    float: right;
    background: #fc5146;
    color: #fff;
    cursor: pointer;
    text-align: center;
    line-height: 38px;
    font-size: 14px;
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

.icon-sousuo:before {
    content: "\e600";
}

.head-row .market-info .arrow-pf {
    float: left;
    font-size: 40px;
    margin-top: -5px;
    margin-left: 5px;
}
.head-row .market-info-b .arrow-pf {
    float: left;
    font-size: 40px;
    margin-top: -5px;
    margin-left: 5px;
}



/************************/

.box {
    display: inline-block;
}

.top-stock {
    position:absolute;
    top: 30px;
    left:20px;
    width:400px;
    height:100px;
}
.addr{
    display: inline-block;
    width: 33%;
    text-align: center;
}

</style>
