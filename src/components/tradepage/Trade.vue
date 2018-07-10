<!-- 创建策略模板 -->
<template>
<div>
	<header-nav></header-nav>
	<div class="trade-main">
		<div class="container clear" style="padding:0;">
			<div class="trade-main-left left">
				<router-link class="bar-top bar-top1" :class="{active:isT1D}" style="padding:1px;" to="/trade/buy/t1">
					<span v-show='!isTdIn'>A股</span>
					<i v-show='!isTdIn'>T+1</i>
					<span v-show='isTdIn' class="el-icon-back trade-icon"></span>
				</router-link>
				<!--<router-link class="bar-top bar-top1" :class="{active:isTDD}" to="/trade/buy/detail">
            <span>详情</span>
          </router-link>-->
			</div>
			<div class="trade-main-right left">
				<div class="trade-top clear">
					<div class="tabs left clear">
						<router-link to="/trade/buy/t1" class="t1" :class="{active:isT1}" @click="addActive()" ref="t1">创建策略</router-link>
						<router-link to="/trade/sell" class="sell" :class="{active:isSell}" @click="addActive()" ref="sell">当前策略</router-link>
						<router-link to="/trade/history" class="history" :class="{active:isHistory}" @click="addActive()" ref="history">历史记录</router-link>
					</div>
					<!--             <div class="trade-top-login right">
              <div class="top-col"><p><span>总资产：</span><span>{{totalAmount}}</span><span>元</span></p><p><span>冻&nbsp;&nbsp;&nbsp;结：</span><span style="color:#4cb9ed;">{{frozenAmount}}</span><span>元</span></p></div>
              <div class="top-col"><p><span>可用资金：</span><span>{{availableAmount}}</span><span>元</span></p><p><span>盈&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;亏：</span><span class="font-red">{{profitAmount}}</span><span>元</span></p></div>
              <div class="top-col2">
                <button class="btn-trans-in am-btn am-btn-default" type="button">
                  转入
                </button>
                <button class="btn-trans-out am-btn am-btn-default" type="button">
                  转出
                </button>
              </div>
            </div> -->
				</div>
				<div class="trade-down">
					<router-view></router-view>
					<!--             <div v-if='haveData' style="text-align:center;"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h1>努力建设中，敬请期待。。。</h1></div> -->
				</div>
			</div>
		</div>
	</div>
	<foot-nav></foot-nav>
</div>
</template>

