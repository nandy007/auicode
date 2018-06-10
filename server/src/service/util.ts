
import { DocumentContext } from 'vscode-html-languageservice';
import { TextDocument } from 'vscode-languageserver-types';

import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

let workspacePath: string;
// 页面中使用res引入文件的正则，匹配出引入的文件路径
const RESRE = /res\:(.+)/;
// 设置工作空间根目录
export function initWorkspacePath(url: string | null | undefined){
    workspacePath = url || '';

    // hackJSLib();
}

export function getWorkspacePath(){
    return workspacePath;
}

const JSAPI_D_TS = path.join(__dirname, '../../../source/lib/jsapi.d.ts');// 定义bui文件中的js代码提示的依赖文件
const JSCONFIG = path.join(__dirname, '../../../source/lib/jsconfig.json');// 定义bui文件中的js代码提示的依赖文件

export function hackJSLib(){
    if(!isBridgeProject() || !fs.existsSync(JSAPI_D_TS)){
        return;
    }

    const typingsPath = path.join(workspacePath, 'typings'),
        jsapiPath = path.join(typingsPath, 'jsapi.d.ts'),
        jsconfigPath = path.join(workspacePath, 'jsconfig.json');

        if(!fs.existsSync(typingsPath)){
            fs.mkdirSync(typingsPath);
        }

        fs.writeFileSync(jsapiPath, fs.readFileSync(JSAPI_D_TS, 'utf8'));
        fs.writeFileSync(jsconfigPath, fs.readFileSync(JSCONFIG, 'utf8'));
}


export function isBridgeProject(): boolean{
    let rs = false;

    const settingPath = path.join(workspacePath, '.bbuilder/bbuilder.json');

    if(fs.existsSync(settingPath)){
        const config = parseJSON(fs.readFileSync(settingPath, 'utf8'));
        if(config && config.project_type==='bridge'){
            rs = true;
        }
    }

    return rs;
}

function restoreFilePath(oPath: string): string{
    oPath = oPath.replace(preStr, '').replace(/\%3A/i, ':');
    return oPath;
}

/*
转换路径，将各种形式的地址（res:开头、require.config配置的路径、相对路径等）
转为本地绝对路径（file://开头）
*/
export function transformPath(oUrl: string, documentContext: DocumentContext){
    //"file:///e%3A/developer/workspace/bbuilder/myapp/src/myapp/ddd.png"
    let nUrl, match;

    if(match = oUrl.match(/(http|https)\:(.+)/)){
        // 网络地址不处理
        nUrl = oUrl;
    }else if((match = oUrl.match(RESRE)) && workspacePath){
        // res:开头的地址处理
        nUrl = addPrePath(getBridgeSrcPath(match[1]));
    }else{
        // require.config文件中的配置处理
        nUrl = getFromConfig(oUrl);

        if(!nUrl){
            // 非require.config配置则认为是普通的地址，按照vscode默认的方法处理
            nUrl = documentContext.resolveReference(oUrl);
            if(!fs.existsSync(restoreFilePath(nUrl))){
                nUrl = null;
            }
        }

    }

    return nUrl;
}

// 将路径补全，一般写的地址都是相对于src的，补全就是把src之前的路径加上
export function getBridgeSrcPath(url:string, isRes?:boolean){
    let match;
    if(isRes && (match = url.match(RESRE))){
        url = match[1];
    }
    return workspacePath?path.join(workspacePath, 'src', url) : url;
}

const platform = os.platform(),
    isWin = !(platform==='darwin' || platform==='linux'),
    preStr = 'file://' + (isWin?'/':'');

// 加前缀，win和mac有所不同，需要区别处理/开头的为mac的
export function addPrePath(url: string){
    if(!fs.existsSync(url)){
        return '';
    }
    return preStr + url;
}

