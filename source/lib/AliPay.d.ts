
interface AliPay {
    pay(jsonData: Object, callBackFun: Function): void;//调用支付宝进行商品支付
}

declare module 'AliPay' {
    export = alipay;
}

var alipay: AliPay;


