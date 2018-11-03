$(document).ready(function () {
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

                // Creating and storing a div tag
                var lyricsDiv = $("<div>");
                lyricsDiv.addClass("lyricsDiv");

                // Creating a paragraph tag with the result item's rating
                // lyricsDiv.html(lyrics);
                // p.prepend("Artist:" + artistName);
                // p.append("Song:" + songName);

                // // Creating and storing an image tag
                // var gifImage = $("<img>");
                // // initial source and animation state (still)
                // gifImage.attr("src", results[i].images.fixed_height_still.url);
                // gifImage.attr("data-state", "still");
                // gifImage.addClass("gifShown");

                // // setting up animation states for toggling later
                // gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                // gifImage.attr("data-animate", results[i].images.fixed_height.url);

                // // Appending the paragraph and image tag to the lyricsDiv
                lyricsDiv.append(gifImage);
                lyricsDiv.append(p);

                // Prependng the lyricsDiv to the HTML page in the "#gifs-appear-here" div
                $("#lyrics").append(lyrics);
                $("#lyrics").prepend("Artist: " + artistName + " | Song: " + songName + "<br>");







                // Creating and storing a div tag
                var gifDiv = $("<div>");
                gifDiv.addClass("gifDiv");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text(results[i].title);
                p.addClass("song-info");
                p.append("<BR>Rating: " + results[i].rating);

                
                // Appending the paragraph and image tag to the gifDiv
                gifDiv.append(gifImage);
                gifDiv.append(p);

                // Prependng the gifDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs-appear-here").prepend(gifDiv);





            });
    }


});