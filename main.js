const container = document.querySelector(".container");

const bookArrObjects = [
  {
    author: "George Orwell",
    pages: 803,
    title: "1984",
  },
  { author: "Various", pages: 1200, title: "Bible" },
];

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
