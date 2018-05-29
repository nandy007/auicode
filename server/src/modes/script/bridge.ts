// this bridge file will be injected into TypeScript service
// it enable type checking and completion, yet still preserve precise option type

export const moduleName = 'aui-editor-bridge';

export const fileName = 'aui-temp/aui-editor-bridge.ts';

export const oldContent = `
import Aui from 'aui';
export interface GeneralOption extends Aui.ComponentOptions<Aui> {
  [key: string]: any;
}
export default function bridge<T>(t: T & GeneralOption): T {
  return t;
}`;

export const content = `
import Aui from 'aui';
const func = Aui.extend;
export default func;
`;
