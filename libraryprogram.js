var library = {
    name: "Binary and Noble",
    rating: 5.0,
    booksOnShelf: ["Structure and Interpretation", "Intro to Algorithms", "Clean Code", "Pragmatic Programmer"],
    booksCheckedOut: [],
    booksCheckedIn: [],
    bookGenre: "Computer Science", 
    
    unCheckedBooks: function() { 
        return this.booksOnShelf.length; 
     }, checkedOutbooks: function () {
        return this.booksCheckedOut.length;
    },   checkedInBooks: function() {
        return this.booksCheckedIn.length;
    }, totalBooksAvailable: function () {
        return this.booksCheckedIn.length + this.booksOnShelf.length;
    }, checkBookOut: function() {  

        if ( this.totalBooksAvailable() > 0 ){
            
          var randomBook = this.booksOnShelf[Math.floor(Math.random()*this.booksOnShelf.length)];

       //  /// this.booksCheckedOut.unshift(this.booksOnShelf.splice(this.booksOnShelf.indexOf(randomBook),1)[0]);

       this.booksCheckedOut = this.booksCheckedOut.concat(this.booksOnShelf.splice(this.booksOnShelf.indexOf(randomBook),1));

        }
    },
        
        checkBookIn: function() {
            if (this.booksOnShelf() > 0 ) {
                var randomBook = this.booksOnShelf[Math.floor(Math.random()*this.booksOnShelf.length)];
            this.booksOnShelf.unshift(this.booksCheckedOut.splice(this.booksOnShelf.indexOf(randomBook),1)[0]);
        }
    }
};



