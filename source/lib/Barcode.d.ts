
interface Barcode {
    scan(jsonData: Object, callBackFun: Function): void;// 启动条码扫描
    decodeImage(jsonData: Object, callBackFun: Function): void;//  传入图片路径进行二维码扫码
    createImage(jsonData: Object, callBackFun: Function): void;//  根据传入字符串生成条码编码图片并保存
}

declare module 'Barcode' {
    export = barcode;
}

var barcode: Barcode;


