
interface Share {
    oneKeyShare(dataJson: Object, callFunction: Function): void;//一键分享，目前支持Qq好友，Qq空间，微信好友，微信朋友圈，新浪微博

}

declare module 'Share' {
    export = share;
}

var share: Share;

