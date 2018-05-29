
interface AudioPlay {
    init(jsonData: Object): void;//初始化当前播放音频信息
    start(): void;//播放音频
    pause(): void;// 暂停播放音频
    stop(): void;// 停止播放音频
    seekTo(position: number): void;// 定位到音频的某一点并播放
    getStatus(): number;//当前音频播放状态
    getDuration(): number;//读取音频的总长度
    getCurrentPosition(): number;//读取音频目前播放位置
    beep(audioPath: string): void;//播放本地音频文件

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数
}

declare module 'AudioPlay' {
    export = audioplay;
}

var audioplay: AudioPlay;


