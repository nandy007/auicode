
interface DiskCache {
    setItem(key: string, value: any): void;// 磁盘缓存数据
    getItem(key: string): any;// 读取磁盘缓存数据
    removeItem(key: string): any;// 移除磁盘缓存数据
}

declare module 'DiskCache' {
    export = diskcache;
}

var diskcache: DiskCache;

