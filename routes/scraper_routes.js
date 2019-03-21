const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');


router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '../views','/index.html'));
});

router.get("/saved", function(req, res){
  res.sendFile(path.join(__dirname, '../views','/saved.html' ));
});

router.get("/article", function(req, res){
    var url = 'https://www.nytimes.com/section/business';
    axios.get(url)
      .then(function(response){
          var $ = cheerio.load(response.data);
          var results = [];
          $("h2.css-y3otqb").each(function(i, element){
            var title = $(element).text();
            var linkRoute = $(element).children().attr("href");
            var link = `https://www.nytimes.com${linkRoute}`
            var par = $(element).siblings().text();

            var article = {
              title,
              link,
              par,
            }

            results.push(article);
            // res.send(results);
          });
          res.send(results);
          console.log(results);
        
      });

});



module.exports = router;