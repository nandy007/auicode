
import {
  getLanguageService,
  LanguageService as HTMLLanguageService,
  HTMLDocument
} from 'vscode-html-languageservice';

import { DocumentContext } from '../../service/DocumentContext';
import { TextDocument } from 'vscode-languageserver-types';
import { LanguageModelCache, getLanguageModelCache } from '../languageModelCache';
import { LanguageMode } from '../languageModes';
import { AuiDocumentRegions } from '../embeddedSupport';
import { NULL_HOVER } from '../nullMode';

export function getUIMLMode(documentRegions: LanguageModelCache<AuiDocumentRegions>): LanguageMode {
  const htmlLanguageService = getLanguageService();
  return getHTMLMode('uiml', htmlLanguageService, documentRegions);
}

function merge(src: any, dst: any): any {
  for (const key in src) {
    if (src.hasOwnProperty(key)) {
      dst[key] = src[key];
    }
  }
  return dst;
}


function getHTMLMode(
  languageId: string,
  htmlLanguageService: HTMLLanguageService,
  documentRegions: LanguageModelCache<AuiDocumentRegions>
): LanguageMode {

  const htmlDocuments = 
    getLanguageModelCache<HTMLDocument>(10, 60, document => htmlLanguageService.parseHTMLDocument(document));
  let config: any = {};

  return {
    getId() {
      return languageId;
    },
    configure(c) {
      // 空实现处理
      // languageService.configure(c);
      config = c;
    },
    doValidation(document) {
      // const embedded = embeddedDocuments.get(document);
      return [];
    },
    doComplete(document, position) {
      const options = config && config.suggest;
      return htmlLanguageService.doComplete(document, position, htmlDocuments.get(document), options);
    },
    doHover(document, position) {
      return htmlLanguageService.doHover(document, position, htmlDocuments.get(document)) || NULL_HOVER;
    },
    findDocumentHighlight(document, position) {
      return htmlLanguageService.findDocumentHighlights(document, position, htmlDocuments.get(document));
    },
    findDocumentLinks(document: TextDocument, documentContext: DocumentContext) {
      return htmlLanguageService.findDocumentLinks(document, documentContext);
    },
    findDocumentSymbols(document) {
      return htmlLanguageService.findDocumentSymbols(document, htmlDocuments.get(document));
    },
    format(document, currRange, formattingOptions) {
      let formatSettings = config && config.format;
      if (!formatSettings) {
        formatSettings = formattingOptions;
      } else {
        formatSettings = merge(formattingOptions, merge(formatSettings, {}));
      }
      return htmlLanguageService.format(document, currRange, formatSettings);
    },
    onDocumentRemoved(document) {
      htmlDocuments.onDocumentRemoved(document);
    },
    dispose() {
      htmlDocuments.dispose();
    }
  };
}