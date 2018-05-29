
interface Native {
    openApp(jsonData: Object, callFunction: Function): void;//启动第三方应用并传值
    openFile(path: string): void;//调用系统第三方程序打开指定文件
    browser(url: string): void;//调用系统浏览器打开指定url地址
    apkInstalled(package: string): boolean;// 设备是否安装apk应用
    installApk(apkPath: string, callFunction: Function): void;//安装指定路径apk安装包
    uninstallApk(packageName: string, callFunction: Function): void;//卸载指定应用
    shareText(jsonData: Object): void;//调用系统分享文本
    shareImage(jsonData: Object): void;//调用系统分享图片
    openSystemSetting(jsonData: Object): void;//打开系统设置相关界面，如：蓝牙设置、定位设置、WiFi设置等

}

declare module 'Native' {
    export = native;
}

var native: Native;

