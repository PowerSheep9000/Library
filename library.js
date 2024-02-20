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
    const readButton = document.createElement("button");
    readButton.classList.add("readButton");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

    newTitle.innerText = "Title: " + book.title;
    newAuthor.innerText = "Author: " + book.author;
    newPages.innerText = "Pages: " + book.pageNumber;
    newRead.innerText = "Read: " + book.read;
    deleteButton.innerText = "Delete";
    readButton.innerText = "Read";

    buttonContainer.appendChild(readButton);
    buttonContainer.appendChild(deleteButton);

    card.appendChild(newTitle);
    card.appendChild(newAuthor);
    card.appendChild(newPages);
    card.appendChild(newRead);
    card.appendChild(buttonContainer);

    container.appendChild(card);
}

function displayCards(bookArray) {
    for (let i = 0; i < bookArray.length; i++) {
        createCard(bookArray[i]);
    }
    addReadListener();
    addDeleteListener();
}

function clearAllCards() {
    const toClear = document.getElementById("container");

    while (toClear.firstChild) {
        toClear.removeChild(toClear.lastChild);
    }
}

function addBook() {

    const container = document.getElementById("container");
    const inputForm = document.createElement("form");

    const inputAuthorText = document.createElement("div");
    inputAuthorText.innerText = "Author: ";
    const inputAuthor = document.createElement("textarea");

    const inputTitleText = document.createElement("div");
    inputTitleText.innerText = "Title: ";
    const inputTitle = document.createElement("textarea");

    const inputPagesText = document.createElement("div");
    inputPagesText.innerText = "Number of pages: ";
    const inputPages = document.createElement("textarea");

    const submit = document.createElement("button");
    submit.classList.add("submit");
    submit.innerText = "Submit";

    inputForm.appendChild(inputAuthorText);
    inputForm.appendChild(inputAuthor);
    inputForm.appendChild(inputTitleText);
    inputForm.appendChild(inputTitle);
    inputForm.appendChild(inputPagesText);
    inputForm.appendChild(inputPages);
    inputForm.appendChild(submit);

    container.appendChild(inputForm);

    /*const author = prompt("Enter author:");
    const title = prompt("Enter title:");
    const pages = prompt("Enter page number:");*/
    submit.onclick = function() {
        if (isNaN(inputPages.value) || inputAuthor.value == "" || inputTitle.value == "" || inputPages.value == "") {
            clearAllCards();
            displayCards(myLibrary);
            return;
        } else {
            const toAdd = new Book(inputAuthor.value, inputTitle.value, inputPages.value, false);
            myLibrary.push(toAdd);
        }
        clearAllCards();
        displayCards(myLibrary);
    }
}

function removeBook() {
    console.log("test");
}

function addDeleteListener() {
    const allDeleteButtons = document.querySelectorAll(".deleteButton");
    allDeleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let titleToRemove = button.parentElement.parentElement.firstChild.textContent.replace("Title: ", "");
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

function addReadListener() {
    const allReadButtons = document.querySelectorAll(".readButton");
    allReadButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let titleToRead = button.parentElement.parentElement.firstChild.textContent.replace("Title: ", "");

            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].title == titleToRead) {
                    if (myLibrary[i].read == false) {
                        myLibrary[i]["read"] = true;
                    } else {
                        myLibrary[i]["read"] = false;
                    }
                }
            }

            clearAllCards();
            displayCards(myLibrary);
        });
    });
}