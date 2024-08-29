// Array to hold book objects
let bookArrObjects = [];

// Get references to DOM elements
let container = document.querySelector(".container");
let body = document.getElementsByTagName("BODY")[0];

let addNewBook = document.getElementById("new-book");
let deleteCard = null;

// Constructor function to create book objects
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Function to get user input and call the callback function
let getUserInput = function (callback) {
  let titleBook = prompt("title");
  let authorBook = prompt("author");
  let pagesBook = prompt("pages");
  callback(titleBook, authorBook, pagesBook);
};

// Function to add a book to the library
function addBookToLibrary(title, author, pages) {
  let p = new Book(title, author, pages); // Create a new Book instance
  bookArrObjects.push(p);
}

// Function to display books and clear the array
function display() {
  getUserInput(addBookToLibrary);

 // Get user input and add to library
  bookArrObjects.forEach((item) => {
    const box = document.createElement("div");
    
    const img = document.createElement("img");
    box.className = "card";
    img.classList.add("delete", "bounce");
    img.setAttribute("src", "/images/delete.svg");
    const list = document.createElement("p");
    list.innerText = `
     Title: ${item.title}

     Author:  ${item.author}

     Pages: ${item.pages}
    `;
    box.appendChild(list);
    box.appendChild(img)
    container.appendChild(box);
    deleteCard = document.querySelectorAll(".delete");
    bookArrObjects = [];
 
  });

  deleteCard.forEach(item => {
    console.log(item)
    item.addEventListener('click', function() {
      let redTrashCanParent = this.parentNode // which will  be card
      redTrashCanParent.remove()
      
      })
    })
  // Optionally, you can empty the array if you want to start fresh
  // bookArrObjects = [];
}
console.log(bookArrObjects)

// Function to handle book removal (currently a placeholder)
function removeCard() {
  console.log("hello World!");
}

// Event listeners for button clicks
addNewBook.addEventListener("click", display);

