
interface Encryption {
    base64Encode(src: string): string;// 对传入的src字符串进行base64编码
    base64Decode(src: string): string;// 对传入的src字符串进行base64解码
    uuid(): string;// 生成唯一UUID字符串
    md5(src: string): string;// 对传入的src字符串进行md5加密
    sha(src: string, type: string): string;//对传入的src字符串进行hash编码
    urlEncode(src: string, type: string): string;// 对传入的src字符串进行UrlEncode
    escapeXml(str: string): string;//转换xml中需要转义的字符
    unEscapeXml(str: string): string;//逆转xml中转义符
    rgbToHex(rgbJson: Object): string;//将rgb格式转换为#rrggbb格式字符串
    hexToRgb(hex: string): Object;//将#rrggbb格式字符串转换为rgb格式
    rgbaToHex(rgba: string): string;// 将rgba格式字符串转换为#aarrggbb
    hexToRgba(hex: string): Object;//将#aarrggbb格式字符串转换为rgba
    aesBase64Encode(jsonData: Object): String;//输入需要编码字符串，采用指定key进行Aes编码，结果再进行Base64编码
    base64AesDecode(jsonData: Object): String;//输入需要解码字符串，首先进行Base64解码获取数据后再采用指定key进行AES解码
}

declare module 'Encryption' {
    export = encryption;
}

var encryption: Encryption;

