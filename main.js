const bookArrObjects = [];

const container = document.querySelector(".container");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
function addBookToLibrary(title, author, pages) {
  let p = new Book(title, author, pages); // here we create instance
  bookArrObjects.push(p);
}
// Creating objects using the constructor function

addBookToLibrary("Alice in wonderland", "Lewis carroll", 352);
addBookToLibrary("1984", "George Orwell", 328);
addBookToLibrary("Art of war", "Sun tzu", 260);

bookArrObjects.forEach((item) => {
  const box = document.createElement("div");
  box.className = "card";

  const list = document.createElement("p");

  list.innerText = `
   Title: ${item.title}
  Author:  ${item.author}
   Pages: ${item.pages}
  `;
  box.appendChild(list);

  container.appendChild(box);
});
