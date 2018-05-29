
interface MemCache {
    setItem(key: string, value: any): void;// 内存缓存数据
    getItem(key: string): any;//读取内存缓存数据
    removeItem(key: string): any;//移除内存缓存数据
}

declare module 'MemCache' {
    export = memcache;
}

var memcache: MemCache;

