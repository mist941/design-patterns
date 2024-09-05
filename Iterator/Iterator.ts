import {IBook} from "./Book";

export abstract class BookIterator {
  collection: IBook[];
  currentIndex: number = 0;

  protected constructor(collection: IBook[]) {
    this.collection = collection;
  }


  hasNext(): boolean {
    return this.currentIndex < this.collection.length - 1;
  }

  next(): IBook {
    this.currentIndex += 1;
    return this.collection[this.currentIndex];
  }

  getCurrent(): IBook {
    return this.collection[this.currentIndex];
  }

}

export class BookAuthorIterator extends BookIterator {
  constructor(collection: IBook[]) {
    super(collection.sort((a, b) => a.author.localeCompare(b.author)));
  }
}

export class BookNameIterator extends BookIterator {
  constructor(collection: IBook[]) {
    super(collection.sort((a, b) => a.name.localeCompare(b.name)));
  }
}

export class BookPublicationYearIterator extends BookIterator {
  constructor(collection: IBook[]) {
    super(collection.sort((a, b) => a.publicationYear - b.publicationYear));
  }
}