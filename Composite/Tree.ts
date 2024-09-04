export abstract class TreeItem {
  protected abstract digit: number;

  abstract incrementDigit(): void;

  abstract decrementDigit(): void;
}

export class Leaf extends TreeItem {
  digit: number;

  constructor(digit: number) {
    super();
    this.digit = digit;
  }

  decrementDigit(): void {
    this.digit -= 1;
  }

  incrementDigit(): void {
    this.digit += 1;
  }
}

export class GroupOfLeaf extends TreeItem {
  digit: number;
  private children: TreeItem[] = [];

  constructor(digit: number) {
    super();
    this.digit = digit;
  }

  add(child: TreeItem): GroupOfLeaf {
    this.children.push(child);
    return this;
  }

  incrementDigit() {
    this.digit += 1;
    this.children.forEach((child: TreeItem) => {
      child.incrementDigit();
    });
  }

  decrementDigit() {
    this.digit -= 1;
    this.children.forEach((child: TreeItem) => {
      child.decrementDigit();
    });
  }
}