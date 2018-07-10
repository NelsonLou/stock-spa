<!-- 首页 -->
<template lang="html">
	<div class="">
		<header-nav></header-nav>
        <!-- 轮播 -->
		<div class="banner">
			<el-carousel trigger="click" :interval='3000' :autoplay="true" height="750px">
				<!-- <el-carousel-item v-for='items in item.ImgList' :key='items' > -->
				<el-carousel-item>
					<img src="../assets/img/indexbg.png" alt="" style="display:block;width:100%;min-height:750px;">
				</el-carousel-item>
					<!-- {{items}}
					<img :src=items alt="" style="display:block;width:100%;min-height:750px;">
				</el-carousel-item> -->
				<el-carousel-item>
					<img src="../assets/img/indexbg1.png" alt="" style="display:block;width:100%;min-height:750px;">
				</el-carousel-item>
				<el-carousel-item>
					<img src="../assets/img/indexbg2.png" alt="" style="display:block;width:100%;min-height:750px;">
				</el-carousel-item>
				<el-carousel-item>
					<img src="../assets/img/indexbg3.png" alt="" style="display:block;width:100%;min-height:750px;">
				</el-carousel-item>
			</el-carousel>
		</div>
		<!-- 锚点导航 -->
		<div class="banner-black">
			<div class="container">
				<ul class="clear">
				<li><a href=""><span><i class="el-icon-share"></i></span>&nbsp;分享策略</a></li>
				<li><a href=""><span><i class="el-icon-document"></i></span>&nbsp;今日动态</a></li>
				<li><a href=""><span><i class="el-icon-mobile-phone"></i></span>&nbsp;移动下载</a></li>
				<li><a href="/"><span><i class="el-icon-setting"></i></span>&nbsp;操作指南</a></li>
				</ul>
			</div>
		</div>
		<!-- 模拟分享 -->
		<div class="share" style="">
			<div class="container clear">
				<div class="clear">
					<div class="share-left">
						模拟策略分享
					</div>
				<div class="indexTab">
					<ul class="tabTitle" @click="tabClick">
					<li :class="{active:isMakeMoney}" id="makeMoney">最赚钱</li>
					<!-- <li :class="{active:isSteady}" id="steady">最稳健</li>
					<li :class="{active:isHot}" id="hot">最人气</li> -->
					</ul>
					<div class="indexTab1" v-if="isMakeMoney">
						<el-carousel trigger="click" :autoplay="false" height="560px" indicator-position="none" >
							<el-carousel-item>
								<div class="">
									<stock-show
									v-for="item in policies"
									v-bind:policyItem="item"
									v-bind:key="item.id"></stock-show>
								</div>
							</el-carousel-item>
						</el-carousel>
					</div>
					<div class="indexTab2" v-if="isSteady">
						<el-carousel trigger="click" :autoplay="false" height="560px" indicator-position="none">
							<el-carousel-item>
							<div class="">
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
							</div>
							</el-carousel-item>
						</el-carousel>
					</div>
					<div class="indexTab3" v-if="isHot">
						<el-carousel trigger="click" :autoplay="false" height="560px" indicator-position="none">
							<el-carousel-item>
							<div class="">
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
								<stock-show></stock-show>
							</div>
							</el-carousel-item>
						</el-carousel>
					</div>
				</div>
				<div>
				</div>
				</div>
			</div>
		</div>
		<!-- 最近买入  最近获利 -->
		<div class='share'>
			<div class='container clear'>
				<el-card class="box-card left">
					<recentlyBuy :title='titleA' :listData='listDataA'></recentlyBuy>
				</el-card>
				<el-card class="box-card right">
					<recentlyGet :title='titleB' :listData='listDataB'></recentlyGet>
				</el-card>
			</div>
		</div>
		<!-- <div class="home-fourth-screen">
			<div class="container wow bounceInLeft">
				<img src="../assets/img/a.png" alt="">
			</div>
		</div> -->
		<div class="bg-banner">
			<div class="container">
			<div class="friend-top">
				<div class="friend-img-1">
				<img src="../assets/img/f1.png" alt="" class="wow bounceInDown">
				</div>
				<div class="friend-img-2">
				<img src="../assets/img/f2.png" alt="" class="wow bounceInDown">
				</div>
			</div>
			</div>
		</div>
		<foot-nav></foot-nav>
	</div>
