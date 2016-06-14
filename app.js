var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(80, function(){
	console.log("The simple express application is running!");
});

app.get("/", function(req,res){
	res.render("home");
});

app.get("/about", function(req,res){
	res.render("about");
});

app.get("/donate", function(req,res){
	res.render("donate");
});
