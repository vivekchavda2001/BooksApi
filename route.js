const express = require('express');
const Book = require('./Model/book');
const router = express.Router();

router.get("/books",async (req,res)=>{

    const book = await Book.find();
    res.send(book);
});

module.exports = router;