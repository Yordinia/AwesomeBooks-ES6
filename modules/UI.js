export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

   static displayBooks = () => {
     const books = Book.getBooks();
     if (Book.checkEmpty()) return;
     books.forEach((book) => Book.addBookToList(book));
   }

  static addBookToList = (book) => {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>"${book.title}" by ${book.author}</td>
      <td><a href="#" class="btn btn-outline-primary delete">remove</a></td>
      `;

    list.appendChild(row);
  }

  static deleteBook = (el) => {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static getBooks = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [{
      title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',
    }, {
      title: 'Jane Eyre', author: 'Charlotte Bronte',
    }];
    return books;
  }

  static addBook = (book) => {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook = (removed) => {
    const books = Book.getBooks();
    const m = document.querySelectorAll('tr');
    let counter = 0;
    for (let i = counter; i < m.length; i += 1) {
      if (m[i] === removed) {
        counter = i;
        break;
      }
    }
    books.splice(counter, 1);
    localStorage.setItem('books', JSON.stringify(books));
    Book.checkEmpty();
  }

  static checkEmpty = () => {
    const books = Book.getBooks();
    if (books.length === 0) {
      const isEmptyMessage = document.createElement('div');
      isEmptyMessage.innerText = 'Add books to your list, there are no books to display';
      document.querySelector('#book-list').appendChild(isEmptyMessage);
      return true;
    }

    if (document.querySelector('#book-list div')) document.querySelector('#book-list').removeChild(document.querySelector('#book-list div'));
    return false;
  }
}