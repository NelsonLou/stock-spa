<template>
<div>
	<header-nav></header-nav>
	<div class="container" style="padding-top:30px;">
		<img src="../assets/img/newperson.png" alt="">
	</div>
	<foot-nav></foot-nav>
</div>
</template>
<script>
import FootNav from './common/FootNav'
import HeaderNav from './common/HeaderNav'

export default {
	data() {
		return {

		}
	},
	components: {
		FootNav,
		HeaderNav
	}
}
</script>
<style scoped>

</style>
