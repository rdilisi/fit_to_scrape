
var express = require("express")
var app = express()
var exphbs = require("express-handlebars")
var port = process.env.PORT||3000
var axios = require('axios')

app.engine("handlebars",exphbs({
    defaultLayout: "main"
}))
app.set ("view engine","handlebars")

//renders homepage
app.get("/",function(req,res){
    res.render("index")
})

//scrape route
app.get("/scrape",function(req,res){
    axios.get("https://www.cnn.com/").then(function(data){
     $=cheerio.load(data.data)   
    //res.send(data.data)
    })

})

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://newuser123:newuser123@ds155203.mlab.com:55203/scraper";
app.listen(port)