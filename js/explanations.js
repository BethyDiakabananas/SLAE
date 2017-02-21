var randomize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("img").style.height = h + "px";
    $(".filler-text").css("color", chooseRandom(colors));
    
    $.ajax({
        url = "https://api.artsy.net:443/api/search?q=" + chooseRandom(artists),
        headers: {'X-Xapp-Token':apiKey},
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

var apiKey =  "JvTPWe4WsQO-xqX6Bts49sYSoxGdNEnOVU-GxPhDqHnGPMFSOa7Xhop8l-7DN7hOYAsq1lPD2uP1EBIs9sizM28Rerz_IBi862CVS69Nm3Q9t6nz5H-I8NzpOtkc5AV6I1tL8KpWNxQZ_ElrDzBIOad4OivamsImqsT0C9L5PH28BsEU5JZdYVnUmjxqnvYi1fuJTshponDc-N17h7JJdsvbynMgh24zbqesCzqRU2I=";

var chooseRandom = function(list){
    index = Math.floor(Math.random() * list.length)
    return list[index]
}

