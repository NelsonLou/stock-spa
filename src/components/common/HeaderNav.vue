<!-- 头部模板 -->
<template>
<div class="navigator2">
	<div class="container clear">
		<div class="navigator2-left left">
			<img src="../../assets/img/logo.png" alt="" @click="goIndex" style="cursor:pointer;">
		</div>
		<div class="navigator2-right right">
			<ul class="clear">
				<li>
					<router-link to="/" class="navigator2-a" :class="{ active: isIndexPage}">首页</router-link>
				</li>
				<li>
					<router-link to="/introducation" class="navigator2-a" :class="{ active: isNewPage}">新手攻略</router-link>
				</li>
				<li>
					<router-link to="/trade" class="navigator2-a" :class="{ active: isTradePage}">创建策略</router-link>
				</li>
				<li>
					<router-link to="/sim" class="navigator2-a" :class="{ active: isSimPage}">模拟策略</router-link>
				</li>
				<!-- <li><router-link to="/" class="navigator2-a">高手跟踪</router-link></li> -->
				<!-- <li><router-link to="/" class="navigator2-a">互动社区</router-link></li> -->
				<li class="logined-li" v-if="!user.nickname">
					<span style="margin:0 10px 0 50px;">
							<router-link  to="/login">
								登录
							</router-link>
						</span>
					<i>|</i>
					<span style="margin:0 10px;">
							<router-link to="/register">
								注册
							</router-link>
						</span>
				</li>
				<li v-if="user.nickname">
					<div class="navigator2-a">
						<span style="color:#fff;margin-right:30px;">|</span>
						<router-link to="/center" style="margin-right:20px;">{{user.nickname}}</router-link>
						<router-link to="" @click.native="logout">退出</router-link>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>
<script>
import {
	mapState,
	mapActions
} from 'vuex'
export default {
	data() {
		return {
			isIndexPage: false,
			isNewPage: false,
			isTradePage: false,
			isSimPage: false
		}
	},
	computed: {
		...mapState({
			user: state => state.AuthUser
		})
	},
	methods: {
		...mapActions(['userSignOut']),
		logout() {
			this.$store.dispatch('logoutRequest').then(res => {
				this.$router.push({
					path: '/login'
				})
			})
		},
		goIndex() {
			this.$router.push('/')
		}
	},
	mounted() {
		let path = this.$route.path;
		if (path == '/') {
			this.isIndexPage = true;
		} else if (path == '/sim') {
			this.isSimPage = true;
		} else if (path == '/trade/buy/t1') {
			this.isTradePage = true;
		} else if (path == "/new") {
			this.isNewPage = true;
		} else {
			return;
		}
	}
}
</script>
<style scoped>
a {
	text-decoration: none;
}

.navigator2 {
	position: relative;
	z-index: 999;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	background: #fff;
}

.navigator2-left {
	width: 230px;
	height: 70px;
	padding-top: 10px;
}

.navigator2-left img {
	height: 60px;
	width: 238px;
}

.navigator2-right li {
	float: left;
	height: 80px;
	padding: 0 20px;
}

.navigator2-right li:not(:last-child):hover a {
	color: red;
}

.navigator2-right li:not(:last-child) a.active {
	color: red;
}

.navigator2-right li .navigator2-a {
	float: left;
	font-size: 18px;
	color: #666;
	line-height: 80px;
}

.navigator2-right li i {
	color: #fff;
}

.navigator2-right .logined-li {
	padding: 0;
}

.logined-li span {
	display: inline-block;
	height: 80px;
	line-height: 80px;
	font-size: 18px;
	line-height: 80px;
}

.logined-li span a {
	color: #666;
}

.logined-li i {
	font-size: 18px;
	display: inline-block;
}
</style>