const jsonCache = {
    data: new Map(),
    time : new Map()
};
// 获取json文件，并且将内容转为json对象，这里主要是处理支持代码注释
export function getJSON(url: string){
    const jsonStr = fs.readFileSync(url, 'utf-8');
    try{
        return parseJSON(jsonStr);
    }catch(e){
        return null;
    }
}
// 将从文件读取的json数据存到缓存，当有缓存的时候优先读取缓存，并更新缓存，下次读取从新的缓存读取
function getJSONFromCache(url: string){
    let cache = jsonCache.data.get(url);
    if(!cache){
        jsonCache.data.set(url, cache = getJSON(url));
    }else{
        if(jsonCache.time.get(url)){
            clearTimeout(jsonCache.time.get(url));
        }
        jsonCache.time.set(url, setTimeout(() => {
            jsonCache.data.set(url, cache = getJSON(url));
            clearTimeout(jsonCache.time.get(url));
            jsonCache.time.delete(url);
        }, 1500));
    }
    return cache;
}
// 格式化从require.config的配置文件中读取到的路径地址
// 主要是${component}地址和res地址
function formatePath(url: string){
    let match;
    if(match = url.match(RESRE)){
        return getBridgeSrcPath(match[1]);
    }else{
        try{
            const comRootPath = url.replace(/\$\{(component)\:([^\}]+)\}/, function(s, s1, s2){
                return path.join(workspacePath, s1, s2);
            });
            if(comRootPath===url){
                return null;
            }
            const configJSON = getJSONFromCache(path.join(comRootPath, 'component.json'));
            const comIndexPath = configJSON.index;
            return path.join(comRootPath, comIndexPath);
        }catch(e){
            return null;
        }

    }
}
// 从bridge配置文件中读取配置信息
export function getFromConfig(url:string, unPre?:boolean){
    if(!workspacePath) {
        return null;
    }
    try{
        const appJSON = getJSONFromCache(getBridgeSrcPath('app.json'));
        if(!appJSON.require) {
            return null;
        }
        const requireJSON = getJSONFromCache(getBridgeSrcPath(appJSON.require, true));

        for(var t in requireJSON){
            const typeJSON = requireJSON[t];
            for(var k in typeJSON){
                if(k===url){
                    const ret = formatePath(typeJSON[k]);
                    return ret ? (unPre?ret:addPrePath(ret)) : null;
                }
            }
        }

    }catch(e){
        return null;
    }

    return null;
}
// style标签中import代码的正则，匹配出引入的css文件路径
const CSS_RE = /\@import[ ]+url[ ]*\([ ]*['"]([^'"]+)['"][ ]*\)/g;
// 通过路径获取文件内容
function getContent(url: string){
    if(fs.existsSync(url)){
        return fs.readFileSync(url, 'utf-8');
    }
    return null;
}
// 获取bui页面中引入的css文件内容
export function getReferCss(doc:TextDocument){

    const text = doc.getText();

    const contents: string[] = [];
    text.replace(CSS_RE, function (s: string, s1: string){
        let url, content;
        if(s1.match(RESRE)){
            url = getBridgeSrcPath(s1, true);
        }else{
            url = getBridgeSrcPath(s1);
        }

        if(content = getContent(url)){
            contents.push(content);
        }else{
            url = getFromConfig(s1, true);
            content = getContent(url || '');
        }

        if(content){
            contents.push(content);
        }

        return url || '';
    });
    return contents.join('\n');
}
// 将引入的css文件内容添加到页面中
export function addRefCss(doc:TextDocument){
    return [doc.getText(), '<style>', getReferCss(doc), '</style>'].join('\n');
    //return doc.getText().replace('</style>', '\n'+getReferCss(doc)+'\n</style>');
}
// 将引入的css文件内容添加到页面中
export function appendRefCss(doc:TextDocument){
    return [doc.getText(), getReferCss(doc)].join('\n');
}
// 调试代码用，服务端代码是另起进程的，所以console.log没法查看日志，调试的时候可以写文件查看
export function log(content:string, isAppend?:boolean){
    if(isAppend){
        fs.writeFileSync('e:/bblog.txt', content, {flag:'a'});
    }else{
        fs.writeFileSync('e:/bblog.txt', content);
    }
}

// 解析json字符串为json对象，支持代码注释
export function parseJSON(str:any):any{
    return (new Function(['try{', 'return {str:'+str+'}.str;', '}catch(e){return null;}'].join('\n')))();
}