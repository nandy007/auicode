
interface App {
    exit(content: string): void;// 退出程序，弹出alert提示
    exitNoAsk(): void;// 直接退出程序
    background(): void;//  切换程序至后台
    reload(): void;// 重启程序

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数

    getVersion(): string;//获取应用版本信息
    getSdkVersion(): string;//获取SDK版本信息

    getPackageName(): string  //获取Android当前原生应用包名 
    getBundleId(): string // 获取iOS当前原生应用bundleId 参数

}


declare module 'App' {
    export = app;
}

var app: App;

