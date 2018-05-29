
interface JPush {
    init(): void;//初始化并启动极光推送JPush
    getRegistrationId(): string;//获取注册成功后JPush服务器分配的设备标识
    stop(): void;//停止极光推送服务
    resume(): void;// 恢复极光推送服务
    isStopped(): boolean;//检查极光推送服务是否已经被停止
    setDebugMode(isDebug: boolean): void;//设置调试模式开启/关闭
    setAlias(alias: string, callBackFun: Function): void;//设置别名

    setTags(tags: Array<string>, callBackFun: Function): void;//设置标签

    getVersion(): string;//获取JPush SDK版本信息

    //android
    setLatestNotificationNumber(maxNumber: number): void; //限制状态栏保留的通知条数。默认为保留最近 5 条通知
    clearAllNotifications(): void; //清除所有通知栏信息
    clearNotificationById(messageId: string): void; //清除指定通知栏信息
    setPushTime(info: object): void; //设置推送时间
    setSilenceTime(info: object): void; //设置推送通知静默时间
    //ios
    setBadge(badge: number): boolean;//设置JPush服务器中存储的badge值
    resetBadge(): void;//清空JPush服务器中存储的badge值



}

declare module 'JPush' {
    export = jpush;
}

var jpush: JPush;

