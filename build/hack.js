var path = require('path'),
	fs = require('fs'),
	glob = require('glob');


(function hackNodeModules(){
	var writeFile = function(srcFilePath, filePath){
		if(!fs.existsSync(srcFilePath) || !fs.existsSync(filePath)) return;
		var readable = fs.createReadStream(srcFilePath);
		var writable = fs.createWriteStream(filePath);
		readable.pipe(writable);
		console.log('覆盖文件：'+filePath);
	};

	var needs = [
		{
			srcPath : path.join(__dirname, '../source/hack/languageFacts.js'),
			filePath : path.join(__dirname, '../../css-language-features/server/node_modules/vscode-css-languageservice/lib/umd/services/languageFacts.js')
		},
		{
			srcPath : path.join(__dirname, '../source/hack/browsers.js'),
			filePath : path.join(__dirname, '../../css-language-features/server/node_modules/vscode-css-languageservice/lib/umd/data/browsers.js')
		},
		// {
		// 	srcPath : path.join(__dirname, '../source/hack/htmlTags.js'),
		// 	filePath :  path.join(__dirname, '../../html-language-features/server/node_modules/vscode-html-languageservice/lib/umd/parser/htmlTags.js')
		// },
		{
			srcPath : path.join(__dirname, '../source/hack/languageFacts.js'),
			filePath : path.join(__dirname, '../server/node_modules/vscode-css-languageservice/lib/umd/services/languageFacts.js')
		},
		{
			srcPath : path.join(__dirname, '../source/hack/browsers.js'),
			filePath : path.join(__dirname, '../server/node_modules/vscode-css-languageservice/lib/umd/data/browsers.js')
		},
		{
			srcPath : path.join(__dirname, '../source/hack/htmlTags.js'),
			filePath :  path.join(__dirname, '../server/node_modules/vscode-html-languageservice/lib/umd/parser/htmlTags.js')
		}
	];

	for(var i=0, len=needs.length;i<len;i++){
		var need = needs[i];
		writeFile(need.srcPath, need.filePath);
	}
})();



(function createDTS(){
    var jslibPath =  path.join(__dirname, '../source/lib');
	var jsapiFilePath = path.join(jslibPath, 'jsapi.d.ts');

	var clearFile = function(){
		fs.writeFileSync(jsapiFilePath, '');
	};

	var allInOne = function(){
		glob.sync('*.ts', { cwd: jslibPath })
			.forEach(f => {
			if(f!=='jsapi.d.ts'){
				fs.writeFileSync(jsapiFilePath, '//'+f+'\n'+fs.readFileSync(path.join(jslibPath, f), 'utf8'), {flag:'a'});
			}
		});
	};

	clearFile();

	allInOne();

})();

