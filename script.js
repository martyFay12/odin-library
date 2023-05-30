let myLibrary = [];
const bookDisplay = document.querySelector(".books");
const bookFormButton = document.querySelector("#display-form-button");
const bookForm = document.querySelector(".book-form");
const formString = `<form>
    <div class="form-group">
    <label for="title">Title:</label
    ><input type="text" name="title" id="title" required />
    </div>
    <div class="form-group">
    <label for="author">Author:</label
    ><input type="text" name="author" id="author" required />
    </div>
    <div class="form-group">
    <label for="pages">Number of Pages:</label
    ><input type="number" name="pages" id="pages" required />
    </div>
    <div class="form-group">
    <fieldset>
        <legend>Have you read this?</legend>
        <div class="radio">
        <input
            type="radio"
            id="yes"
            name="read-or-no"
            value="yes"
            checked
        />
        <label for="yes">Yes</label>
        </div>
        <div class="radio">
        <input type="radio" id="no" name="read-or-no" value="no" />
        <label for="no">No</label>
        </div>
    </fieldset>
    </div>
    <button id="submit-button" type="button">Submit</button>
</form>`;
const template = document.createElement("template");
template.innerHTML = formString;
const formHtml = template.content.firstChild;

bookFormButton.addEventListener("click", displayForm);

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead ? "have read" : "have not read";
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}.`;
};

function addBookToLibrary(book) {
  console.log(book.info());
  if (book instanceof Book) myLibrary.push(book);
  console.log(myLibrary);
  return;
}

function displayBooks() {
  for (let book of myLibrary) {
    // do something with the books...
  }
}

function displayForm() {
  bookForm.appendChild(formHtml);
  const submitButton = document.querySelector("#submit-button");
  submitButton.addEventListener("click", submitBook);
  // submitButton.addEventListener("click", () => (bookForm.textContent = ""));
}

function submitBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const hasRead = document.getElementById("yes").checked;
  // console.log(
  //   "author: " +
  //     author +
  //     " title: " +
  //     title +
  //     " pages: " +
  //     pages +
  //     " has read: " +
  //     hasRead
  // );
  if (title === "") return alert("title is a required field");
  if (author === "") return alert("author is a required field");
  if (pages === "") return alert("pages is a required field");
  addBookToLibrary(new Book(title, author, pages, hasRead));
}
