
interface RlyIm {
    login(loginDataJson: Object, onLoginFunction: Function): void;//启动容联云IM初始化并进行用户登录，处理结果进入回调中返回
    refreshImData(rereshFunction: Function): void;//刷新Im用户信息数据
    logout(): void;//注销当前已登录IM用户
    setSettingInfo(settingInfoJson: Object): void;//设置容联云IM 服务器设置信息
    createGroup(dataJson: Object, callFunction: Function): void;//创建群组
    getGroupMembes(dataJson: Object, callFunction: Function): void;//获取群组内所有成员信息
    searchGroupById(dataJson: Object, callFunction: Function): void;//根据群组Id搜索群组
    searchGroupByName(dataJson: Object, callFunction: Function): void;//根据群组名称搜索群组
    getOwnGroup(callFunction: Function): void;//获取用户所属群组
    quitGroup(dataJson: Object, callFunction: Function): void;//退出指定群组
    joinGroup(dataJson: Object, callFunction: Function): void;//加入指定群组
    deleteGroupMember(dataJson: Object, callFunction: Function): void;//群主踢人
    forbidGroupMember(dataJson: Object, callFunction: Function): void;//群组禁言
    allowGroupMember(dataJson: Object, callFunction: Function): void;//群组关闭禁言
    inviteGroupMember(dataJson: Object, callFunction: Function): void;//邀请成员加入
    modifyGroup(dataJson: Object, callFunction: Function): void;//修改群组信息
    deleteGroup(dataJson: Object, callFunction: Function): void;//解散群组
    setGroupRule(dataJson: Object, callFunction: Function): void;//设置群组规则
    setPersonInfo(dataJson: Object, callFunction: Function): void;//设置登录用户个人信息，包括昵称、生日、性别等
    getPersonInfo(callFunction: Function): void;//获取登录用户个人信息，包括昵称、生日、性别等
    getSettingInfo(): Object;//获取容联云IM 服务器设置信息
    getGroupInfo(dataJson: Object, callFunction: Function): void;//获取群组信息
    getGroupMember(dataJson: Object, callFunction: Function): void;//获取群组指定成员
    getGroupMembers(dataJson: Object, callFunction: Function): void;//获取群组内所有成员信息
    getUnreadMessageNumber(): Object;//获取未读消息条数
    sendText(dataJson: Object, callFunction: Function): void;//单聊发送文本
    sendImage(dataJson: Object, callFunction: Function): void;//单聊发送图片
    sendGroupText(dataJson: Object, callFunction: Function): void;//群聊发送文本
    sendGroupImage(dataJson: Object, callFunction: Function): void;//群聊发送图片





}

declare module 'RlyIm' {
    export = rlyim;
}

var rlyim: RlyIm;

