$(document).ready(function () {
    //  -----------------------------
    // Genius API
    var currentArtist;
    var currentSong;
    var lyrics;

    // function to show lyrics based on currentArtist and currentSong
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

                // adding lyrics to the lyrics div
                $("#lyrics").append(lyrics);
                $("#lyrics").prepend("Artist: " + currentArtist + " | Song: " + currentSong + "<br>");

            });
    }

        // test to show lyrics for Sia's song, titled "Chandelier"
        // currentArtist = "Sia";
        // currentSong = "Chandelier";

        // show lyrics for current song
        // getLyrics(currentArtist, currentSong);
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
                (tracksResult.track[i].artist.name);


                console.log(tracksResult.track[i].artist.name);
                console.log(tracksResult.track[i].name);
                console.log(tracksResult.track[i].url);
                console.log('--------------------------------');
                //an empty object and assign to a variable ;
                // create a for loop to iterate through tracksResult.track[i] {
                //dynamically create key value pairs using square bracket notation and the index 
                //}
                // push your new obj to trackArray
                let newObject = {
                    artist: tracksResult.track[i].artist.name,
                    song: tracksResult.track[i].name,
                    url: tracksResult.track[i].url,
                    topTrack : function() {
                        var topTitle = this.song + " by " + this.artist;
                        console.log(topTitle);
                        return topTitle;
                    }
                };
                trackArray.push(newObject);
                console.log(newObject);
                newObject.topTrack();
                $("#list").append("<a href=" + newObject.url + " target='_blank'>" + newObject.topTrack() + "</a> ");
            }
            console.log(trackArray);
        })
    });
    // ----------------------
});