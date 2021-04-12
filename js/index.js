let myLibrary = [
  new Book("Hello world", "The world", 1970),
  new Book("Goobye world", "The world", 2038)
];

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.read = false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
