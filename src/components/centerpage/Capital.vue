<!-- 资产明细 -->
<template>
<div id="">
	<div class="capital">
		<el-menu :default-active="activeIndex" empty-text height='600' class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="cash">钱包流水</el-menu-item>
			<el-menu-item index="transaction">策略交易流水</el-menu-item>
		</el-menu>
		<div class="">
			<el-table class="cashTable" :data="tableData" border stripe style="width: 95%" v-loading="loading">
				<el-table-column prop="created_at" label="交易日期" min-width="180">
				</el-table-column>
				<el-table-column prop="flow_type" label="交易类型" min-width="180">
				</el-table-column>
				<el-table-column prop="comment" label="注释" min-width="180">
				</el-table-column>
				<el-table-column prop="flow_money" label="交易金额" min-width='180'>
				</el-table-column>
			</el-table>
			<el-pagination class="currentPage" @current-change="getData" :current-page="page" layout="total, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>
	</div>
</div>
</template>
<script>
export default {
	name: "",
	data: () => ({
		activeIndex: 'cash',
		tableData: [],
		dataType: 0,
		loading: false,
		page: 1,
		total: 1,
	}),
	created() {
		this.getData()
	},
	methods: {
		// 获取数据
		getData() {
			this.loading = true
			this.$axios.post(this.$api.user.money_flow_type, {
				per_page: '10',
				flow_type: this.dataType,
				page: this.page
			}).then(res => {
				this.tableData = res.data.data
				this.total = res.data.meta.total
			}).catch(err => {
				console.log('接口错误', '/api/money-flow-type/list')
			}).then(() => {
				this.loading = false
			})
		},
		handleSelect(key, keyPath) {
			this.show = key
			if (key == 'cash') {
				this.dataType = 0
			} else {
				this.dataType = 1
			}
			this.getData()
		},
	}
}
</script>
<style lang="scss" scoped>
.capital {
    min-height: 800px;
}
.cashTable {
    margin: 20px auto 0;
    text-align: center;
}
.currentPage {
    float: right;
    margin-top: 20px;
    margin-right: 40px;
}
</style>
