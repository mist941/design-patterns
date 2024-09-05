import {IMemento, Memento} from './Memento';
import {IEditor} from './Editor';

export interface IMementoHandler {
  editor: IEditor;
  history: IMemento[];

  createMemento(editor: IEditor): void;

  restore(version: number): void;
}

export class MementoHandler implements IMementoHandler {
  editor: IEditor;
  history: IMemento[] = [];

  constructor(editor: IEditor) {
    this.editor = editor;
  }

  createMemento(): void {
    const lastVersion: number = this.history.at(-1)?.version ?? 0;
    this.history.push(new Memento(this.editor.text, lastVersion + 1));
  }

  restore(version: number): void {
    const memento = this.history.find(h => h.version === version);
    this.editor.restore(memento);
  }
}
