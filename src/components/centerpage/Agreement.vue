<!-- 协议详细 -->
<template>
<div id="" class="agreement-box">
	<div class="" v-if='type==1'>
		<img src="../../assets/img/Agreement/A.png" alt="">
		<img src="../../assets/img/Agreement/B.png" alt="">
		<img src="../../assets/img/Agreement/C.png" alt="">
	</div>
	<div class="" v-else>
		<img src="../../assets/img/juJian/A.png" alt="">
		<img src="../../assets/img/juJian/B.png" alt="">
		<img src="../../assets/img/juJian/C.png" alt="">
		<img src="../../assets/img/juJian/D.png" alt="">
	</div>
</div>
</template>
<script>
export default {
	name: "",
	data: () => ({
		type: '',
	}),
	created() {
		this.type = this.$route.query.type
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
