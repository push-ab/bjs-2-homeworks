 class PrintEditionItem {
     constructor(name, releaseDate, pagesCount) {
         this.name = name;
         this.releaseDate = releaseDate;
         this.pagesCount = pagesCount;
         this.state = 100;
         this.type = null;
     }

     fix() {
         this.state *= 1.5;
     }

     set state(value) {
         if (value < 0) {
             this._state = 0;
         } else if (value > 100) {
             this._state = 100;
         } else {
             this._state = value;
         }
     }

     get state() {
         return this._state;
     }
 }

 class Library {
     constructor(name) {
         this.name = name;
         this.books = [];
     }

     addBook(book) {
         if (book.state > 30) {
             this.books.push(book);
         }
     }

     findBookBy(type, value) {
         for (let i = 0; i < this.books.length; i++) {
             if (this.books[i][type] === value) {
                 return this.books[i];
             }
         }

         return null;
     }

     giveBookByName(bookName) {
         for (let i = 0; i < this.books.length; i++) {
             if (this.books[i].name === bookName) {
                 this.books.splice(i, 1);
                 return this.books[i];
             }
         }

         return null;
     }
 }
