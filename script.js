let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary(libraryArray) {

    let newBookTitle = document.getElementById("bookTitle").value;
    let newBookAuthor = document.getElementById("bookAuthor").value;
    let newBookPages = document.getElementById("bookPages").value;
    let newBookRead = (document.getElementById("bookReadStatus").value === "true") ? true : false; 

    let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);

    libraryArray.push(newBook);

}

// This function could use some refactoring? Not sure if we can 
// break it up into constituent functions.
//
// One of the more inefficient things being done is that all bookcards
// are re-created whenever any books are added in or deleted from the
// list- need to consider how I can remove or add in new cards without
// having to recreate all cards on screen.
function populateBookCardsHolder(libraryArray) {
    
    let bookCardsHolder = document.querySelector(".bookCards");

    // Clear out existing book cards before re-populating 
    while (bookCardsHolder.firstChild) {
        bookCardsHolder.removeChild(bookCardsHolder.firstChild);
    }

    libraryArray.forEach((book, index) => {

        let bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
        bookCard.classList.add(index);

        let bookCardTitle = document.createElement('p');
        bookCardTitle.textContent = book.title;
        bookCardTitle.classList.add('bookCardTitle');
        bookCard.appendChild(bookCardTitle);

        let bookCardAuthor = document.createElement('p');
        bookCardAuthor.textContent = book.author;
        bookCardAuthor.classList.add('bookCardAuthor');
        bookCard.appendChild(bookCardAuthor);

        let bookCardPages = document.createElement('p');
        bookCardPages.textContent = book.pages;
        bookCardPages.classList.add('bookCardPages');
        bookCard.appendChild(bookCardPages);

        let bookCardRead = document.createElement('p');
        bookCardRead.textContent = book.read ? "Already read" : "Not Read Yet";
        bookCardRead.classList.add('bookCardRead');
        bookCard.appendChild(bookCardRead);

        let bookCardReadStatusButton = document.createElement('button');
        bookCardReadStatusButton.textContent = book.read ? "Mark Unread" : "Mark Read";
        bookCardReadStatusButton.style.backgroundColor = book.read ? "#ff6161" : "#69ffbb";
        bookCardReadStatusButton.classList.add('bookCardReadStatusButton');
        bookCardReadStatusButton.addEventListener('click', () => {
            if (book.read) {
                book.read = false;
                bookCardReadStatusButton.textContent = "Mark Read";
                bookCardReadStatusButton.style.backgroundColor = "#ff6161";
            } else {
                book.read = true;
                bookCardReadStatusButton.textContent = "Mark Unread";
                bookCardReadStatusButton.style.backgroundColor = "#69ffbb";
            }

            populateBookCardsHolder(myLibrary);
        });
        bookCard.appendChild(bookCardReadStatusButton);

        let bookCardRemoveButton = document.createElement('button');
        bookCardRemoveButton.textContent = "Remove book";
        bookCardRemoveButton.classList.add('bookCardRemoveButton');
        bookCardRemoveButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            populateBookCardsHolder(myLibrary);
        });
        bookCard.appendChild(bookCardRemoveButton);


        bookCardsHolder.appendChild(bookCard);
    });
}


// Functionality to display/hide new book form
document.getElementById("addBookButton").addEventListener('click', () => { 
    if (document.querySelector(".newBookForm").hidden) {
        document.querySelector(".newBookForm").hidden = false;
        document.getElementById("addBookButton").textContent = "Hide Form";
    } else {
        document.querySelector(".newBookForm").hidden = true;
        document.getElementById("addBookButton").textContent = "Add Book to List";
    }
});


document.getElementById("formSubmitButton").addEventListener('click', () => {
    addBookToLibrary(myLibrary);
    populateBookCardsHolder(myLibrary);
    document.getElementById("addBookButton").click();
});




// Default webpage with existing book cards and hidden form
document.querySelector(".newBookForm").hidden = true;
myLibrary.push(new Book('The Great Gatsby', 'F. Scott Fitzgerald', '218', true));
myLibrary.push(new Book('1984', 'George Orwell', '328', false));
populateBookCardsHolder(myLibrary);
