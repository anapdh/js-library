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
  let bookDOM = document.createElement("tr");
  createCell(bookDOM, "My title");
  createCell(bookDOM, "My author");
  createCell(bookDOM, "1996");
  bookShelf.appendChild(bookDOM);
}
