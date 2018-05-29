
import {
    TextDocument,
    DocumentLink,
    Range,
    Position
} from 'vscode-languageserver-types';

import { DocumentContext } from './DocumentContext';

import * as util from './util';

function getLinks(arr: Array<DocumentLink>, str: string, offset: number, cb: Function) {

    let match, matchText, reText, reStart, reEnd;

    if((match=str.match(/(res\:)([^'" ;]+)/)) && match.length > 0){
        matchText = reText = match[0];
        reStart = match.index;
        reEnd = (match.index || 0) + reText.length;
    }else if((match=str.match(/((require|url)[ ]*\([ ]*[\'\"])([^\'\"]+)[\'\"][ ]*\)/)) && match.length > 0){
        matchText = match[3];
        reText = match[0];
        reStart = (match.index || 0) + match[1].length;
        reEnd = reStart + match[3].length;
    }else if((match=str.match(/((defaultSrc|icon)[ ]*=[ ]*[\"\'])([^\'\"]+)[\'\"]/)) && match.length > 0){// 自定义属性
        matchText = match[3];
        reText = match[0];
        reStart = (match.index || 0) + match[1].length;
        reEnd = reStart + match[3].length;
    }

    if(!reText){
        return;
    }

    const cbObj = cb(matchText), line = cbObj.line, target = cbObj.target;

    if(target){
        const linkObj = new DocumentLink();
        const start = Position.create(line, reStart || 0);
        const end = Position.create(line, reEnd || 0);
        const range = Range.create(start, end);
        linkObj.range = range;
        linkObj.target = target;

        arr.push(linkObj);
    }

    reEnd = reEnd || 0;

    getLinks(arr, str.substring(reEnd, str.length), reEnd, cb);

}

export function findDocumentLinks(document: TextDocument, documentContext: DocumentContext): DocumentLink[] {
    const text = document.getText();
    const lines = text.split('\n');
    const links: Array<DocumentLink> = [];
    lines.forEach((text, line) => {
        getLinks(links, text, 0, function (matchText: string) {
            return {
                line,
                target: util.transformPath(matchText, documentContext)
            };
        });
    });

    return links;
}