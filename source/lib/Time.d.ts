
interface Time {
    setTimeout(callFunction: Function, timeout: number): string;//启动单次定时器
    clearTimeout(id: string): void;// 关闭单次定时器
    setInterval(callFunction: Function, interval: number): string;//启动重复定时器
    clearInterval(id: string): void;// 关闭重复定时器
}


declare module 'Time' {
    export = Time;
}

var time: Time;

