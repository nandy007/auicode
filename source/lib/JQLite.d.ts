

interface IJQLite {

	// 基础
	isElement(): boolean;
	elementType(): string;
	is(status:string): boolean;

	// 选择器
	add(el:IJQLite): IJQLite;
	get(index:number): IJQLite;
	childs(index?:number): IJQLite;
	children(index?:number): IJQLite;
	parent(): IJQLite;
	find(selector:string): IJQLite;
	first(): IJQLite;
	last(): IJQLite;
	before($el:IJQLite): IJQLite;
	after($el:IJQLite): IJQLite;
	next(selector:string): IJQLite;
	prev(selector:string): IJQLite;
	siblings(selector:string): IJQLite;
	empty(): IJQLite;
	remove(): IJQLite;
	append(el: any): IJQLite;
	replaceWith(el: any): IJQLite;
	appendTo(el: any): IJQLite;
	insertAfter(el: any): IJQLite;
	insertBefore(el: any): IJQLite;
	replaceTo(el: any): IJQLite;
	clone(isDeep?:boolean): IJQLite;



	// 操作
	textContent(text?:string): any;
	attrs(prop?:string, val?:any): any;
	html(content?:string): any;
	text(text?:string): any;
	val(val?:any): any;
	css(prop:any, val?:any): any;
	attr(attrName?:string, attrVal?:any): any;
	prop(attrName?:string, attrVal?:any): any;
	removeAttr(prop:string): any;
	hasAttr(prop:string): boolean;
	hasClass(className:string): boolean;
	addClass(className:string): IJQLite;
	removeClass(className:string): IJQLite;
	data(key:string, val?:any): any;
	show(): any;
	hide(): any;


	// 工具
	each(cb:Function): IJQLite;
	on(evt:string, selector?:string, callback?:Function): IJQLite;
	trigger(evt:string, params?:any): IJQLite;
	off(evt:string, callback?:Function): IJQLite;
	exe(funcName:any, params?:any): any;
	ready(cb:Function):any;
	animate(props:any, duration?:number, easing?:string, complete?:Function): any;



	//扩展 MVVM
	render(data: Object): any;
}

interface JQLiteStatic {
	(selector: string, context?: any): IJQLite;

	each(obj:Object, callback:Function, context?:Object): void;
	type(obj:any): string;
	isArray(obj:any): boolean;
	isFunction(obj:any): boolean;
	isEmptyObject(obj:any): boolean;
	isPlainObject(obj:any): boolean;
	extend(target:Object, source:Object, isDeep?:boolean): Object;

	ajax(settings: any): void;


	util:IJQLiteUtil;
}

interface IJQLiteUtil{
	consoleLevel: string;
	each(obj:any, callback?:Function, context?:any): void;
	isString(obj:any): boolean;
	isBoolean(obj:any): boolean;
	isNumber(obj:any): boolean;
	isNotNaNNumber(obj:any): boolean;
	isObject(obj:any): boolean;
	isEvent(obj:any): boolean;
	clearObject(obj:Object): void;
	trim(str:string): string;
	removeSpace(str:string): string;
	hasOwn(obj:Object, key:string): boolean;
	copy(obj:Object): Object;
	defObj(o:Object, prop:string, getter?:Function, setter?:Function): void;
	defRec(object:Object, property:string, value:any):void;
	copyArray(arr:Array<any>): Array<any>;
	mergeArray(ta:Array<any>, na:Array<any>): Array<any>;
	log(text:string): void;
	warn(text:string): void;
	error(text:string): void;
	paramTransForm(str:string): Object;
	sync(callback?:Function): void;
}


declare module 'JQLite' {
	export = JQLite;
}


interface JQLite extends JQLiteStatic{}
