const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));

require("./routes")(app);

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
});