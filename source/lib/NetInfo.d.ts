
interface NetInfo {
    getStatus(): number;//获取当前网络连接状态
    getIps(): Array<string>;//获取连接所有网络ip地址
    getWifiInfo(): Object;//获取当前连接的wifi网络信息

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数
}

declare module 'NetInfo' {
    export = netInfo;
}

var netInfo: NetInfo;

