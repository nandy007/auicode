
interface Console {
    setFilePath(filePath: string): void;//设置日志文件保存路径
    getFilePath(): string;//获取日志文件保存路径
    debug(log: string): void;//调试日志输出
    log(log: string): void;//标准日志输出
    info(log: string): void;//信息日志输出
    warn(log: string): void;//告警日志输出
    error(log: string): void;//错误日志输出
}

declare module 'Console' {
    export = console;
}

var console: Console;


