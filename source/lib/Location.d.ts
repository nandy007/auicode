
interface Location {
    start(jsonData: Object, callFunction: Function): void;//启动系统单次定位
}

declare module 'Location' {
    export = location;
}

var location: Location;


