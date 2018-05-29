
interface ImageUtil {
    scale(jsonData: Object, callBackFun: Function): void;//缩放图片并保存到目标文件
    scaleByRate(jsonData: Object, callBackFun: Function): void;//根据缩放比例缩放图片并保存到目标文件
    scaleByFileSize(jsonData: Object, callBackFun: Function): void;//根据缩放后文件大小缩放图片并保存到目标文件
    clip(jsonData: Object, callBackFun: Function): void;//启动图片裁剪界面
    screenShot(jsonData: Object, callFunction: Function): void;//启动截屏
}

declare module 'ImageUtil' {
    export = imageutil;
}

var imageutil: ImageUtil;


