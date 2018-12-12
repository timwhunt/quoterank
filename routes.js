const controller = require("./controller");
var path = require("path");

module.exports = function(app){
    app.get('/api/authors',controller.all);
    app.get('/api/authors/:id',controller.get);
    app.post('/api/authors', controller.create);
    app.put('/api/authors', controller.update);
    app.delete('/api/authors/:id', controller.delete);
    app.post('/api/authors/:id/quotes', controller.createQuote);
    app.put('/api/authors/:id/quotes', controller.updateQuote);
    app.delete('/api/authors/:authorId/quotes/:quoteId', controller.deleteQuote);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

};