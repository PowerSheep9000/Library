const myLibrary = [];

class Book {
    constructor(author, title, pageNumber, read) {
        this.author = author;
        this.title = title;
        this.pageNumber = pageNumber;
        this.read = read;
    }
}

const testBook = new Book("Blabla", "Muhkuh", 280, false);
myLibrary.push(testBook);

const testBook2 = new Book("Blub", "John Cena", 12, false);
myLibrary.push(testBook2);

console.log(myLibrary);

displayCards(myLibrary);

function createCard(book) {
    const container = document.getElementById("container");
    const card = document.createElement("div");
    card.classList.add("card");
    const newTitle = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newPages = document.createElement("div");
    const newRead = document.createElement("div");

    newTitle.innerText = "Title: " + book.title;
    newAuthor.innerText = "Author: " + book.author;
    newPages.innerText = "Pages: " + book.pageNumber;
    newRead.innerText = "Read: " + book.read;

    card.appendChild(newTitle);
    card.appendChild(newAuthor);
    card.appendChild(newPages);
    card.appendChild(newRead);

    container.appendChild(card);
}

function displayCards(bookArray) {
    for (let i = 0; i < bookArray.length; i++) {
        createCard(bookArray[i]);
    }
}