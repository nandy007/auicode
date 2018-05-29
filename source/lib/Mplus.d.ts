
interface XPlus {
    getParameters(): object;//获取XPlus平台传递参数集
    getParameter(key: string): string;//获取XPlus平台传递参数
    invoke(dataJson: Object, callFunction: Function): void;//调用XPlus相关接口，目前支持：通讯录选人，云盘文件选择两种传参调用

}

declare module 'XPlus' {
    export = mplus;
}

var mplus: XPlus;

