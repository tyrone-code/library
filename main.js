// Constructor function to create book objects
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Array to hold book objects
let bookArrObjects = [];

// Get references to DOM elements
let container = document.querySelector(".container");
let addNewBook = document.getElementById("new-book");
let confirm = document.getElementById("confirm");
let cancelButton = document.getElementById("cancel");
let checkBox = document.getElementById("readBook?");
let dialog = document.getElementById("book-details");
dialog.returnValue = "book-details";

// Function to get user input and call the callback function
let getUserInput = function (callback) {
  let titleBook = document.getElementById("title").value;
  let authorBook = document.getElementById("author").value;
  let pagesBook = document.getElementById("pages").value;
  callback(titleBook, authorBook, pagesBook);
};

// Function to add a book to the library
function addBookToLibrary(title, author, pages) {
  let p = new Book(title, author, pages); // Create a new Book instance
  bookArrObjects.push(p);
}

// Function to display the modal dialog
function displayModal() {
  dialog.showModal();
}

// Function to display a card for each book in the library
function displayCard() {
  getUserInput(addBookToLibrary);

  bookArrObjects.forEach((item) => {
    const box = document.createElement("div");
    const yes = document.createElement("img");
    yes.id = "yes";
    yes.setAttribute("src", "../images/yes.svg");
    let no = document.createElement("img");
    no.id = "no";
    no.setAttribute("src", "../images/no.svg");
    const img = document.createElement("img");
    box.className = "card";
    img.classList.add("delete", "bounce");
    img.setAttribute("src", "../images/delete.svg");
    const list = document.createElement("p");
    const read = document.createElement("p");
    read.innerText = "Read Status";
    read.className = "read";
    list.innerText = `
     Title - ${item.title}
     Author - ${item.author}
     Pages - ${item.pages}
    `;
    box.appendChild(list);
    box.appendChild(read);
    box.appendChild(img);
    
    if (checkBox.checked) {
      box.appendChild(yes);
      yes.style.display = "block";
    } else {
      box.appendChild(no);
      no.style.display = "block";
    }

    container.appendChild(box);
    deleteCard = document.querySelectorAll(".delete");
    bookArrObjects = [];

    yes.addEventListener("click", function() {
      box.appendChild(no);
      yes.style.display = "none";
      no.style.display = "block";
    });

    no.addEventListener("click", function() {
      box.appendChild(yes);
      yes.style.display = "block";
      no.style.display = "none";
    });
  });

  deleteCard.forEach(item => {
    item.addEventListener('click', function() {
      let redTrashCanParent = this.parentNode; // which will be card
      redTrashCanParent.remove();
    });
  });
  
  dialog.close("book-details");
}

// Event listeners for button clicks
addNewBook.addEventListener("click", displayModal);
confirm.addEventListener("click", displayCard);
cancelButton.addEventListener("click", () => {
  dialog.close("book-details");
});
