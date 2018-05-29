
interface XmlDocument {
    createElementByString(xml: string): XmlElement;//通过xml文本创建XmlElement对象
    createElementByFile(xmlFilePath: string): XmlElement;//读取xml文件创建XmlElement对象
}


interface XmlElement {

    getElements(): Array<XmlElement>;// 获取所有子节点
    getElementsByTag(tagName: string): Array<Object>;//获取指定Tag的所有子节点
    getTag(): string;//获取Xml对象Tag名
    getAttrs(): Object;//获取节点所有属性
    getAttr(attrName: string): string;//获取节点属性值
    hasAttr(attrName: string): boolean;//节点是否具有该属性
    getText(): string;//获取节点文本内容
}

declare module 'XmlDocument' {
    export = xmldocument;
}

declare module 'XmlElement' {
    export = xmlelement;
}

var xmldocument: XmlDocument;

var xmlelement: XmlElement;


