let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read) return `${this.title} by ${this.author}, ${this.pages} pages, finished reading`
    else return `${this.title} by ${this.author}, ${this.pages} pages, finished reading`
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary[myLibrary.length] = new Book(title, author, pages, read);
}

document.querySelector(".new-book").addEventListener("click", () => {
	document.querySelector('.popup').style.display = "grid";
});

document.querySelector('#cancel').addEventListener("click", () => {
	document.querySelector('.popup').style.display = "none";
});

// addBookToLibrary("Sapiens", "Harari", 500, true)
// addBookToLibrary("Naruto", "Kishimoto", 500, false)
// console.log(myLibrary)