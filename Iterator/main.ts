import {Book, IBook} from "./Book";
import {BookNameIterator} from "./Iterator";

const bookCollection: IBook[] = [
  new Book("Author 1", "Book 1", 2021),
  new Book("Author 3", "Book 2", 2018),
  new Book("Author 2", "Book 3", 2025),
];

const iterator = new BookNameIterator(bookCollection);

console.log(iterator.getCurrent());
console.log(iterator.next());