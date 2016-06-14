var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var titles = ["Ryan's Simple Express Application", "About Ryan's Simple Express Application", "Donate to UNICEF"];

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(80, function(){
	console.log("The simple express application is running!");
});

app.get("/", function(req,res){
	res.render("home", {title: titles[0]});
});

app.get("/about", function(req,res){
	res.render("about", {title: titles[1]});
});

app.get("/donate", function(req,res){
	res.render("donate", {title: titles[2]});
});
