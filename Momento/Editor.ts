import {IMemento} from './Memento';

export interface IEditor {
  text: string;

  setText(text: string): void;

  restore(memento: IMemento | undefined): void;
}

export class Editor implements IEditor {
  text: string = "";

  setText(text: string): void {
    this.text = text;
  }

  restore(memento: IMemento): void {
    this.text = memento.text;
  }
}
