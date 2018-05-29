import * as fs from 'fs';
import * as path from 'path';

import * as vscode from 'vscode';
import { languages, workspace, ExtensionContext } from 'vscode';
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
  RevealOutputChannelOn
} from 'vscode-languageclient';
import { getGeneratedGrammar } from './grammar';
import {
  DocumentColorRequest, DocumentColorParams, ColorPresentationRequest, ColorPresentationParams
} from 'vscode-languageserver-protocol/lib/protocol.colorProvider.proposed';

export function activate(context: ExtensionContext) {
  /**
   * Custom Block Grammar generation command
   */
  context.subscriptions.push(
    vscode.commands.registerCommand('auicode.generateGrammar', () => {
      const customBlocks: { [k: string]: string } =
        workspace.getConfiguration().get('auicode.grammar.customBlocks') || {};
      try {
        const generatedGrammar = getGeneratedGrammar(
          path.resolve(context.extensionPath, 'syntaxes/aui.json'),
          customBlocks
        );
        fs.writeFileSync(path.resolve(context.extensionPath, 'syntaxes/aui-generated.json'), generatedGrammar, 'utf-8');
        vscode.window.showInformationMessage('Successfully generated aui grammar. Reload VS Code to enable it.');
      } catch (e) {
        vscode.window.showErrorMessage(
          'Failed to generate aui grammar. `auicode.grammar.customBlocks` contain invalid language values'
        );
      }
    })
  );

  /**
   * Aui Language Server Initialization
   */
  const serverModule = context.asAbsolutePath(path.join('server', 'out', 'auiServerMain.js'));
  const debugOptions = { execArgv: ['--nolazy', '--inspect=6006'] };

  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
  };

  const documentSelector = ['aui', 'bui', 'bcp'];
  const config = workspace.getConfiguration();

  const clientOptions: LanguageClientOptions = {
    documentSelector,
    synchronize: {
      // the settings to synchronize
      configurationSection: ['auicode', 'emmet', 'html', 'javascript', 'typescript', 'prettier', 'stylusSupremacy']
    },
    initializationOptions: {
      config
    },
    revealOutputChannelOn: RevealOutputChannelOn.Never
  };

  // Create the language client and start the client.
  const client = new LanguageClient('aui', 'Aui Language Server', serverOptions, clientOptions);
  const disposable = client.start();
  context.subscriptions.push(disposable);
  const isDecoratorEnabled = workspace.getConfiguration().get<boolean>('auicode.colorDecorators.enable');

  if (isDecoratorEnabled) {
    client.onReady().then(registerColorProvider);
  }

  function registerColorProvider() {
    const colorSubscription = languages.registerColorProvider(documentSelector, {
      provideDocumentColors(doc) {
        const params: DocumentColorParams = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(doc)
        };
        return client.sendRequest(DocumentColorRequest.type, params)
          .then(symbols => symbols.map(symbol => {
            const range = client.protocol2CodeConverter.asRange(symbol.range);
            const color = new vscode.Color(symbol.color.red, symbol.color.green, symbol.color.blue, symbol.color.alpha);
            return new vscode.ColorInformation(range, color);
          }));
      },
      provideColorPresentations(color, context) {
        const params: ColorPresentationParams = {
          textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(context.document),
          color,
          range: client.code2ProtocolConverter.asRange(context.range)
        };
        return client.sendRequest(ColorPresentationRequest.type, params)
          .then(presentations => presentations.map(p => {
            const presentation = new vscode.ColorPresentation(p.label);
            presentation.textEdit =
              p.textEdit && client.protocol2CodeConverter.asTextEdit(p.textEdit);
            presentation.additionalTextEdits =
              p.additionalTextEdits && client.protocol2CodeConverter.asTextEdits(p.additionalTextEdits);
            return presentation;
          }));
      }
    });
    context.subscriptions.push(colorSubscription);

  }
}

