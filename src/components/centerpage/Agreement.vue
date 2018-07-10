<!-- 协议详细 -->
<template>
<div id="" class="agreement-box">
	<div class="" v-show='type'>
		<img src="../../assets/img/AgreementA/A.jpg" alt="">
		<img src="../../assets/img/AgreementA/B.jpg" alt="">
		<img src="../../assets/img/AgreementA/C.jpg" alt="">
		<img src="../../assets/img/AgreementA/D.jpg" alt="">
	</div>
	<div class="" v-show='!type'>
		<img src="../../assets/img/AgreementB/A.jpg" alt="">
		<img src="../../assets/img/AgreementB/B.jpg" alt="">
		<img src="../../assets/img/AgreementB/C.jpg" alt="">
		<img src="../../assets/img/AgreementB/D.jpg" alt="">
	</div>
</div>
</template>
<script>
export default {
	name: "",
	data: () => ({
		type: true,
	}),
	created() {
		if (this.$route.query.type == 1) {
			this.type = true
		} else {
			this.type = false
		}
	}
}
</script>
<style lang="scss" scoped>
.agreement-box {
    padding: 20px;
}
img {
    display: block;
    margin: 0 auto;
    width: 600px;
}
</style>
