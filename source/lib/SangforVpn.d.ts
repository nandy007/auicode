
interface SangforVpn {
    init(jsonData: Object, callBackFun: Function): void;//初始化深信服Vpn服务器
    login(jsonData: Object, callBackFun: Function): void;// 登录深信服Vpn服务器
    logout(callBackFun: Function): void;//注销深信服Vpn服务器
    smsLogin(jsonData: Object, callBackFun: Function): void;//启动深信服vpn短信验证码登录
    smsRefresh(): void;//向vpn服务器发送通知重新获取短信验证码
    getVpnStatus(): number;//返回深信服vpn当前连接状态
}

declare module 'SangforVpn' {
    export = sangforvpn;
}

var sangforvpn: SangforVpn;


