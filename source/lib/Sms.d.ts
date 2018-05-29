
interface Sms {
    sendSms(jsonData: Object): void;//打开短信发送界面发送短信
    sendSmsAsyn(jsonData: Object, callBackFun: Function): void;//后台发送短信
}

declare module 'Sms' {
    export = sms;
}

var sms: Sms;


