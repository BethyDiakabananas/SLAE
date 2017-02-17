var randomize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("img").style.height = h + "px";
    $(".filler-text").css("color", chooseRandom(colors));
    
    $.ajax({
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

var apiKey = "";

var chooseRandom = function(list){
    index = Math.floor(Math.random() * list.length)
    return list[index]
}

