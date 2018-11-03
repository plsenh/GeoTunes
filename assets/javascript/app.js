$(document).ready(function () {

    $("#playlist-button").on("click", function (event) {
        event.preventDefault();
        var apiKeyLastFM = "8e58ab9ad2424bc14ac0944a801793cd";
        var country = $("#country").val().trim();
        var location = $("#city").val().trim();
        var queryURL = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&api_key=" + apiKeyLastFM + "&country=" + country + "&location=" + location + "&format=json";

        $.ajax({

            url: queryURL,
            method: "GET",
        }).then(function (tracks) {
            const tracksResult = tracks.tracks;
 
            const trackArray = [];
            for (let i = 0; i < tracksResult.track.length; i++) {
                console.log(tracksResult.track[i].artist.name);
                console.log(tracksResult.track[i].name);
                console.log('--------------------------------');
                //an empty object and assign to a variable ;
                // create a for loop to iterate through tracksResult.track[i] {
                    //dynamically create key value pairs using square bracket notation and the index 
                    //}
                // push your new obj to trackArray

            }

        })
    });

});