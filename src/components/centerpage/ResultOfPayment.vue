<!-- 支付结果 -->
<template>
<div class="paymentWrap">
	<div class="payment-res payment-res-warning" v-if="!isShow">
		<i class="el-icon-warning"></i> 支付失败！
	</div>
	<div class="payment-res payment-res-success" v-if="isShow">
		<i class="el-icon-success"></i> 支付成功！
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			isShow: null
		}
	},
	created: function() {
		let result = this.$route.query.status;
		if (result == 'success') {
			this.isShow = true;
		} else {
			this.isShow = false;
		}
	},
}
</script>
<style scoped>
.paymentWrap {
	min-height: 550px !important;
	padding: 30px;
	font-size: 16px;
}

.payment-res {
	font-size: 30px;
	text-align: center;
	margin-top: 25%;
}

.payment-res-success {
	color: seagreen;
}

.payment-res-warning {
	color: #fc5146;
}
</style>
