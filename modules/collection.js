const bookList = document.querySelector('.listNav');
const addBook = document.querySelector('.addNav');
const contact = document.querySelector('.contactNav');
const listSection = document.querySelector('.for-list');
const addSection = document.querySelector('.for-add');
const contactSection = document.querySelector('.for-contact');
const form = document.querySelector('form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

const onload = () => {
  listSection.style.display = 'block';
  contactSection.style.display = 'none';
  addSection.style.display = 'none';
};

const listCall = () => {
  listSection.style.display = 'block';
  contactSection.style.display = 'none';
  addSection.style.display = 'none';
  bookList.classList.add('active');
  addBook.classList.remove('active');
  contact.classList.remove('active');
};

const addBookCall = () => {
  listSection.style.display = 'none';
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
  bookList.classList.remove('active');
  addBook.classList.add('active');
  contact.classList.remove('active');
  title.focus();
};

const contactCall = () => {
  listSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'block';
  bookList.classList.remove('active');
  addBook.classList.remove('active');
  contact.classList.add('active');
};

export {
  bookList,
  addBook,
  contact,
  listSection,
  addSection,
  contactSection,
  form,
  title,
  author,
  onload,
  listCall,
  addBookCall,
  contactCall,
};