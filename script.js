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


// Placeholder function for functionality to add a new book
function addBookToLibrary() {

    let newBookTitle = document.getElementById("bookTitle").value;
    let newBookAuthor = document.getElementById("bookAuthor").value;
    let newBookPages = document.getElementById("bookPages").value;
    let newBookRead = document.getElementById("bookReadStatusTrue").checked;

    let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);

    
    
}


