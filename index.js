
const express = require("express");

//database
const Database = require("./database")

  //initialization
 const OurApp = express();

 OurApp.get("/",(request,response) => {
     response.json({message: "Server is working!!!!!!"});
 });

//Route  - /book
//Acsess - public
//Method - GET
//Params - none
//Body   - none

 OurApp.get("/book",(req,res) => {
     return res.json({books:Database.books})
 });

 // localhost:4000/book/en

 //Route - /book/:category
 // Des   - To get a book based on ISBN
 //Acsess - public
 //Method - GET
 //Params - bookID
 //Body   - none

 OurApp.get("/book/:bookId" , (req , res) => {
     const getBook = Database.Book.filter((book) => book.ISBN === req.params.bookID);
     return res.json({book: getBook});
 });
 
 //Route - /book/:category
 //Des   - To get a list of book based on category
 //Acsess - public
 //Method - GET
 //Params - bookID
 //Body   - none

 OurApp.get("/book/c/:category", (req,res) => {
     const getBook = Database.Book.filter((book) => 
     book.category.includes(req.params.category)
  );
  return res.json({book: getBook});
 });
 
 //Route - Author
 //Des   - To get a book based on ISBN
//Acsess - public
//Method - GET
//Params - bookID
//Body   - none

OurApp.get("/author",(req,res) => {
    return res.json({author:Database.Author})
});

 OurApp.listen(4000, () => console.log("Server is Running"));