</template>
<script>
import FootNav from './common/FootNav'
import HeaderNav from './common/HeaderNav'
import StockShow from './common/StockShow'
import recentlyGet from './common/recentlyGet'
import recentlyBuy from './common/recentlyBuy'
export default {
	data() {
		return {
			policies: [],
			timer: null,
			isMakeMoney: true,
			isSteady: false,
			id: '',
			isHot: false,
			item: {
				ImgList: ["../assets/img/indexbg.png", "../assets/img/indexbg1.png", "../assets/img/indexbg2.png", "../assets/img/indexbg3.png"]
			},
			listDataA: [{
				created_at: '',
				nickname: '',
				policy: '',
				stock_id: '',
				stock_name: '',
				stock_no: '',
				trade_buy_price: '',
				trade_buy_quantity: '',
				trade_profit_price: ''
			}],
			listDataB: [{
				created_at: '',
				nickname: '',
				policy: '',
				stock_id: '',
				stock_name: '',
				stock_no: '',
				trade_buy_price: '',
				trade_buy_quantity: '',
				trade_profit_price: ''
			}],
			titleA: '最近买入',
			titleB: '最近获利'
		}
	},
	components: {
		FootNav,
		HeaderNav,
		StockShow,
		recentlyBuy,
		recentlyGet
	},
	created: function() {
		this.getMostProfitable()
		this.getRecentlyA()
		this.getRecentlyB()

	},
	mounted() {},
	methods: {
		getMostProfitable() {
			this.$axios.get(this.$api.other.most_profitable).then(res => {
				this.policies = res.data.data;
			}).catch(err => {
				console.log(err);
			})
		},
		getRecentlyA() {
			this.$axios.get(this.$api.other.policy_release_list).then(res => {
				var a = res.data.data
				for (let i = 0; i < a.length; i++) {
					if (a[i].nickname.length > 4) {
						a[i].nickname = a[i].nickname.substring(0, 3) + '...'
					}
				}
				this.listDataA = a
			}).catch(err => {
				console.log(err);
			})
		},
		getRecentlyB() {
			this.$axios.get(this.$api.other.policy_profit_list).then(res => {
				var b = res.data.data
				for (let i = 0; i < b.length; i++) {
					if (b[i].nickname.length > 4) {
						b[i].nickname = b[i].nickname.substring(0, 4) + '...'
					}
				}
				this.listDataB = b
			}).catch(err => {
				console.log(err);
			})
		},
		handleClick(tab, event) {},
		tabClick(ev) {
			var ev = ev || window.event;
			var target = ev.target || ev.srcElement;
			if (target.nodeName.toLocaleLowerCase() == 'li') {
				switch (target.id) {
					case 'makeMoney':
						this.isMakeMoney = true;
						this.isSteady = false;
						this.isHot = false;
						this.getMostProfitable()
						break;
					case 'hot':
						this.isMakeMoney = false;
						this.isSteady = false;
						this.isHot = true;
						break;
					case 'steady':
						this.isMakeMoney = false;
						this.isSteady = true;
						this.isHot = false;
						break;
					default:
				}
			}
		}
	}
}
</script>

<style scoped>
.tabTitle {
	overflow: hidden;
	border-bottom: 1px solid #e0e0e0;
	padding-bottom: 5px;
	width: 100%;
	margin-bottom: 30px;
}

.tabTitle li {
	float: left;
	width: 120px;
	height: 24px;
	text-align: center;
	cursor: pointer;
	height: 24px;
	border-right: 2px solid #e0e0e0;
	font-size: 18px;
}

.tabTitle li.active {
	color: #fc5146;
}

.tabTitle li:hover {
	color: #fc5146;
}

.banner {
	position: relative;
}

.banner-black {
	background-color: #000;
}

.banner-black li {
	float: left;
	width: 20%;
	height: 72px;
	padding-top: 14px;
	text-align: center;
	margin-right: 2.5%;
	margin-left: 2.5%;
}

.banner-black li a {
	display: block;
	font-size: 20px;
	line-height: 52px;
	height: 52px;
	text-decoration: none;
	color: #fff;
}

.share {
	padding-top: 50px;
	background: #f0f1f1;
}

.share .container {
	position: relative;
}

.share-left {
	position: absolute;
	right: 20px;
	padding-right: 15px;
	border-right: 3px solid #fc5146;
	font-size: 22px;
	height: 30px;
}

.share-right {
	position: absolute;
	right: 0;
	top: 0;
}

.el-carousel__container {
	height: 600px !important;
}

/*.el-tabs__item.is-active {
    color: #fc5146!important;
}
.el-tabs__item:hover{
  color: #fc5146!important;
}*/

/*.el-tabs__active-bar{
  background-color: #fc5146!important;
}*/

.home-fourth-screen {
	padding-top: 40px;
	padding-bottom: 60px;
	background: #f0f1f1;
	overflow: hidden;
}

.home-fourth-screen img {
	display: block;
	margin: 0 auto;
}

.bg-banner {
	height: 380px;
	width: 100%;
	margin-top: 20px;
	background: url(../assets/img/friend.png) center center no-repeat;
}

.friend-top {
	padding-top: 60px;
}

.friend-img-1 {
	float: left;
	width: 50%;
}

.friend-img-2 {
	width: 50%;
	float: right;
}

.friend-img-1 img {
	margin-left: 70px;
}

.friend-img-2 img {
	margin-left: 160px;
}

.recently {
	width: 100%;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}

.box-card {
	width: 570px;
	height: 525px;
	/* background-image: url('../assets/img/recentlyBuyBg.jpg'); */
	overflow: hidden;
}

.left {
	float: left;
}

.right {
	float: right;
}
</style>
