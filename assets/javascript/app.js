$(document).ready(function () {
    //  -----------------------------
    // Genius API
    var currentArtist;
    var currentSong;
    var lyrics;

    // function to get lyrics based on currentArtist and currentSong
    function getLyrics(artist, song) {

        var queryURL = "https://api.lyrics.ovh/v1/" + artist + "/" + song;

        // Performing an AJAX request with the queryURL
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // After data comes back from the request
            .then(function (response) {
                // console.log(queryURL);
                // console.log(response.lyrics);

                // parse lyrics correctlygit 
                lyrics = response.lyrics.replace(/\n/g, "<br>");

                // adding lyrics to the lyrics div
                $("#lyrics").empty();
                $("#lyrics").append("<h1>Lyrics</h1>");
                $("#lyrics").append("<h3>Artist: " + currentArtist + " | Song: " + currentSong + "</h3>");
                $("#lyrics").append(lyrics);
            });
    }

    // test to show lyrics for Sia's song, titled "Chandelier"
    // currentArtist = "Sia";
    // currentSong = "Chandelier";

    // show lyrics for current song
    // getLyrics(currentArtist, currentSong);

    // function to show lyrics when "Show Lyrics is clicked"
    $(document).on("click", ".show-lyrics", function () {
        currentArtist = $(this).attr("data-artist");
        // console.log("currentArtist: " + currentArtist);
        currentSong = $(this).attr("data-song");
        // console.log("currentSong: " + currentSong);
        getLyrics(currentArtist, currentSong);
    });

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
            // empty old song list, and remake header
            $("#song-link").empty();

            if (location != "") {
                $("#empty-error").empty();
                $("#song-link").prepend("<h3>Top Tracks in " + country + "</h3>");

                const tracksResult = tracks.tracks;

                // initial array to hold tracks
                const trackArray = [];

                // create a for loop to iterate through tracksResult.track[i]
                for (let i = 0; i < tracksResult.track.length; i++) {
                    // log expected values
                    // console.log("last-fm artist: " + tracksResult.track[i].artist.name);
                    // console.log("last-fm song: " + tracksResult.track[i].name);
                    // console.log("last-fm url: " + tracksResult.track[i].url);
                    // console.log('--------------------------------');

                    // dynamically create key value pairs using square bracket notation and the index 
                    let newObject = {
                        artist: tracksResult.track[i].artist.name,
                        song: tracksResult.track[i].name,
                        url: tracksResult.track[i].url,

                        // function to pair song and artist name
                        topTrack: function () {
                            var topTitle = this.song + " by " + this.artist;
                            return topTitle;
                        }
                    };

                    // push newObject to trackArray & get topTrack
                    trackArray.push(newObject);
                    newObject.topTrack();

                    // create songListDiv to initially hold artist, song, url
                    var songListDiv = $("<div>");
                    songListDiv.addClass("songListDiv");

                    // show artist, song, and url
                    songListDiv.append(newObject.topTrack() + " | <a href=" + newObject.url + " target='_blank'>Listen</a> | ");

                    // ---------------------------
                    // create link to show lyrics
                    var lyricsLink = $("<a>");
                    lyricsLink.addClass("show-lyrics");
                    lyricsLink.attr("href", "#");
                    lyricsLink.text("Show Lyrics");

                    // set artist and song data for lyric functionality
                    lyricsLink.attr("data-artist", newObject.artist);
                    lyricsLink.attr("data-song", newObject.song);

                    // append lyricsLink to songListDiv
                    songListDiv.append(lyricsLink);
                    // ---------------------------

                    // append songListDiv to the song-link div
                    $("#song-link").append(songListDiv);
                }
            }

            else {
                $("#empty-error").html("Please enter a city.");
            }

            // test to console each object in trackArray
            // for (let i = 0; i < trackArray.length; i++) {
            //     console.log("track " + i + ": " + trackArray[i].artist + " - " + trackArray[i].song + " (" + trackArray[i].url + ")");
            // }

        })
    });
    // ----------------------
});