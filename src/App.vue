<template>
<div id="app">
	<transition name="fade" mode="out-in">
		<router-view></router-view>
	</transition>
</div>
</template>

<script>
import jwtToken from './jwt/jwt'
import Cookie from 'js-cookie'
export default {
	name: 'app',
	created() {
		if (jwtToken.getToken()) {
			this.$store.dispatch('setAuthUser')
		} else if (Cookie.get('auth_id')) {
			this.$store.dispatch('refreshToken')
		}
	}
}
</script>
