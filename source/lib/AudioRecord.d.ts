
interface AudioRecord {
    start(jsonData: Object): void;//开始录音
    stop(): void;//停止录音
    getStatus(): number;// 当前录音状态
    getVolumeRate(): number;//获取实时录音音量比例

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数
}

declare module 'AudioRecord' {
    export = audiorecord;
}

var audiorecord: AudioRecord;


