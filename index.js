const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
var cheerio = require('cheerio');
var axios = require('axios');
const scrapRoutes = require('./routes/scraper_routes');
const expressHbs = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')))
app.use(scrapRoutes);

app.get("*", function(req, res){
  res.send("<h1>page not found</h1>");
});

app.listen(PORT, function(){
    console.log("listening on PORT..." + PORT);
})
