// 省市联动数据
const province = [{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
},{
    id: 1,    //策略ID
    policy_no: "6002521503909375", //策略单号
    stock_id: 19264,  //股票ID
    stock_name: "农业银行",   //股票名称
    stock_no: "601288",   //股票代码
    delegate_quantity: 100,   //下单委托数量
    trade_buy_quantity: 100,   //下单成交数量
    assurance_amount: "50.00",    //保证金
    trade_fee: "3.20",    //手续费
    unit_hold_fee: "1.00",   //单位递延费
    trade_buy_fee: "1.00",   //买入佣金
    transfer_buy_fee: "1.00",   //买入过户费
    trade_profit_price: "4.00",   //止盈价格
    trade_loss_price: "3.40", //止损价格
    current_price: "1.00", //当前价格
    float_profit: "1.00", //浮动盈亏
    auto_hold: false, //是否自动递延
    trade_buy_price: "3.74",  //下单成交价格
    trade_buy_time: "2017-08-23 10:40:51",    //下单成交时间
    is_today_hold: false, //当日是否递延
    policy_status: 3, //策略状态：0 平台委托中; 1 系统委托中;2 已委托;3 已成交
    is_trade: true, //能否交易
    status_name: "卖出",    // [0,1,2]:委托 | [3]当天新购 | [stock_status]停盘 | [is_trade]卖出
    message: "本交易日14:50发起平仓请求",
               //"下交易日14:00发起递延请求"，预计平仓时间大于当天日期   且  自动递延
               //"本交易日14:00发起递延请求"，预计平仓时间为当天日期 且 (自动递延 或 申请递延)
               //"下交易日14:50发起平仓请求"，预计平仓时间大于当天日期 且 非自动递延
               //"本交易日14:50发起平仓请求"，预计平仓时间为当天日期 且 非自动递延 且 未申请递延
    "hold_info":"递延失败，请确保14:40前策略余额资金充足"
}]

export default province
