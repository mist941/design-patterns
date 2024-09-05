import {IMemento, Memento} from './Memento';

export interface IEditor {
  text: string;

  setText(text: string): void;

  createMemento(version: number): IMemento;

  restore(memento: IMemento | undefined): void;
}

export class Editor implements IEditor {
  text: string = "";

  setText(text: string): void {
    this.text = text;
  }

  createMemento(version: number): IMemento {
    return new Memento(this.text, version);
  }

  restore(memento: IMemento): void {
    this.text = memento.text;
  }
}
