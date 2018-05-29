
interface Pattern {
    enablePattern(): void;//设置启动手势密码锁
    disablePattern(): void;//设置关闭手势密码锁
    isPattern(): boolean;//是否开启手势密码锁
    isSetPatternPassword(): boolean;// 是否已设置成功手势密码
    setPatternTimeout(time: number): void;//设置手势密码锁生效时间，默认5分钟
    getPatternTimeout(): number;//获取手势密码锁生效时间
    setPatternForgetUrl(url: string): void;//设置忘记密码跳转url
    setPatternStyle(jsonData: object): void;//设置手势锁屏界面/设置界面样式
    getPatternStyle(): object;//返回设置的手势锁屏界面/设置界面样式
    openSetPattern(resultCallback: Function): void;//启动设置手势密码界面
    openPattern(successCallback: Function): void;//打开手势锁屏界面
    getPatternMinLength(): number;//获取最短设置密码长度,默认最短4位
    setPatternMinLength(num: number): boolean;//设置最短设置密码长度，若不设置则默认4位

    getPatternCheckNumber(): number;//获取重复输入校验次数,默认5次
    setPatternCheckNumber(num: number): boolean;//设置重复输入校验次数，若不设置则默认5次
    getPatternPassword(): string;//获取当前应用设置的手势密码
    setPatternPassword(password: string): boolean;//设置当前应用插件设置的手势密码
    setPatternLogo(logoPath: string): void;//设置九宫手势密码锁屏界面logo图
    setPatternPrompt(prompt: string): void;//设置九宫手势密码锁屏界面提示语


}

declare module 'Pattern' {
    export = pattern;
}

var pattern: Pattern;

