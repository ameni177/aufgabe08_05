const books = [
    {
        title: "Das Parfum",
        author: "Patrick Süskind",
        year: 1985,
        genres: ["Roman", "Historischer Roman", "Thriller"]
    },
    {
        title: "Der kleine Prinz",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        genres: ["Kinderbuch", "Philosophisches Märchen"]
    },
    {
        title: "Harry Potter und der Stein der Weisen",
        author: "J.K. Rowling",
        year: 1997,
        genres: ["Fantasy", "Jugendliteratur"]
    }
]
console.log("*******Alle Autoren*******")
books.forEach(function(b){

    console.log(b.author);
})
console.log("*******Jeweils das erste aufgelistete Genre*******")
books.forEach(function(b){

    console.log(b.genres[0]);
})

//books.forEach(function(b){
  //  if (b.title === "Das Parfum"){console.log(b.genres);} 
//})
console.log("*******Alle Genres von “Das Parfum”*******")
books.forEach(function(book) {
    if (book.title === "Das Parfum") {
        book.genres.forEach(function(genre) {
            console.log(genre);
        });
    }
});


console.log("*******Alle Buchtitel, die mit “D” anfangen!*******")
books.forEach(function(b){

    if (b.title[0].startsWith("D")){console.log(b.title);} 
})