
interface Pixel {
    getDensity(): number;//获取设备屏幕密度
    px2dp(pxValue: number): number;//将绝对像素px转换为相对像素dp
    dp2px(dpValue: number): number;// 将相对像素dp转换为绝对像素px
}

declare module 'Pixel' {
    export = pixel;
}

var pxel: Pixel;


