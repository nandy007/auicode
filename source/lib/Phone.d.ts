
interface Phone {
    tel(phone: string): void;//拨打指定号码
    openSystemDial(phone: string): void;//启动系统拨号界面
    faceTime(faceTimeNumber: string): void;//调用IOS平台系统的FaceTime进行视频通话
    getCallRecords(jsonData: Object, callBackFun: Function): void;//获取系统通话记录
}

declare module 'Phone' {
    export =phone;
}

var phone: Phone;


