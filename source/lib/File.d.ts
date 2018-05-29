
interface File {
    isDir(path: string): boolean;//判断指定路径文件是否为文件夹
    fileExist(path: string): boolean;//判断指定路径文件是否存在
    dirExist(path: string): boolean;//判断指定路径目录是否存在
    makeDir(path: string): boolean;//创建指定文件夹
    getFileSize(path: string): number;// 获取指定文件大小
    getFileInfo(path: string): Object;// 获取文件相关信息
    readTextFile(path: string): string;// 读取文本类型文件（同步方式）
    readTextFileAsyn(path: string, callFunction: Function): void;// 读取文本类型文件（异步方式）
    writeTextFile(jsonData: Object, text: string): boolean;// 将字符串写入文本类型文件(同步方式)
    writeTextFileAsyn(jsonData: Object, text: string, callFunction: Function): void;// 将字符串写入文本类型文件（异步方式）
    copyFile(jsonData: Object): boolean;// 拷贝文件（同步方式）
    copyFileAsyn(jsonData: Object, callFunction: Function): void;//拷贝文件（异步方式）
    deleteFile(jsonData: Object): boolean;//删除文件（同步方式）
    deleteFileAsyn(jsonData: Object, callFunction: Function): void;// 删除文件（异步方式）
    moveFile(jsonData: Object): boolean;// 移动文件（同步方式 ）
    moveFileAsyn(jsonData: Object, callFunction: Function): void;// 移动文件（异步方式）
    copyDirAsyn(jsonData: Object, callFunction: Function): void;// 拷贝文件夹（异步方式）
    deleteDirAsyn(jsonData: Object, callFunction: Function): void;//删除文件夹（异步方式）
    moveDirAsyn(jsonData: Object, callFunction: Function): void;//移动文件夹（异步方式）
    listFiles(jsonData: Object): Array<string>;//返回文件夹下的子文件（同步方式）
    listFilesAsyn(jsonData: Object, callFunction: Function): Array<string>;// 返回文件夹下的子文件（异步方式）
    md5(path: string): string;//返回文件md5值
    zip(jsonData: Object, callFunction: Function): void;//压缩文件/文件夹至指定目录
    unZip(jsonData: Object, callFunction: Function): void;// 解压文件至指定路径
    getAbsolutePath(path: string): string;//获取res:开头的本地url地址对应的绝对路径
    encodeByBridge(jsonData: Object, callFunction: Function): void; //对文件进行Bridge提供的加密
    decodeByBridge(jsonData: Object, callFunction: Function): void; //对文件进行Bridge提供的解密

}

declare module 'File' {
    export = file;
}

var file: File;

