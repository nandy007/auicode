
interface WeiXin {
    // 微信登陆
    isWeixinInstalled(): boolean;// 微信是否安装
    getAuthCode(jsonData: Object, callBackFun: Function): void;// 启动微信进行登录用户授权认证
    getAccessToken(jsonData: Object, callBackFun: Function): void;//  通过code码向微信平台获取access_token等信息
    authAccessToken(jsonData: Object, callBackFun: Function): void;// 检验授权凭证accessToken是否有效
    refreshAccessToken(jsonData: Object, callBackFun: Function): void;//  刷新或续期accessToken使用
    getUserInfo(jsonData: Object, callBackFun: Function): void;// 开发者可通过OpenID来获取用户基本信息
    //微信支付
    isSupportPay(): boolean;// 是否支持微信支付
    payOrder(jsonData: Object, callBackFun: Function): void;//  调用微信支付订单，并返回授权结果
    //微信分享
    shareText(jsonData: Object, callBackFun: Function): void;//  分享文本到微信好友/微信朋友圈
    shareImage(jsonData: Object, callBackFun: Function): void;//  分享图片到微信好友/微信朋友圈
    shareNews(jsonData: Object, callBackFun: Function): void;// 分享新闻（图文信息）到微信好友/微信朋友圈
}

declare module 'WeiXin' {
    export = weixin;
}

var weixin: WeiXin;


