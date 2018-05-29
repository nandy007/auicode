
interface VideoUtil {
    recordShortVideo(jsonData: Object, callFunction: Function): void;//启动小视频录制
    openVideo(jsonData: Object): void;// 调用系统播放器播放视频
}

declare module 'VideoUtil' {
    export = videoutil;
}

var videoutil: VideoUtil;


