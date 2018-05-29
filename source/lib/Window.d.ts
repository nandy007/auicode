
interface Window {
    open(jsonData: Object): void;// 打开新窗口（通过地址）
    openData(jsonData: Object): void;// 打开新窗口（通过内容）
    close(jsonData: Object): void;//  关闭当前窗口
    getData(): Object;//  获取上层窗口传递的数据
    getOrientation(): string;//  获取当前窗口屏幕横竖屏状态
    getScreenWidth(): number;// 获取当前窗口绘制区域宽度
    getScreenHeight(): number;// 获取当前窗口绘制区域高度
    setStatusBarMode(mode: string): void;// 设置窗口状态栏模式
    hideSip(): void;//  隐藏系统输入法

    on(messageName: string, callback: Function): void;//组件注册事件的触发函数
    fire(messageName: string, params: Array<any>): void;// 组件事件的触发函数
    off(messageName: string, callback: Function): void;// 组件移除事件的触发函数
    getOn(messageName: string): Array<Function>;//获取已绑定的事件的触发函数

}


declare module 'Window' {
    export = window;
}

var window: Window;

