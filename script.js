let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function info() {
    let phrase = this.read ? 'already read' : 'not read yet';
    console.log(this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + phrase)
};


function addBookToLibrary(libraryArray) {

    let newBookTitle = document.getElementById("bookTitle").value;
    let newBookAuthor = document.getElementById("bookAuthor").value;
    let newBookPages = document.getElementById("bookPages").value;
    let newBookRead = document.getElementById("bookReadStatusTrue").checked;

    let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);

    libraryArray.push(newBook);

}


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


        bookCardsHolder.appendChild(bookCard);
    });
}

document.getElementById("formSubmitButton").addEventListener('click', () => {
    addBookToLibrary(myLibrary);
    populateBookCardsHolder(myLibrary);
});

