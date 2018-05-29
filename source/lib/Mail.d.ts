
interface Mail {
    getImapFolders(jsonData: Object, callbackFun: Function): void;//Imap协议获取邮箱包含文件夹信息
    fetchImapMessages(jsonData: Object, callbackFun: Function): void;//Imap协议获取所有邮件邮件头信息
    fetchImapUids(jsonData: Object, callbackFun: Function): void;//Imap协议获取所有邮件uid
    receiveImapBasicMessages(jsonData: Object, callbackFun: Function): void;//Imap协议收取所有邮件并获取邮件基础信息
    receiveImapBasicMessagesByUidRange(jsonData: Object, callbackFun: Function): void;//Imap协议收取指定区间uid邮件并获取邮件基础信息
    receiveImapBasicMessagesByUids(jsonData: Object, callbackFun: Function): void;//Imap协议收取指定uid列表的邮件并获取邮件基础信息
    receiveImapBasicMessagesByNums(jsonData: Object, callbackFun: Function): void;//Imap协议收取指定序号列表邮件并获取邮件基础信息
    receiveImapBasicMessagesByNumRange(jsonData: Object, callbackFun: Function): void;//Imap协议收取指定区间内邮件并获取邮件基础信息

    receiveImapMessageByUid(jsonData: Object, callbackFun: Function): void;//Imap协议收取指定uid邮件并获取详细信息
    downloadImapAttachment(jsonData: Object, callbackFun: Function): void;//Imap协议下载附件并保存
    sendMessage(jsonData: Object, callbackFun: Function);//Smtp标准协议发送邮件
    sendXPlusMessage(jsonData: Object, callbackFun: Function): void;//连接XPlus邮件服务器使用自定义接口发送邮件



}

declare module 'Mail' {
    export = mail;
}

var mail: Mail;

