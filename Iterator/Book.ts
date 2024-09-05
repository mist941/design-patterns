export interface IBook {
  author: string;
  name: string;
  publicationYear: number;
}

export class Book implements IBook {
  author: string;
  name: string;
  publicationYear: number;

  constructor(author: string, name: string, publicationYear: number) {
    this.author = author;
    this.name = name;
    this.publicationYear = publicationYear;
  }
}