let myLibrary = [];

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.read = false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
