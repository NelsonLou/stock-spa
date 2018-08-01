<!-- 首页-最挣钱模板 -->
<template lang="html">
  <div class="">
    <div class="item-wrap">
      <div class="share-item">
        <div class="share-item-name clear">
			<div class="share-item-name-right left">
				<div class="share-item-name-right-phone">
				{{policyItem.name}}
				</div>
				<div class="share-item-name-right-time">
				<span>平均持股周期:</span>
				<i>{{policyItem.hold_avg}}天</i>
				</div>
			</div>
        </div>
        <div class="share-item-rate clear">
          <div class="share-item-rate-left left">
            <p>{{policyItem.profit_rate.toFixed(2)}}%</p>
            <span>30天收益</span>
          </div>
          <div class="share-item-rate-right left">
            <p>{{policyItem.win_rate.toFixed(2)}}%</p>
            <span>总胜率</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			value1: null,
			onFans: false,
			offFans: true
		}
	},
	props: ['policyItem'],
	methods: {
		fans() {
			if (this.onFans) {
				this.onFans = false;
				this.offFans = true;
			} else if (this.offFans) {
				this.onFans = true;
				this.offFans = false;
			}
		}
	}
}
</script>

<style scoped>
.share-item-hot .right:before {
	color: #fc5146;
}

.item-wrap {
	float: left;
	width: 270px !important;
	margin-bottom: 20px;
	margin-right: 0px;
	margin-left: 20px;
}

.share-item {
	width: 250px !important;
	height: 230px !important;
	padding: 0 10px;
	background-size: 100% 100%;
	margin-bottom: 40px;
	background: #fff;
}

.share-item-name {
	border-bottom: 1px solid #e0e0e0;
}

.share-item-name-left {
	height: 85px;
}

.share-item-name-left img {
	width: 50px;
	height: 50px;
	display: block;
}

.share-item-name-right {
	text-align: left;
	padding: 15px 0 0 15px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.share-item-name-right .share-item-name-right-phone {
	font-size: 16px;
	color: #010101;
	margin-bottom: 8px;
	display: block;
}

.share-item-name-right-time {
	font-size: 14px;
	color: #8c8c8c;
}

.share-item-rate {
	border-bottom: 1px solid #e0e0e0;
	padding: 20px 0;
	overflow: hidden;
}

.share-item-rate-left {
	width: 122px;
	text-align: center;
}

.share-item-rate-left p {
	font-size: 30px;
	color: #fc5146;
}

.share-item-rate-left span {
	font-size: 12px;
	color: #8c8c8c;
	padding-left: 10px;
}

.share-item-rate-right {
	width: 105px;
	text-align: center;
	border-left: 1px solid #e0e0e0;
}

.share-item-rate-right p {
	font-size: 18px;
	color: #6a6a6a;
	padding-left: 0px;
	height: 45px;
	line-height: 45px;
}

.share-item-rate-right span {
	font-size: 12px;
	color: #8c8c8c;
	padding-left: 10px;
}

.share-item-hot .left {
	font-size: 18px;
	color: #6a6a6a;
	width: auto;
	margin-right: 5px;
	height: 60px;
	line-height: 60px;
}

.share-item-hot .left i {
	font-size: 12px;
	color: #8c8c8c;
	margin-top: 2px;
}

.share-item-hot {
	font-size: 24px;
}

.share-item-hot .right {
	line-height: 60px;
	height: 30px;
	cursor: pointer;
}
</style>
