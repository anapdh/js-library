let myLibrary = [
  new Book("Hello world", "The world", 1970),
  new Book("Goobye world", "The world", 2038)
];

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
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
  library.forEach(book => {
    let bookDOM = document.createElement("tr");
    createCell(bookDOM, book.title);
    createCell(bookDOM, book.author);
    createCell(bookDOM, book.year);
    createCell(bookDOM, book.read);
    bookShelfContent.appendChild(bookDOM);
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  showBooks(myLibrary);

  inputButton.addEventListener("click", (event) => {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const year = inputYear.value;
    //const read = inputRead.value;

    const book = new Book(title, author, year);

    addBookToLibrary(book);
    showBooks(myLibrary);
  });
});
