<!-- 我的卡券 -->
<template>
<div>
	<div class="redpacket" style="background:#fff;min-height:794px;">
		<div class="ant-tabs ant-tabs-top ant-tabs-line">
			<div class="ant-tabs-bar" tabindex="0">
				<div class="ant-tabs-nav-container ">
					<div class="ant-tabs-nav-wrap">
						<div class="ant-tabs-nav-scroll">
							<div class="ant-tabs-nav" style="left:0;">
								<div class="ant-tabs-ink-bar ant-tabs-ink-bar-transition-backward" style="left: 0px; right: 208px; display: block;"></div>
								<div class="ant-tabs-tab-active ant-tabs-tab">
									<div class="ant-tabs-tab-inner">我的红包</div>
								</div>
								<div class=" ant-tabs-tab">
									<div class="ant-tabs-tab-inner">翻倍卡</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ant-tabs-content"><span><div class="ant-tabs-tabpane"><div class="tab_content"><div class=""><div class="ant-spin"><span class="ant-spin-dot ant-spin-dot-first"></span><span class="ant-spin-dot ant-spin-dot-second"></span><span class="ant-spin-dot ant-spin-dot-third"></span></div>
			<div class="ant-spin-container">
				<div class="none">您还没有红包哦！</div>
			</div>
		</div>
		<div class="page-container">
			<ul class="ant-pagination " unselectable="unselectable">
				<li title="上一页" class="ant-pagination-disabled ant-pagination-prev"><a></a></li>
				<li title="下一页" class="ant-pagination-disabled ant-pagination-next"><a></a></li><noscript></noscript></ul>
		</div>
	</div>
</div>
<div class="ant-tabs-tabpane-hidden ant-tabs-tabpane">
	<div class="tab_content">
		<div class="">
			<div class="ant-spin"><span class="ant-spin-dot ant-spin-dot-first"></span><span class="ant-spin-dot ant-spin-dot-second"></span><span class="ant-spin-dot ant-spin-dot-third"></span></div>
			<div class="ant-spin-container">
				<div class="none">您还没有翻倍卡哦！</div>
			</div>
		</div>
		<div class="page-container">
			<ul class="ant-pagination " unselectable="unselectable">
				<li title="上一页" class="ant-pagination-disabled ant-pagination-prev"><a></a></li>
				<li title="下一页" class="ant-pagination-disabled ant-pagination-next"><a></a></li>
			</ul>
		</div>
	</div>
</div>
</span>
</div>
</div>
</div>
</div>
</template>
<script>

</script>
<style scoped>
.ant-tabs {
	box-sizing: border-box;
	position: relative;
	overflow: hidden;
	zoom: 1;
	color: #666;
}

.ant-tabs-bar {
	border-bottom: 1px solid #E9E9Eb;
	margin-bottom: 16px;
}

.redpacket .ant-tabs-nav-container {
	border-bottom: 1px solid #E9E9Eb;
	overflow: visible;
	margin-bottom: 0;
}

.ant-tabs-nav-container {
	overflow: hidden;
	font-size: 14px;
	line-height: 1.5;
	box-sizing: border-box;
	position: relative;
	white-space: nowrap;
	margin-bottom: -1px;
	zoom: 1;
}

.redpacket .ant-tabs-nav-wrap {
	height: 60px;
	line-height: 60px;
	background: #f5f5f5;
	overflow: visible;
}

.ant-tabs-nav-wrap {
	overflow: hidden;
	margin-bottom: -1px;
}

.ant-tabs-nav-scroll {
	width: 99999px;
	overflow: hidden;
}

.ant-tabs-nav {
	box-sizing: border-box;
	padding-left: 0;
	transition: left .5s cubic-bezier(.645, .045, .355, 1);
	position: relative;
	margin: 0;
	list-style: none;
	float: left;
}

.redpacket .ant-tabs-nav-wrap .ant-tabs-ink-bar {
	bottom: -1px;
	height: 1px;
	background: #fff;
}

.ant-tabs-ink-bar-transition-backward {
	transition: right .3s cubic-bezier(.645, .045, .355, 1) .09s, left .3s cubic-bezier(.645, .045, .355, 1);
	transform: translateZ(0);
}

.ant-tabs-nav .ant-tabs-tab {
	float: left;
	height: 100%;
	margin-right: 24px;
	box-sizing: border-box;
	position: relative;
}

.redpacket .ant-tabs-nav-wrap .ant-tabs-nav .ant-tabs-tab-active .ant-tabs-tab-inner {
	background: #fff;
	border-left: 1px solid #E9E9Eb;
	border-right: 1px solid #E9E9Eb;
	color: #fc5146;
	height: 61px;
}

.redpacket .ant-tabs-nav-wrap .ant-tabs-nav .ant-tabs-tab-inner {
	padding: 0;
	width: 160px;
	font-size: 14px;
	text-align: center;
	color: #333;
}

.ant-tabs-content {
	position: relative;
	width: 100%;
	box-sizing: border-box;
}

.redpacket .tab_content {
	width: 898px;
	margin: 0 auto;
}

.tab_content .none {
	height: 200px;
	line-height: 200px;
	text-align: center;
}

.redpacket .page-container {
	width: 100%;
	overflow: hidden;
	padding-right: 15px;
}
</style>
