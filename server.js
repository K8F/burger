//dependencies
var express= require("express")
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burger_controllers");
var path = require("path");

//express setup
var app= express();
var PORT= process.env.PORT || 8080;

//middleware
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//handlebars
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

//static files and routes
app.use(express.static(__dirname + "/public"));
app.use("/", router);

// Start server
app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});