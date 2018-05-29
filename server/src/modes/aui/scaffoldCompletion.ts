import { CompletionList, CompletionItemKind, InsertTextFormat, CompletionItem } from 'vscode-languageserver-types';

export function doScaffoldComplete(): CompletionList {
  const topLevelCompletions: CompletionItem[] = [
    {
      label: 'page root node',
      documentation: 'aui implicit node',
      kind: CompletionItemKind.Snippet,
      insertTextFormat: InsertTextFormat.Snippet,
      insertText: `<page>
\t\${0}
</page>
`
    },
//     {
//       label: 'scaffold',
//       documentation: 'Scaffold <ui>, <script> and <style>',
//       kind: CompletionItemKind.Snippet,
//       insertTextFormat: InsertTextFormat.Snippet,
//       insertText: `<ui>
// \t\${0}
// </ui>

// <script>
// export default {

// }
// </script>

// <style>

// </style>
// `
//     },
    {
      label: 'ui template with html',
      documentation: 'Scaffold <ui> with html',
      kind: CompletionItemKind.Snippet,
      insertTextFormat: InsertTextFormat.Snippet,
      insertText: `<ui>
\t\${0}
</ui>
`
    },
//     {
//       label: 'ui template with pug',
//       documentation: 'Scaffold <ui> with pug',
//       kind: CompletionItemKind.Snippet,
//       insertTextFormat: InsertTextFormat.Snippet,
//       insertText: `<ui type="pug">
// \t\${0}
// </ui>
// `
//     },
    {
      label: 'script with JavaScript',
      documentation: 'Scaffold <script> with JavaScript',
      kind: CompletionItemKind.Snippet,
      insertTextFormat: InsertTextFormat.Snippet,
      insertText: `<script>
export default {
\t\${0}
}
</script>
`
    },
//     {
//       label: 'script with TypeScript',
//       documentation: 'Scaffold <script> with TypeScript',
//       kind: CompletionItemKind.Snippet,
//       insertTextFormat: InsertTextFormat.Snippet,
//       insertText: `<script type="ts">
// import Aui from 'aui'
// export default Aui.extend({
// \t\${0}
// })
// </script>
// `
//     },
    {
      label: 'style with CSS',
      documentation: 'Scaffold <style> with CSS',
      kind: CompletionItemKind.Snippet,
      insertTextFormat: InsertTextFormat.Snippet,
      insertText: `<style>
\${0}
</style>
`
    },
//     {
//       label: 'style with CSS (scoped)',
//       documentation: 'Scaffold <style> with CSS (scoped)',
//       kind: CompletionItemKind.Snippet,
//       insertTextFormat: InsertTextFormat.Snippet,
//       insertText: `<style scoped>
// \${0}
// </style>
// `
//     },
    {
      label: 'style with scss',
      documentation: 'Scaffold <style> with scss',
      kind: CompletionItemKind.Snippet,
      insertTextFormat: InsertTextFormat.Snippet,
      insertText: `<style type="scss">
\${0}
</style>
`
    },
//     {
//       label: 'style with scss (scoped)',
//       documentation: 'Scaffold <style> with scss (scoped)',
//       kind: CompletionItemKind.Snippet,
//       insertTextFormat: InsertTextFormat.Snippet,
//       insertText: `<style type="scss" scoped>
// \${0}
// </style>
// `
//     },
    {
      label: 'style with less',
      documentation: 'Scaffold <style> with less',
      kind: CompletionItemKind.Snippet,
      insertTextFormat: InsertTextFormat.Snippet,
      insertText: `<style type="less">
\${0}
</style>
`
    },
//     {
//       label: 'style with less (scoped)',
//       documentation: 'Scaffold <style> with less (scoped)',
//       kind: CompletionItemKind.Snippet,
//       insertTextFormat: InsertTextFormat.Snippet,
//       insertText: `<style type="less" scoped>
// \${0}
// </style>
// `
//     },
    {
      label: 'style with sass',
      documentation: 'Scaffold <style> with sass',
      kind: CompletionItemKind.Snippet,
      insertTextFormat: InsertTextFormat.Snippet,
      insertText: `<style type="sass">
\${0}
</style>
`
    },
//     {
//       label: 'style with sass (scoped)',
//       documentation: 'Scaffold <style> with sass (scoped)',
//       kind: CompletionItemKind.Snippet,
//       insertTextFormat: InsertTextFormat.Snippet,
//       insertText: `<style type="sass" scoped>
// \${0}
// </style>
// `
//     },
    {
      label: 'style with postcss',
      documentation: 'Scaffold <style> with postcss',
      kind: CompletionItemKind.Snippet,
      insertTextFormat: InsertTextFormat.Snippet,
      insertText: `<style type="postcss">
\${0}
</style>
`
    },
//     {
//       label: 'style with postcss (scoped)',
//       documentation: 'Scaffold <style> with postcss (scoped)',
//       kind: CompletionItemKind.Snippet,
//       insertTextFormat: InsertTextFormat.Snippet,
//       insertText: `<style type="postcss" scoped>
// \${0}
// </style>
// `
//     },
    {
      label: 'style with stylus',
      documentation: 'Scaffold <style> with stylus',
      kind: CompletionItemKind.Snippet,
      insertTextFormat: InsertTextFormat.Snippet,
      insertText: `<style type="stylus">
\${0}
</style>
`
    },
//     {
//       label: 'style with stylus (scoped)',
//       documentation: 'Scaffold <style> with stylus (scoped)',
//       kind: CompletionItemKind.Snippet,
//       insertTextFormat: InsertTextFormat.Snippet,
//       insertText: `<style type="stylus" scoped>
// \${0}
// </style>
// `
//     }
  ];

  return {
    isIncomplete: false,
    items: topLevelCompletions
  };
}
