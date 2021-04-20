  
function Book(title, author, year, pages) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = false;
}

const myLibrary = [
  new Book('Hello world', 'The world', 1970, 1000),
  new Book('Goobye world', 'The world', 2038, 2000),
];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showForm() {
  const f = document.getElementById('bookForm');
  if ((f.style.display || 'none') === 'none') {
    f.style.display = 'block';
  } else {
    f.style.display = 'none';
  }
}

function showBooks(library) {
  function createCell(parent, text) {
    const cell = document.createElement('td');
    cell.innerHTML = text;
    parent.appendChild(cell);
  }
  document.querySelector('#bookShelfContent').innerHTML = '';
  library.forEach((book, index) => {
    const bookDOM = document.createElement('tr');
    bookDOM.dataset.index = index;
    createCell(bookDOM, book.title);
    createCell(bookDOM, book.author);
    createCell(bookDOM, book.year);
    createCell(bookDOM, book.pages);
    createCell(bookDOM, book.read ? 'yes' : 'no');
    createCell(bookDOM, '<a class="toggle-read" href="#">O</a>');
    createCell(bookDOM, '<a class="delete" href="#">X</a>');
    document.querySelector('#bookShelfContent').appendChild(bookDOM);
  });
}

function deleteBooks(el) {
  if (el.classList.contains('delete')) {
    const currentRow = el.parentElement.parentElement;
    const currentIndex = Number(currentRow.dataset.index);
    myLibrary.splice(currentIndex, 1);
  }
}

function toggleRead(el) {
  if (el.classList.contains('toggle-read')) {
    const currentRow = el.parentElement.parentElement;
    const currentIndex = Number(currentRow.dataset.index);
    const book = myLibrary[currentIndex];
    book.read = !book.read;
  }
}

function showAlert(message) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.querySelector('#bookForm');
  container.insertBefore(div, form);
  setTimeout(() => div.remove(), 3000);
}

function addBookHandler() {
  const title = document.querySelector('#inputTitle').value;
  const author = document.querySelector('#inputAuthor').value;
  const year = document.querySelector('#inputYear').value;
  const pages = document.querySelector('#inputPages').value;

  if (title && author && year && pages) {
    const book = new Book(title, author, year, pages);

    addBookToLibrary(book);
    showBooks(myLibrary);
  } else {
    showAlert('Please fill all the fields');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showBooks(myLibrary);
  document
    .querySelector('#inputButton')
    .addEventListener('click', addBookHandler);
  document.getElementById('showInputsBtn').addEventListener('click', showForm);

  document.querySelector('#bookShelfContent').addEventListener('click', (e) => {
    deleteBooks(e.target);
    toggleRead(e.target);
    showBooks(myLibrary);
  });
});