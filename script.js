let modal = document.getElementById("add-book-modal");
let library = [];

const addbookBtn = document.getElementById("add-book-btn");
const closeMdl = document.getElementById("close-modal");
const submitBtn = document.getElementById("submit-btn");
const deleteBtn = document.getElementById("delete-book-btn");

const authorInp = document.getElementById("author-input");
const titleInp = document.getElementById("title-input");
const numPagesInp = document.getElementById("num-pages-input");
const readStatus = document.getElementsByClassName("switch-input");

let bookAuthor = document.getElementById("book-author");
let bookTitle = document.getElementById("book-title");
let bookNumPages = document.getElementById("book-num-pages");
let bookReadStatus = document.getElementById("book-read-status");

let bookCard = document.getElementById("book-card");

let form = document.getElementById("add-book-form");

let div = document.querySelector(".container");

let index = -1;

//Book constructor
function Book(author, title, numPages, read) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
}

function addBookToLibrary() {
  //Get values from text box to create new book object
  const book = new Book(
    authorInp.value,
    titleInp.value,
    numPagesInp.value,
    readStatus[0].checked ? "yes" : "no"
  );

  library.push(book); //Push book to library array
}

//increment array index
function incrementIndex() {
  index = index + 1;
}

function renderBook() {
  div.innerHTML += `<div id="book-card" class="book"> <p id="book-author">Author:   ${library[index].author}</p> <p id="book-title">Title:  ${library[index].title}</p> <p id="book-num-pages">Number of Pages:   ${library[index].numPages}</p> <p id="book-read-status">Read:   ${library[index].read}</p> 
  <div class="switch-card-div">
 <label for="read-status">Have You Read This book?</label>
  <label class="switch">
    <input
      class="switch-input"
      type="checkbox"
    />
    <span class="switch-label"></span>
    <span class="switch-handle"></span>
  </label> 
  </div>
 <button type="button" id="delete-book-btn" class="deleteBookBtn" onClick="deleteBook(this)"> Delete Book </button> 
  </div>`;
}

function deleteBook(e) {
  e.parentElement.remove(); //delete book card
}

submitBtn.addEventListener("click", function () {
  addBookToLibrary(); // add book to library array
  incrementIndex();
  renderBook(); // diplay added book to page
  form.reset(); // clear input boxes
});

//open modal to add book to array
addbookBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeMdl.addEventListener("click", function () {
  // modal when x on modal clicked
  modal.style.display = "none";
});

window.onclick = function (event) {
  // close modal when clicked anywhere on the page
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
