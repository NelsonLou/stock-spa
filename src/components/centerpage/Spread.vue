<!-- 我的推广 -->
<template>
<div>
	<div class="spread">
		<div class="card" style="margin-top:0px;height:auto;">
			<div class="title"><span>我的推广</span></div>

		</div>
		<div class="spread-content clear">
			<div class="clearfix">
				<div class="share1">
					<p>方式一：分享链接给好友</p>
					<ul class="clearfix">
						<li class="weibo" style="margin-left:0;">
							<i class=""></i>
						</li>
						<li class="wechat">
							<i class=""></i>
						</li>
						<li class="qq" style="line-height:45px;">
							<i class=""></i>
						</li>
					</ul>
					<button id="btnCopy" class="share-button">点击复制链接</button>
					<p style="color:#ff503f;">提示：您的邀请码为您的手机号码。</p>
				</div>
				<div class="spread-content-sepLine"></div>
				<div class="shareRight">
					<div>方式二： 分享二维码给好友</div>
				</div>
				<div style="margin-top:15px;color:#54b5fc;">微信扫一扫，分享给好友</div>
			</div>
		</div>
	</div>
</div>
</div>
</template>
<script>

</script>
<style scoped>
.spread {
	background: #F3F3F3;
}

.card {
	background-color: #fff;
	border: 1px solid #E9E9Eb;
}

.spread .card .title {
	background: #f5f5f5;
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

.spread .card .title>span {
	border: 0;
	font-size: 14px;
	color: #333;
}

.spread .card .body {
	padding: 0 50px;
}

.spread .tips {
	padding: 36px 0px;
	box-sizing: border-box;
}

.spread .tips .circle {
	float: left;
	height: 50px;
	width: 50px;
	line-height: 50px;
	border-radius: 50px;
	float: left;
	background-color: #fc7852;
	color: #fff;
	text-align: center;
	font-size: 30px;
}

.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}

.spread .tips .circle>i {
	font-size: 30px;
}

.spread .tips .desc {
	float: left;
	height: 50px;
	line-height: 50px;
	font-size: 16px;
	padding-left: 20px;
}

.spread .tips .desc p {
	line-height: 50px;
}

.spread .tips .arrow {
	font-weight: bold;
	float: left;
	height: 50px;
	line-height: 50px;
	color: #e44419;
	font-size: 20px;
	margin: 0 30px;
}

.spread .spread-content {
	background-color: #fff;
	padding: 30px 50px;
	border: 1px solid #E9E9Eb;
	font-size: 16px;
}

.spread .spread-content .share1 {
	float: left;
	background: #fff;
}

.spread .spread-content .spread-content-sepLine {
	margin: 0px 120px;
	float: left;
	height: 197px;
	width: 1px;
	background-color: #e1e1e1;
}

.spread .spread-content .shareRight {
	float: left;
}

.spread .spread-content .share1 ul li {
	float: left;
	width: 50px;
	height: 50px;
	line-height: 50px;
	border-radius: 40px;
	text-align: center;
	color: #fff;
	font-size: 25px;
	margin: 18px 15px;
	cursor: pointer;
}

.spread .spread-content .share1 .share-button {
	margin-top: 6px;
	margin-bottom: 12px;
	display: inline-block;
	font-weight: 500;
	text-align: center;
	touch-action: manipulation;
	cursor: pointer;
	background-image: none;
	border: 1px solid transparent;
	white-space: nowrap;
	line-height: 1.5;
	padding: 0 15px;
	font-size: 16px;
	border-radius: 4px;
	height: 45px;
	width: 215px;
	color: #fff;
	background-color: #108ee9;
	border-color: #108ee9;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.spread .spread-content .shareRight .qrcode {
	width: 90px;
	margin-top: 40px;
	margin-left: 50px;
}

.listTitle {
	float: left;
}

.invited_count {
	float: right;
	width: 200px;
	height: 48px;
}

.color_orange {
	color: #fc5146 !important;
}

b {
	height: 47px;
	line-height: 47px;
}

.row {
	position: relative;
	margin-left: 0;
	margin-right: 0;
	height: auto;
	display: block;
	color: #807f7f;
}

.col-12 {
	float: left;
	width: 50%;
	color: #807f7f;
}

.ant-table {
	font-size: 12px;
	color: #666;
	border-radius: 6px 6px 0 0;
	overflow: hidden;
}

/* .ant-table-empty .ant-table-body {
	    height: 150px;
	} */

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

.ant-table th {
	font-weight: normal;
	background-color: #fafafa;
}

.ant-table th {
	background: #f4f4f4;
	width: 187px;
	font-weight: bold;
	transition: background .3s ease;
	text-align: left;
}

.ant-table-placeholder {
	height: 100px;
	line-height: 100px;
	text-align: center;
	font-size: 12px;
	color: #999;
	border-bottom: 1px solid #e9e9e9;
	top: 50px;
	left: 0;
	width: 100%;
}
</style>
