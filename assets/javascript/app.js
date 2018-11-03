$(document).ready(function () {
    //  -----------------------------
    // Genius API
    // global variables
    var artistName;
    var songName;
    var lyrics;

    // test to show lyrics for Sia's song, titled "Chandelier"
    artistName = "Sia";
    songName = "Chandelier";
    getLyrics(artistName, songName);

    // function to show lyrics based on artistName and songName
    function getLyrics(artist, song) {

        var queryURL = "https://api.lyrics.ovh/v1/" + artist + "/" + song;

        // Performing an AJAX request with the queryURL
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // After data comes back from the request
            .then(function (response) {
                console.log(queryURL);
                console.log(response);

                lyrics = response.lyrics.replace(/\n/g, "<br>")

                // Prependng the lyricsDiv to the HTML page in the "#gifs-appear-here" div
                $("#lyrics").append(lyrics);
                $("#lyrics").prepend("Artist: " + artistName + " | Song: " + songName + "<br>");

            });
    }
    //  --------------------------

    // last-fm API
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
    // ----------------------

});