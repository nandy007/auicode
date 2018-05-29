
interface Bugly {
    init(jsonData: Object): void;//启动Bugly错误日志收集
    setUserId(userId: string): void;//设置用户Id，用于精确定位到应用中某个用户异常
    getUserId(): string;//获取用户Id
    setTag(tag: number): void;//设置自定义标签
    getTag(): number;//获取当前设置标签值
    setUserData(jsonData: Object): void;//设置自定义Map参数
    getUserData(key: string): string;//获取已设置自定义Map参数
    getSdkVersion(): string;//获取Bugly SDK版本号
    getDeviceId(): string;//获取设备Id
    //自定义日志
    verbose(log: string): void;// Bugly基础日志输出
    debug(log: string): void;//Bugly调试日志输出
    info(log: string): void;// Bugly信息日志输出
    warn(log: string): void;// Bugly告警日志输出
    error(log: string): void;// Bugly错误日志输出
}

declare module 'Bugly' {
    export = bugly;
}

var bugly: Bugly;


