const myLibrary = [];

class Book {
    constructor(author, title, pageNumber, read) {
        this.author = author;
        this.title = title;
        this.pageNumber = pageNumber;
        this.read = read;
    }
}

const newBook = document.getElementById("newBook");
newBook.addEventListener("click", addBook);

const testBook = new Book("Blabla", "Muhkuh", 280, false);
myLibrary.push(testBook);

const testBook2 = new Book("Blub", "John Cena", 12, false);
myLibrary.push(testBook2);

displayCards(myLibrary);

function createCard(book) {
    const container = document.getElementById("container");
    const card = document.createElement("div");
    card.classList.add("card");
    const newTitle = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newPages = document.createElement("div");
    const newRead = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");

    newTitle.innerText = "Title: " + book.title;
    newAuthor.innerText = "Author: " + book.author;
    newPages.innerText = "Pages: " + book.pageNumber;
    newRead.innerText = "Read: " + book.read;
    deleteButton.innerText = "Delete";

    card.appendChild(newTitle);
    card.appendChild(newAuthor);
    card.appendChild(newPages);
    card.appendChild(newRead);
    card.appendChild(deleteButton);

    container.appendChild(card);
}

function displayCards(bookArray) {
    for (let i = 0; i < bookArray.length; i++) {
        createCard(bookArray[i]);
    }
    addDeleteListener();
}

function clearAllCards() {
    const toClear = document.getElementById("container");

    while (toClear.firstChild) {
        toClear.removeChild(toClear.lastChild);
    }
}

function addBook() {
    const author = prompt("Enter author:");
    const title = prompt("Enter title:");
    const pages = prompt("Enter page number:");
    if (isNaN(pages) || author == null || title == null || pages == null) {
        return;
    }
    const toAdd = new Book(author, title, pages, false);
    myLibrary.push(toAdd);
    clearAllCards();
    displayCards(myLibrary);
}

function removeBook() {
    console.log("test");
}

function addDeleteListener() {
    const allDeleteButtons = document.querySelectorAll(".deleteButton");
    allDeleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let titleToRemove = button.parentElement.firstChild.textContent.replace("Title: ", "");
            console.log(titleToRemove);

            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].title == titleToRemove) {
                    myLibrary.splice(i, 1);
                }
            }

            clearAllCards();
            displayCards(myLibrary);
        });
    });
}