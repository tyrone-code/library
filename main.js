let bookArrObjects = [];

const container = document.querySelector(".container");

let addNewBook = document.getElementById("new-book");

// let initiateUserPrompts = function (callback) {

//   console.log("clicked!");
// };

let getUserInput = function (callback) {
  let titleBook = prompt("title");
  let authorBook = prompt("author");
  let pagesBook = prompt("pages");
  callback(titleBook, authorBook, pagesBook);
};
// addBookToLibrary(titleBook, authorBook, pagesBook);
function addBookToLibrary(title, author, pages) {
  let p = new Book(title, author, pages); // here we create instance
  bookArrObjects.push(p);
}

// addBookToLibrary(titleBook, authorBook, pagesBook);

addNewBook.addEventListener("click", display);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// addBookToLibrary(titleBook, authorBook, pagesBook); IS THE CALLBACK

// addBookToLibrary(titleBook, authorBook, pagesBook);
// addBookToLibrary("1984", "George Orwell", 328);
// addBookToLibrary("Art of war", "Sun tzu", 260);

// Creating objects using the constructor function
//e.g parameters of addbookToLibrary //titler-user          //author-user    //pages-user

function display() {
  getUserInput(addBookToLibrary);
  bookArrObjects.forEach((item) => {
    const box = document.createElement("div");
    const boxForImg = document.createElement("div");

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
    boxForImg.appendChild(img);
    box.appendChild(boxForImg);
    container.appendChild(box);
    // empty the array
    bookArrObjects = [];
  });
}
