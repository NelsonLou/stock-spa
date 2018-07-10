// 省市联动数据
const province = [{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
},{
    id: 1, //策略ID
    policy_no: "60128820170823104051", //策略编号
    stock_id: 19264, //股票ID
    stock_name: "农业银行", //股票名称
    stock_no: "601288", //股票代码
    trade_buy_quantity: 100, //下单成交数量
    trade_sell_quantity: 100, //平仓成交数量
    assurance_amount: 50, //保证金 + 追加保证金
    trade_fee: "3.20", //手续费
    trade_profit_price: "4.00", //止盈价格
    trade_loss_price: "3.40", //止损价格
    trade_buy_price: "3.74", //下单成交价格
    trade_sell_price: "3.94", //平仓成交价格
    trade_buy_time: "2017-08-23 10:40:51", //下单成交时间
    trade_sell_time: "2017-08-28 09:40:46", //平仓成交时间
    trade_sell_type: 0, //平仓方式：0 主动平仓；1 止盈平仓；2 止损平仓；3 自动平仓
    total_profit: "20.00", //盈亏总额
    trade_buy_fee: "5.00", //买入佣金
    trade_sell_fee: "5.00", //卖出佣金
    transfer_buy_fee: "0.00", //买入过户费
    transfer_sell_fee: "0.00", //卖出过户费
    stamp_duty: "0.00", //印花税
    individual_profit: "6.12", //策略人盈亏
    hold_fee: "0.00", //递延费总额
    hold_days: 1, //持仓天数
    policy_status: 4, //策略状态：4 平台平仓委托中;5 系统平仓委托中; 6 平仓委托成功; 7 结算中; 8 已结算
    return_amount: "0.00", //退还金额
    unit_hold_fee: "0.00" //单位递延费
}]

export default province
