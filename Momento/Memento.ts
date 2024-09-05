export interface IMemento {
  text: string;
  version: number;
}

export class Memento implements IMemento {
  text: string;
  version: number;

  constructor(text: string, version: number) {
    this.text = text;
    this.version = version;
  }
}
