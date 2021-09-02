/* 

Requirement

1-Book         
-ISBN          -String
-Title         -String  
-Author        -[Number]
-Language      -String
-Publications  -Number
-NumofPages    -Number
-Categories    -[String]

2-Author
-id    -Number
-name  -String
-book  -[String]


3-Publication
-id    -Number
-name  -String
-book  -[String]



Book
 -GET
   - to get all books
   - to get specicific books
   - to get a list of book based on category
   - to get a list of books based on author

 -POST
   - to add new book 
   
 -PUT
   - to update book details
   - to update/add new author
   
 -DELETE
   - delete a book (based on ISBN)
   - delete an author from the book

*/