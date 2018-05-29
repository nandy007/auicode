
interface BaiduLocation {
    start(jsonData: Object): void;//启动定位
    isStarted(): boolean;//百度定位是否正在运行
    stop(): void;//百度定位是否正在运行
}

declare module 'BaiduLocation' {
    export = baidulocation;
}

var baidulocation: BaiduLocation;


