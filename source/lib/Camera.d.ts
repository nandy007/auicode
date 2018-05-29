
interface Camera {
    start(jsonData: Object, callFunction: Function): void; //启动系统拍照/摄像界面
}

declare module 'Camera' {
    export = camera;
}

var camera: Camera;


