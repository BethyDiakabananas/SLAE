var randomize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("img").style.height = h + "px";
    $(".filler-text").css("color", chooseRandom(colors));
    
    $.ajaz({
        url = "https://api.artsy.net:443/api/search?q=" + chooseRandom(artists),
        headers: {'X-Xapp-Token':apiToken},
        success: function(e) {
            html = "img class='img' src='";
            htmlclose = "' />"
            artist = e
            linkedList = artist._embedded.results;
            art = chooseRandom(linkedList);
            link = art._links.thumbnail.href
            $(".img").html(html + link + htmlclose);
            $(".title").html(art.title);
            $(".description").html(art.description);
        };
    });
    $("#description").html(chooseRandom(descriptions))
    $("#phrase").html(chooseRandom(phrases))                       
}

var apiKey = "JvTPWe4WsQO-xqX6Bts49qOiQ3j4i_leS5D7RiC66Ctu0pt_b_7t-qPauiAU20IBP5jRti-ZNtZVfJ6jgVN0atd1ZO9AG0hyElkJTeiZHQ5YyH4JLfqoDhJuCAi9xMGxDmdjID71WFNi2YHCir9MJg8fpQ33LqgyPubA3E9FtLMgSoz2SdsSEYirf_T_7O7drRm1Qd2JkkuiTuIIiJDsCB_5AgMBVmiB1uwimUSRvI0=";

var chooseRandom = function(list){
    index = Math.floor(Math.random() * list.length)
    return list[index]
}

