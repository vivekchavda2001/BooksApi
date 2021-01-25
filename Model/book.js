const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    qty:Number
})

module.exports = mongoose.model("Book",schema);