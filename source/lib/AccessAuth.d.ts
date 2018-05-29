
interface AccessAuth {
    init(jsonData: Object): void;//初始化Bridge服务端鉴权SDK
    getToken(jsonData: Object, callBackFun: Function): void;//Bridge服务端SDK获取指定服务token值
}

declare module 'AccessAuth' {
    export = accessauth;
}

var accessauth: AccessAuth;


