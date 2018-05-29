import * as jsbeautify from 'js-beautify';
import { TextDocument, Range, FormattingOptions, TextEdit, Position } from 'vscode-languageserver-types';
import { LanguageModes } from '../modes/languageModes';

export function format(
  languageModes: LanguageModes,
  document: TextDocument,
  formatRange: Range,
  formattingOptions: FormattingOptions
) {

  const content: string = document.getText() || '',
    beautyContent = beatify(content);

  let formatted;

  const result: TextEdit[] = [];

  if (beautyContent) {
    // 定制自己的格式化代码
    formatted = beautyContent
      .replace(/\<[ ]+\!\[CDATA\[/, '<![CDATA[') // 处理cdata
      .replace(/\]\][ ]+\>/, ']]>') // 处理cdata
      .replace(/\)[\r]?\n[ ]*\./g, ').'); // 处理).func形式的数据被换行
    const formatteds = formatted.split('\n');
    /* 多个分号格式化后的结果是排成一行，不符合习惯，处理为每个分号都换行，比如：
    原始代码：
    var alp = require('Alipay);
    alp.pay();

    经过beatify格式化后的代码会排成一行：
    var alp = require('Alipay); alp.pay();

    修正后：
    var alp = require('Alipay);
    alp.pay();
    */
    const FOR_RE = /for[ ]*\([^\)]+\)/g;
    for (let i = 0, len = formatteds.length; i < len; i++) {
      const line = formatteds[i];
      if (line.match(FOR_RE)) {
        continue;
      }
      const gaps = line.split('; ');
      if (gaps.length > 1) {
        let spaces = '';
        gaps[0].replace(/[ ]+/, function (s: string) {
          spaces = s;
          return s;
        });
        for (let j = 1, l = gaps.length; j < l; j++) {
          gaps[j] = '\n' + spaces + gaps[j];
        }
      }
      formatteds[i] = gaps.join(';');
    }
    formatted = formatteds.join('\n');

    const start = Position.create(0, 0);
    const end = Position.create(document.lineCount - 1, (content.split('\n').pop()||'').length);
    const range = Range.create(start, end);

    result.push(TextEdit.replace(range, formatted));

    return result;
  }


  const mode = languageModes.getMode('uiml');

  if(mode && mode.format){
    return mode.format(document, formatRange, formattingOptions);
  }

  const embeddedModeRanges = languageModes.getModesInRange(document, formatRange);
  const embeddedEdits: TextEdit[] = [];

  embeddedModeRanges.forEach(range => {
    if (range.mode && range.mode.format) {
      const edits = range.mode.format(document, range, formattingOptions);
      for (const edit of edits) {
        embeddedEdits.push(edit);
      }
    }
  });

  return embeddedEdits;

}


function beatify(documentContent: string) {

  const beatiFunc = jsbeautify.html;
  if (!beatiFunc) {
    return;
  }

  const beutifyOptions: HTMLBeautifyOptions = {
    indent_size: 4,
    indent_char: ' ',
    indent_with_tabs: false,
    eol: '\n',
    end_with_newline: false,
    preserve_newlines: true,
    max_preserve_newlines: 10,
    brace_style: 'collapse',
    wrap_line_length: 0
  };

  return beatiFunc(documentContent, beutifyOptions);
}