<script>
import FootNav from '../common/FootNav'
import HeaderNav from '../common/HeaderNav'
export default {
	data() {
		return {
			isT1: false,
			isSell: false,
			isHistory: false,
			isT1D: false,
			isTDD: false,
			haveData: false,
			isTdIn: false
		}
	},
	components: {
		FootNav,
		HeaderNav
	},
	methods: {
		addActive: function() {

		},
		changeActive: function() {
			let path = this.$route.path;
			if (path == '/trade/buy/t1') {
				this.isTdIn = false
				this.isT1 = true;
				this.isSell = false;
				this.isHistory = false;
				this.isT1D = true;
				this.isTDD = false;
			} else if (path == '/trade/sell') {
				this.isTdIn = false
				this.isSell = true;
				this.isT1 = false;
				this.isHistory = false;
				this.isTDD = false;
				this.isT1D = true;
			} else if (path == '/trade/history') {
				this.isTdIn = false
				this.isHistory = true;
				this.isT1 = false;
				this.isSell = false;
				this.isTDD = false;
				this.isT1D = true;
			} else if (path == '/trade/buy/detail') {
				this.isTdIn = true
				this.isT1 = true;
				this.isSell = false;
				this.isHistory = false;
				this.isT1D = false;
				this.isTDD = true;
			}
		}
	},
	computed: {
		totalAmount() {
			return Number(this.$store.state.AuthUser.availableAmount) + Number(this.$store.state.AuthUser.frozenAmount) + Number(this.$store.state.AuthUser.wallet);
		},
		availableAmount() {
			return this.$store.state.AuthUser.availableAmount;
		},
		frozenAmount() {
			return this.$store.state.AuthUser.frozenAmount;
		},
		profitAmount() {
			return 1185;
		}
	},
	mounted() {
		this.changeActive();
	},
	watch: {
		$route() {
			this.changeActive();
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
	text-decoration: none;
}

.trade-main {
	min-height: 500px;
	background: #efefef;
	overflow: hidden;
	padding: 40px 0;
}

.trade-main .container {
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
}

.trade-main-left {
	width: 70px;
	height: 945px;
	background: #dcdcdc;
	;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
}

.trade-main-right {
	width: 1128px;
	height: 945px;
	background: #fff;
	vertical-align: top;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	overflow: hidden;
}

.bar-top {
	width: 70px;
	height: 70px;
	margin-top: 77px;
	background: #6c6c6c;
	color: #fff;
	line-height: 70px;
	font-size: 16px;
	padding-left: 5px;
	cursor: pointer;
	display: block;
}

.bar-top:nth-child(2) {
	margin-top: 10px;
}

.bar-top i {
	font-size: 12px;
	background: #fff;
	color: #6c6c6c;
	border-radius: 6px;
	padding: 0 4px;
	margin-left: 1px;
}

.trade-main-left .active {
	background: #fc5146;
}

.trade-main-right-top {
	height: 77px;
}

.trade-top {
	height: 77px;
	width: 100%;
	background: #f5f5f5;
	border-top-right-radius: 10px;
	border-bottom: 1px solid #dcdcdc
}

.trade-top .tabs {
	height: 77px;
	width: 501px;
	font-size: 18px;
	color: #333;
	line-height: 77px;
	display: inline-block;
}

.trade-top .tabs .active {
	background: #fff;
	color: #fc5146;
	border-right: 1px solid #dcdcdc;
	border-left: 1px solid #dcdcdc;
}

.trade-top .tabs a {
	color: #333;
	float: left;
	width: 162px;
	text-align: center;
	font-weight: 400;
}

.trade-top-login {
	width: 515px;
	height: 77px;
	position: relative;
}

.top-col {
	display: inline-block;
	height: 64px;
	line-height: 25px;
	width: 168px;
	font-size: 12px;
	color: #868686;
	padding-top: 13px;
}

.top-col p {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.font-red {
	color: #fc5146 !important;
}

.am-btn {
	display: inline-block;
	margin-bottom: 0;
	padding: .5em 1em;
	font-size: 1.6rem;
	font-weight: 400;
	line-height: 1.2;
	text-align: center;
	white-space: nowrap;
	background-image: none;
	border: 1px solid transparent;
	border-radius: 0;
	cursor: pointer;
	outline: 0;
	-webkit-appearance: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-transition: background-color .3s ease-out, border-color .3s ease-out;
	transition: background-color .3s ease-out, border-color .3s ease-out;
}

.top-col2 {
	float: right;
	width: 168px;
	height: 77px;
	box-sizing: border-box;
	padding-top: 30px;
}

.btn-trans-in {
	width: 46px;
	padding: 0;
	margin-left: -40px;
	height: 20px;
	color: #fc5146;
	background: #fff;
	border: 1px solid #fc5146;
	font-size: 12px;
	border-radius: 4px;
	display: inline-block;
}

.btn-trans-out {
	width: 46px;
	padding: 0;
	margin-left: 20px;
	height: 20px;
	color: #4cb9ed;
	background: #fff;
	border: 1px solid #4cb9ed;
	font-size: 12px;
	border-radius: 4px;
	display: inline-block;
}

.trade-icon {
	font-weight: 700px;
	background-color: #6c6c6c;
	display: block;
	font-size: 30px;
	margin-top: 20px;
	text-align: center
}
</style>
