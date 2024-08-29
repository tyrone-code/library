// Array to hold book objects
let bookArrObjects = [];

// Get references to DOM elements
let container = document.querySelector(".container");
let addNewBook = document.getElementById("new-book");
let deleteCard = null;
let confirm = document.getElementById("confirm");

const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("book-details");
dialog.returnValue = "book-details";



// Constructor function to create book objects
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Function to get user input and call the callback function
let getUserInput = function (callback) {
  let titleBook = document.getElementById("title").value
  let authorBook = document.getElementById("author").value
  let pagesBook = document.getElementById("pages").value
  callback(titleBook, authorBook, pagesBook);
};

// Function to add a book to the library
function addBookToLibrary(title, author, pages) {
  let p = new Book(title, author, pages); // Create a new Book instance
  bookArrObjects.push(p);
}


// Function to display books and clear the array
function displayModal() {
  dialog.showModal();

 // Get user input and add to library
  

}

function displayCard(){
  getUserInput(addBookToLibrary);

  bookArrObjects.forEach((item) => {
    const box = document.createElement("div");
    
    const img = document.createElement("img");
    box.className = "card";
    img.classList.add("delete", "bounce");
    img.setAttribute("src", "/images/delete.svg");
    const list = document.createElement("p");
    list.innerText = `
     Title - ${item.title}
     Author -  ${item.author}
     Pages - ${item.pages}
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
}


// Event listeners for button clicks
addNewBook.addEventListener("click", displayModal);
confirm.addEventListener("click", displayCard)

// ------------------------------------------------------------------------//


// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("book-details");
});
