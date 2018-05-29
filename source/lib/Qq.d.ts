
interface Qq {
    // QQ登陆
    isQQInstalled(): boolean;// QQ是否安装
    login(jsonData: Object, callBackFun: Function): void;// 启动QQ进行登录用户授权认证
    isLogin(): boolean;//  QQ用户是否已经登录
    logout(): void;// 登出QQ
    getUserInfo(jsonData: Object, callBackFun: Function): void;// 获取授权QQ用户信息
    //QQ分享
    shareImage(jsonData: Object, callBackFun: Function): void;// 分享图片到QQ好友
    shareNews(jsonData: Object, callBackFun: Function): void;// 分享新闻（图文信息）到QQ空间 / QQ好友
    shareMusic(jsonData: Object, callBackFun: Function): void;// 分享音乐到QQ空间 / QQ好友
}

declare module 'Qq' {
    export = qq;
}

var qq: Qq;


