import Date from './modules/date.js';
import Book from './modules/UI.js';
import * as module from './modules/collection.js';

window.addEventListener('load', Date());

window.addEventListener('load', module.onload);

document.addEventListener('DOMContentLoaded', Book.displayBooks);

module.bookList.addEventListener('click', module.listCall);
module.contact.addEventListener('click', module.contactCall);
module.addBook.addEventListener('click', module.addBookCall);

module.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const book = new Book(module.title.value, module.author.value);

  Book.addBookToList(book);
  Book.addBook(book);
  Book.checkEmpty();

  module.form.reset();
  module.title.focus();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  Book.removeBook(e.target.parentElement.parentElement);
  Book.deleteBook(e.target);
});