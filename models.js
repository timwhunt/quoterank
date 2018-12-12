//This file will contain all of the information pertaining to the database and models

//mongoose configuration lines will go here
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoteranksapi', { useNewUrlParser: true }); //can add callback for success

const QuoteSchema = new mongoose.Schema({
    quote: {type: String,
        required: [true, "A quote is required"],
        minlength: [3, "The quote must be at least 3 characters long"]},
    votes: {type: Number, defaultValue: 0}
});



const AuthorSchema = new mongoose.Schema({
    name: {type: String,
        required: [true, "The name is required"],
        minlength: [3, "The name must be at least 3 characters long"]},
    quotes: [QuoteSchema]
}, {timestamps: true});

mongoose.model("Author", AuthorSchema);

//for modularization, you must add the following:
module.exports = mongoose.model('Author');