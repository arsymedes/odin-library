document.querySelector(".new-book").addEventListener("click", function() {
	document.querySelector('.popup').style.display = "grid";
});

document.querySelector('#cancel').addEventListener("click", function() {
	document.querySelector('.popup').style.display = "none";
});


let myLibrary = [
  {
    "title": "The Hobbit",
    "author": "J.R.R Tolkien",
    "pages": 304,
    "read": false
  },
  {
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "pages": 443,
    "read": true
  },
  {
    "title": "Introduction to Electrodynamics",
    "author": "David J. Griffiths",
    "pages": 620,
    "read": true
  },
  {
    "title": "Quintessential Quintuplets",
    "author": "Negi Haruba",
    "pages": 2800,
    "read": true
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read) return `${this.title} by ${this.author}, ${this.pages} pages, finished reading`;
    else return `${this.title} by ${this.author}, ${this.pages} pages, finished reading`;
  }
}

function addBookToLibrary(event, title, author, pages, read) {
  event.preventDefault();
  myLibrary[myLibrary.length] = new Book(title, author, pages, read);
  document.forms[0].reset();
}

const bookContainer = document.querySelector(".book-container")

function displayBook(list) {
  bookHTML = ``
  for (let [index, book] of list.entries()) {
    msg = ""
    toggleUnread = ""
    if (book["read"]) {
      msg = "Read"
    } else {
      msg = "Unread"
      toggleUnread = "toggle-unread"
    }

    bookHTML += `<div class="book" data-book="${index}"><div class="big-text">${book["title"]}</div><div class="small-text">${book["author"]}</div><div class="small-text">${book["pages"]} Pages</div><button class="toggle-read ${toggleUnread}">${msg}</button><button class="remove-book">Remove</button></div>`
  }
  bookContainer.innerHTML = bookHTML
  document.querySelectorAll('.remove-book').forEach((element) => {
    element.addEventListener("click", () => {
      num = element.parentElement.dataset.book;
      myLibrary.splice(num, 1);
      displayBook(myLibrary)
    })
  })

  document.querySelectorAll(".toggle-read").forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("toggle-unread")
      num = element.parentElement.dataset.book
      if (element.classList.contains("toggle-unread")) {
        myLibrary[num]["read"] = false
      } else {
        myLibrary[num]["read"] = true
      }
      displayBook(myLibrary)
    })
  })
}

displayBook(myLibrary)

document.querySelector('button[type="submit"]').addEventListener("click", (event) => {
  addBookToLibrary(event, document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, document.querySelector('input[name="read"]:checked').value);
  displayBook(myLibrary);
})


