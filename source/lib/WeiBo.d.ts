
interface WeiBo {
    // 微博登录
    isWeiboInstalled(): boolean;//新浪微博是否安装
    login(jsonData: Object, callBackFun: Function): void;//向新浪微博平台认证授权用户登录
    logout(callBackFun: Function): void;//新浪微博用户登出
    getUserInfo(jsonData: Object, callBackFun: Function): void;//获取已登录新浪微博用户基本信息
    //微博分享
    shareText(jsonData: Object, callBackFun: Function): void;//分享文本到新浪微博
    shareImage(jsonData: Object, callBackFun: Function): void;//分享图片到新浪微博参数
    shareNews(jsonData: Object, callBackFun: Function): void;//分享新闻（图文信息）到新浪微博
}

declare module 'WeiBo' {
    export = weibo;
}

var weibo: WeiBo;


