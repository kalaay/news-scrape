var url = 'http://localhost:3000';
$( document ).ready(function() {
    $.ajax({
        method: "GET",
        url: `${url}/article`,
        crossDomain:true
    }).then(res=>{
        //  console.log(res[0].link);
        var section = $('.scrap_news_id');
        var body = $('body');
        res.forEach(function(article){
            var link = $('<a>').attr({'href':article.link, 'target':'_blank'}).text(article.title);
            var header = $('<h2>').append(link);
            var div = $('<div>').append(header).addClass('divClass');
            var par = $('<p>').text(article.par);
            div.append(par);
            div.appendTo(section);
            console.log(div);
            section.appendTo(body);
            
        })
        
    }).catch(err=> {
        console.log(err);
    })
        
});