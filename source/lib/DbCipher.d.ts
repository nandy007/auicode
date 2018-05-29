
interface DbCipher {
    // 同步方法
    open(jsonData: Object): boolean;//打开或新建并打开指定名称数据库
    isOpen(dbName: string): boolean;//判断指定路径文件是否存在
    reKey(jsonData: Object): boolean;// 修改已打开加密数据库密码
    close(dbName: string): boolean;//关闭已打开数据库
    tableExists(jsonData: Object): boolean;//数据库中指定数据表是否存在
    dropTable(jsonData: Object): boolean;//在数据库中移除指定数据表
    getTableColumns(jsonData: Object): Array<string>;//在数据库中获取指定数据表列名数组
    execute(jsonData: Object): boolean;//执行sql语句
    executes(jsonData: Object): boolean;// 执行多条sql语句
    query(jsonData: Object): Array<Object>;//执行查询语句
    beginTransaction(dbName: string): boolean;//数据库中开启事务
    commitTransaction(dbName: string): boolean;//数据库中提交事务
    rollbackTransaction(dbName: string): boolean;//数据库中回滚事务
    //异步方法
    encryptDbAsyn(jsonData: Object, callFunction: Function): void;//根据输入密码对未加密的sqlite数据库文件进行加密
    openAsyn(jsonData: Object, callFunction: Function): void;//打开或新建并打开指定名称数据库
    isOpenAsyn(dbName: string, callFunction: Function): void;//判断数据库是否已经打开
    reKeyAsyn(jsonData: Object, callFunction: Function): void;//修改已打开加密数据库密码
    closeAsyn(dbName: string, callFunction: Function): void;//关闭已打开数据库
    tableExistsAsyn(jsonData: Object, callFunction: Function): void;// 数据库中指定数据表是否存在
    dropTableAsyn(jsonData: Object, callFunction: Function): void;// 在数据库中移除指定数据表
    getTableColumnsAsyn(jsonData: Object, callFunction: Function): void;// 在数据库中获取指定数据表列名数组
    executeAsyn(jsonData: Object, callFunction: Function): void;//执行sql语句
    executesAsyn(jsonData: Object, callFunction: Function): void;// 执行多条sql语句
    queryAsyn(jsonData: Object, callFunction: Function): void;//执行查询语句
    beginTransactionAsyn(dbName: string, callFunction: Function): void;//数据库中开启事务
    commitTransactionAsyn(dbName: string, callFunction: Function): void;// 数据库中提交事务
    rollbackTransactionAsyn(dbName: string, callFunction: Function): void;//数据库中回滚事务
}

declare module 'DbCipher' {
    export = dbcipher;
}

var dbcipher: DbCipher;

