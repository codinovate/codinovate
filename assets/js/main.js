var request = require('request');
var url = "https://www.instagram.com/codinovate";
request.get(url, function(err, response, body){
    if(response.body.indexOf(("meta property=\"og:description\" content=\"")) != -1){
        var followers =  response.body.split("meta property=\"og:description\" content=\"")[1].split("Followers")[0];
        document.getElementById("followers").innerHTML = followers;
        // console.log(followers)   
    }
 });

 