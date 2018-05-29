## Aui Language Server

`aui-language-server` is a language server implementation compatible with [`language-server-protocol`](https://github.com/Microsoft/language-server-protocol).

Auicode is the VS Code client consuming `aui-language-server`.

It's possible for other `language-server-protocol` compatible editors to build language server clients that consume VLS.

## Usage

There are two ways to integrate `aui-language-server` into editors:

1. As a global executable.

  Example Client: https://github.com/autozimu/LanguageClient-neovim

  First, install VLS globally.

  ```bash
  npm install aui-language-server -g
  ```

  This will provide you the global `vls` command.

  Then, configure LanguageClient to use `vls`. In this example, we write below configuration into `init.vim`.


  ```vim
  let g:LanguageClient_serverCommands = {
      \ 'aui': ['vls']
      \ }
  ```

2. As a plugin dependency.

  Example: https://github.com/HerringtonDarkholme/atom-aui

  First, install aui-language-server as a local dependency.

  ```bash
  npm install aui-language-server --save
  ```

  Then, require the aui-language-server, this would typically look like:

  ```ts
  class AuiLanguageClient extends AutoLanguageClient {
    startServerProcess () {
      return cp.spawn('node', [require.resolve('aui-language-server/dist/htmlServerMain')])
    }
  }
  ```