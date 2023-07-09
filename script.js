let modal = document.getElementById("add-book-modal");
let library = [];
const bookBtn = document.getElementById("add-book-btn");
const closeMdl = document.getElementById("close-modal");
const submitBtn = document.getElementById("submit-btn");

const authorInp = document.getElementById("author-input");
const titleInp = document.getElementById("title-input");
const numPagesInp = document.getElementById("num-pages-input");
const readStatus = document.getElementById("read-selector");

let form = document.getElementById("add-book-form");

function Book(author, title, numPages, read) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
}

function addBookToLibrary() {
  const book = new Book(
    authorInp.value,
    titleInp.value,
    numPagesInp.value,
    readStatus.value
  );

  library.push(book);
  console.log(library);
}

//delete-button on books card to remove book

submitBtn.addEventListener("click", function () {
  addBookToLibrary();
  // diplay added book to page

  form.reset(); // clear input boxes
});

bookBtn.addEventListener("click", function () {
  console.log("Hello");
  modal.style.display = "block";
});

closeMdl.addEventListener("click", function () {
  modal.style.display = "none";
  console.log("close");
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
