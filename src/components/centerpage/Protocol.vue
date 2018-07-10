<!-- 协议 -->
<template>
<div>
	<div class="protocol">
		<div class="card" style="margin-top:0px;height:auto;">
			<div class="title"><span>相关协议</span></div>
			<div class="body" style="min-height:500px;">
				<div class="clearfix">
					<div>
						<div class="ant-table ant-table-large" style="margin-top:25px;">
							<div class="ant-table-body">
								<table>
									<colgroup>
										<col>
										<col>
										<col>
										<col>
									</colgroup>
									<thead class="ant-table-thead">
										<tr style="background-color:#f5f5f5;">
											<th class="" style="width:400px;text-align:left;">
												<span><span>协议名称</span></span>
											</th>
											<th class="" style="width:130px;text-align:left;">
												<span><span>版本号</span></span>
											</th>
											<th class="" style="width:130px;text-align:left;">
												<span><span>发布日期</span></span>
											</th>
											<th class="" style="width:130px;text-align:left;">
												<span><span>签署日期</span></span>
											</th>
										</tr>
									</thead>
									<tbody class="ant-table-tbody">
										<tr class="ant-table-row  ant-table-row-level-0" style="display:;">
											<td class="">
												<span style="padding-left:0px;" class="ant-table-row-indent indent-level-0"></span>
												<a @click="goAgreement('a')">协议-策略人策略交易合作协议（T+1）</a>
											</td>
											<td class="">
												<span>201700101</span>
											</td>
											<td class="">
												<span>2017-07-01</span>
											</td>
											<td class="">
												<span>2017-07-01</span>
											</td>
										</tr>
										<tr class="ant-table-row  ant-table-row-level-0" style="display:;">
											<td class="">
												<span style="padding-left:0px;" class="ant-table-row-indent indent-level-0"></span>
												<a @click="goAgreement('b')">协议-投顾策略交易居间服务协议</a>
											</td>
											<td class=""><span>201700102</span></td>
											<td class=""><span>2017-07-01</span></td>
											<td class=""><span>2017-07-01</span></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
	name: "",
	data: () => ({

	}),
	methods: {
		goAgreement(type) {
			if (type == 'a') {
				this.$router.push({
					path: '/center/Agreement',
					query: {
						type: "1"
					}
				});
			} else {
				this.$router.push({
					path: '/center/Agreement',
					query: {
						type: "2"
					}
				});
			}
		}
	}
}
</script>
<style scoped>
.card {
	background-color: #fff;
	border: 1px solid #E9E9Eb;
}

.card .title {
	width: 100%;
	height: 47px;
	position: relative;
	border-bottom: 1px solid #E9E9Eb;
	background: #f5f5f5;
}

.card .title span {
	display: block;
	position: absolute;
	left: 33px;
	height: 47px;
	line-height: 47px;
	color: #6ea9d9;
	border-bottom: 1px solid #1586cc;
	font-size: 18px;
	border: 0;
	font-size: 14px;
	color: #333;
}

.ant-pagination {
	font-size: 12px;
}

.ant-table-pagination {
	margin: 16px 0;
	float: right;
}

.card .body {
	min-height: 100px;
	padding-left: 50px;
	padding-right: 50px;
}

.ant-table {
	font-size: 12px;
	color: #666;
	border-radius: 6px 6px 0 0;
	overflow: hidden;
}

.ant-table table {
	border-radius: 0;
	font-size: 14px;
	color: #807f7f;
	border-top: 1px solid #E9E9Eb;
}

.ant-table tr {
	height: 38px;
}

.ant-table tr {
	transition: all .3s ease;
}

.ant-table th,
.ant-table td {
	padding: 0 5px;
}

.ant-table td {
	border-bottom: 1px solid #e9e9e9;
}

.ant-table th,
.ant-table td {
	padding: 16px 8px;
	word-break: break-all;
}

a {
	color: #2db7f5;
	background: transparent;
	text-decoration: none;
	outline: none;
	cursor: pointer;
	transition: color .3s ease;
}

.ant-pagination {
	font-size: 12px;
}

.ant-table-pagination {
	margin: 16px 0;
	float: right;
}

.ant-pagination-item {
	width: 36px;
	height: 36px;
	line-height: 36px;
}

.ant-pagination-item-active {
	background-color: #fc5146;
	border-color: #fc5146;
	text-align: center;
}

.ant-pagination-item-active a {
	color: #fff;
}
</style>
