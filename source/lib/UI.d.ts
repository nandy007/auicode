
interface UI {
    alert(jsonData: Object, callFunction: Function): void;//弹出提示框
    confirm(jsonData: Object, callFunction: Function): void;//弹出提示选择框
    toast(jsonData: Object): void;//弹出Toast提示
    actionSheet(jsonData: Object, callFunction: Function): void;// 弹出底部菜单选择
    selectDate(jsonData: Object, callFunction: Function): void;//弹出系统日期选择
    selectTime(jsonData: Object, callFunction: Function): void;//弹出系统时间选择
    showImages(jsonData: Object): void;//显示图片集
    selectFile(jsonData: Object, callBackFun: Function): void;//通过js实现文件选择器调用
    selectVideo(jsonData: Object, callBackFun: Function): void;//选择设备中单个视频
    selectImage(jsonData: Object, callBackFun: Function): void;//选择设备中单张图片
    selectImages(jsonData: Object, callBackFun: Function): void;//选择设备中多张图片
    openPicker(jsonData: Object, callFunction: Function): void;//启动群组联动选择
}

declare module 'UI' {
    export = ui;
}

var ui: UI;

