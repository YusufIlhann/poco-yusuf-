var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

for (var i = 0; i < books.length; i++) {
  var bookP = document.createElement("p");
  var bookDescription = document.createTextNode(
    books[i].title + " by " + books[i].author
  );
  bookP.appendChild(bookDescription);
  document.body.appendChild(bookP);
}

var books = [
  {
    title: "The Design of EveryDay Things",
    img: "http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg",
    author: "Don Norman",
    alreadyRead: true,
  },
  {
    title: "The Most Human Human",
    img: "http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg",
    author: "Brian Christian",
    alreadyRead: false,
  },
];

var bookList = document.createElement("ul");
for (var i = 0; i < books.length; i++) {
  var bookItem = document.createElement("li");
  var bookImg = document.createElement("img");
  bookImg.src = books[i].img;
  bookItem.appendChild(bookImg);
  var bookDescription = document.createTextNode(
    books[i].title + " by " + books[i].author
  );
  bookItem.appendChild(bookDescription);
  if (books[i].alreadyRead) {
    bookItem.style.color = "blue";
  }
  bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);
