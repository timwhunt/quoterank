//You must require your model file to use queries
const Author = require("./models");

module.exports = {
    all : function(req,res){
        Author.find({}).sort('name')
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    create : function(req,res){
        Author.create(req.body)
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    delete: function(req,res) {
        Author.findByIdAndRemove(req.params.id)
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    get: function(req,res) {
        Author.findById(req.params.id)
            .then((data)=>res.json({status: "success", data: data}))
            .catch((err)=>res.json({status: "error", error: err}));
    },
    update: function(req,res) {
        Author.findByIdAndUpdate(req.body._id, req.body, { runValidators: true})
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    createQuote: function(req,res) {
        Author.findByIdAndUpdate(req.params.id, {$push: {quotes: req.body}}, { runValidators: true, setDefaultsOnInsert: true})
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    updateQuote: function(req,res) {
        Author.findOneAndUpdate(
            {"_id" : req.params.id, "quotes._id" : req.body._id},
            { "$set": {"quotes.$.votes" : req.body.votes}
            })
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    },
    deleteQuote: function(req,res) {
        //console.log("deleteQuotes params", req.params);
        Author.findByIdAndUpdate(req.params.authorId, {$pull: {quotes: {_id: req.params.quoteId} }})
            .then((data)=> res.json({status: "success", data: data}))
            .catch((err)=> res.json({status: "error", error: err}));
    }

};