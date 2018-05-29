
interface Http {
    ajax(option: Object, callFunction: Function): string;//ajax异步请求
    formSubmit(option: Object, callFunction: Function, requestProgressFunction: Function, responseProgressFunction: Function): string;//异步表单提交
    download(option: Object, callFunction: Function, responseProgressFunction: Function): string;//异步文件下载
    cancel(id: string): void;//关闭http请求
}


declare module 'Http' {
    export = http;
}

var http: Http;

