
interface Device {
    //闪光灯
    startLight(): void;// 打开移动设备闪光灯
    closeLight(): void;// 关闭移动设备闪光灯
    // 振动
    vibrate(time: number): void;//  启动移动设备振动
    //  屏幕
    setKeepScreenOn(): void;// 设置应用使用过程中保持屏幕点亮
    clearKeepScreenOn(): void;// 清除应用使用过程中保持屏幕点亮
    isKeepScreenOn(): boolean;//  是否设置应用使用过程中保持屏幕点亮
    //   设备信息
    getEsn(): string;//  获取设备ESN值
    getImsi(): string;//  获取设备IMSI值
    getDeviceToken(): string;//  获取iOS推送服务器需要的一个代表设备的唯一令牌的字符串
    getOs(): string;// 获取设备操作系统平台
    getPhoneModule(): string;// 获取手机型号名
    getOsVersion(): string;//  获取设备操作系统版本号
    isRoot(): boolean;// 判断Android设备是否root或iOS设备是否越狱
    getLanguage(): string;//  获取当前系统语言类型
    getAvailableMemory(): number;// 获取设备可用内存
    getDpi(): string;// 获取当前设备dpi
    //桌面气泡数字
    getBadgeNumber(): number;// 获取Iphone/ Ipad 设备桌面快捷方式小气泡显示数字
    setBadgeNumber(number: string): void;// 设置Iphone / Ipad 设备桌面快捷方式小气泡显示数字
}


declare module 'Device' {
    export = device;
}

var device: Device;

