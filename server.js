# Requires
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public/home.css'));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log(`Listening on Port ${PORT}`)
})
