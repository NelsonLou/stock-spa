// 系统配置参数
// const version = 'v1'
const domain = '47.96.14.156'
export const config = {
  // headers: {
  //   Accept: `application/vnd.ideabuy.${version}+json`
  // },
  url: `http://${domain}`, // 接口地址
  limit: 10 // 每页显示条目个数
}
// 系统基础接口映射

//发送验证码 type  1:注册验证码；2:忘记登录密码验证码；3:发送设置提现密码的短信，发送忘记提现密码的短信

export const user = {
  login: '/api/login', // 登录

  logout: '/api/logout', // 登出

  user_info: '/api/user-info', // 拉取用户信息

  token_refresh: '/api/token/refresh', //获取refresh token

  change_password:'/api/change-password', // 修改登录密码接口

  forget_password:'/api/forget-password', // 忘记登录密码接口

  change_withdraw_password:'api/change-withdraw-password', // 修改交易密码接口

  set_up_withdraw_password:'/api/set-up-withdraw-password', // 设置提现密码与忘记提现密码接口

  recharge: '/api/recharge', // 充值创建订单

  register: '/api/register', // 注册

  money_flow:'/api/money-flow/list', //资金流水接口(旧版本接口--弃用)

  money_flow_type: '/api/money-flow-type/list', // 钱包流水和策略余额流水接口

  bind_the_bank_card:'/api/bind-the-bank-card', //绑定银行卡接口

  withdraw:'/api/withdraw', // 申请提现借口

  balance_trans:'api/balance-trans', // 策略余额转入转出钱包余额接口

  id_card_certification:'/api/id-card-certification', // 实名认证
}

export const other = {
    index: '/api/index', // 首页接口

    OAuth: '/oauth/token', // OAuth 2.0 认证

    send_message: '/api/send-sms-message', // 获取验证码

    configs: '/api/configs', // 基本配置信息接口 弃用

    bankList:'/api/bank-info/list', // 支持银行信息列表接口

    version_detection: '/api/version-detection', // 版本检测接口

    announcement_list: '/api/announcement-list', // 公告列表接口

    announcement_content: '/api/announcement-content/', // 公告详情接口(需要在最后拼接上id)

    most_profitable:'/api/most-profitable', // 最挣钱数据接口

    policy_profit_list: '/api/policy-profit-list', // 获取最近获利策略列表

    policy_release_list: '/api/policy-release-list', // 获取最近买入策略列表

    trader_with_followed: '/api/trader-with-followed', // 操盘达人(认证方式：OAuth 2.0)

    trader: '/api/trader', // 操盘达人

    server_time: '/api/server/time', // 获取服务器时间接口

    follow: '/api/follow', // 关注用户接口

}
export const stock = {

    stock_list: '/api/stock-list', // 获取股票列表接口

    user_stock: '/api/user-stock', // 用户自选股列表接口

    user_stock_add: '/api/user-stock/add', // 添加自选股接口

    user_stock_destroy: '/api/user-stock/destroy', // 删除自选股接口

    purchase: '/api/purchase', // 点买界面数据接口

    quotation: '/api/quotation', // 实时行情接口

    quotation_list: '/api/quotation/list', // 股票列表实时行情接口

    quotation_minute: '/api/quotation/minute', // 分时图接口

    quotation_kLine: '/api/quotation/k-line', // K线图接口

    point_to_sell_list: '/api/point-to-sell-list', // 点卖界面

    policy_new_list: '/api/policy-new-list', // 获取最近交易的股票列表

    minute_list: '/api/quotation/minute/list', //分时图数据批量获取

    policy_add: '/api/policy/add', // 创建策略接口

    get_stock_id: '/api/get-stock-id', // 根据股票No获取股票Id

    settlement_list: '/api/settlement-list', // 结算列表/历史记录 数据接口

    point_to_sell_list: '/api/point-to-sell-list', // 点卖列表实时数据接口

    policy_sell: '/api/policy/sell', // 股票卖出接口

    trade_profit_and_loss: '/api/trade-profit-and-loss', // 设置止盈止损接口

    auto_hold: '/api/auto-hold', // 设置自动递延接口

    today_hol: 'api/today-hold', // 设置当天是否递延接口

}
