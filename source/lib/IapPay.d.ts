
interface IapPay {
    canMakePay(): boolean;//是否支持虚拟支付功能
    getProducts(jsonData: Object, callBackFun: Function): void;//获取有效商品详细信息列表
    pay(dataJson: string, callBackFun: Function): void;//购买虚拟商品
    restore(callBackFun: Function): void;//恢复用户以前购买过的所有商品交易
}


declare module 'IapPay' {
    export = iappay;
}

var iappay: IapPay;

