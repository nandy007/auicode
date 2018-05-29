
interface BaiduVoice {
    record(jsonData: Object, callBackFun: Function): void;//启动百度语音识别
}

declare module 'BaiduVoice' {
    export = baiduvoice;
}

var baiduvoice: BaiduVoice;


