// Array to hold book objects
let bookArrObjects = [];

// Get references to DOM elements
let container = document.querySelector(".container");
let addNewBook = document.getElementById("new-book");
let deleteCard = null;
let confirm = document.getElementById("confirm");
let checkBox = document.getElementById("readBook?")



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


function displayModal() {
  dialog.showModal();

  

}

function displayCard(){
    getUserInput(addBookToLibrary);
  bookArrObjects.forEach((item) => {
    const box = document.createElement("div");
    const yes = document.createElement("img");
    yes.id = "yes"
    yes.setAttribute("src", "/images/yes.svg");
    const no = document.createElement("img");
    no.id = "no"
    no.setAttribute("src", "/images/no.svg");
 
 
    const img = document.createElement("img");
    box.className = "card";
    img.classList.add("delete", "bounce");
    img.setAttribute("src", "/images/delete.svg");
    const list = document.createElement("p");
    const read = document.createElement("p");
    read.innerText = "Read Status"
     read.className = "read"
    list.innerText = `
     Title - ${item.title}
     Author -  ${item.author}
     Pages - ${item.pages}
    `;
    box.appendChild(list);
    box.appendChild(read);
    box.appendChild(img)
    // box.appendChild(yes)
    if (checkBox.checked === true){
      box.appendChild(yes)
      yes.style.display = "block"
    }else {
      box.appendChild(no)
      no.style.display = "block"

    }

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
    dialog.close("book-details")
}


// Event listeners for button clicks
addNewBook.addEventListener("click", displayModal);
confirm.addEventListener("click", displayCard)

// ------------------------------------------------------------------------//


// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("book-details");
});




// function change() {
//   var img1 = "http://placehold.it/350x150",
//       img2 = "http://placehold.it/200x200";
//   var imgElement = document.getElementById('test');
  
//   imgElement.src = (imgElement.src === img1)? img2 : img1;
// }

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Book.prototype.change = function() {
//   return this.firstName + " " + this.lastName
// };

// const myFather = new Person("John", "Doe", 50, "blue");
// document.getElementById("demo").innerHTML =
// "My father is " + myFather.name(); 