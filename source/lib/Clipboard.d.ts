
interface Clipboard {
    setData(value: string): void;//设置程序剪切板
    getData(): string;// 读取程序剪切板
}

declare module 'Clipboard' {
    export = clipboard;
}

var clipboard: Clipboard;

