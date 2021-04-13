let myLibrary = [
  new Book("Hello world", "The world", 1970, 1000),
  new Book("Goobye world", "The world", 2038, 2000)
];

function Book(title, author, year, pages) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showBooks(library) {
  function createCell(parent, text) {
    let cell = document.createElement("td");
    cell.innerHTML = text;
    parent.appendChild(cell);
  }
  bookShelfContent.innerHTML = '';
  library.forEach((book, index) => {
    let bookDOM = document.createElement("tr");
    bookDOM.dataset.index = index;
    createCell(bookDOM, book.title);
    createCell(bookDOM, book.author);
    createCell(bookDOM, book.year);
    createCell(bookDOM, book.pages);
    createCell(bookDOM, book.read);
    createCell(bookDOM, '<a class="delete" href="#">X</a>');
    bookShelfContent.appendChild(bookDOM);
  });
}

function deleteBooks(el) {
  if(el.classList.contains('delete')) {
    let currentRow = el.parentElement.parentElement;
    let currentIndex = Number(currentRow.dataset.index);
    myLibrary.slice(currentIndex, 1);
    showBooks(myLibrary);
  }
}

function addBookHandler(event) {
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const year = inputYear.value;
  const pages = inputPages.value;
  //const read = inputRead.checked;

  const book = new Book(title, author, year, pages);

  addBookToLibrary(book);
  showBooks(myLibrary);
}

document.addEventListener("DOMContentLoaded", (event) => {
  showBooks(myLibrary);
  inputButton.addEventListener("click", addBookHandler);

  bookShelfContent.addEventListener('click', (e) => {
    deleteBooks(e.target);
    });
});
