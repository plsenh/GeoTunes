# GeoTunes

---

## [Go To Deployed Site](https://plsenh.github.io/GeoTunes/)

![screenshot](/assets/images/GeoTunes.PNG)

---

## About **GeoTunes**:

GeoTunes was created with the idea of using APIs to create a playlist based on geographic location. The user selects the country and the number of songs desired. Additionally, GeoTunes was to display lyrics for the songs of the playlist, as well as a video of the chosen song. User input validation was needed for the number of songs selected.

## Description of the problem:

We needed a way to access song data tied to geographic locations. We also needed to access song lyrics, and optionally videos, for the selected songs. We also wanted to implement validation on user input. Additionally, we wanted to display a flag for the nation selected that would have adequate image quality to scale up to HD and 4K monitors.

## Technical Solutions:

- The LastFM API provides a way to get the current playlist of top songs based on country. Links to the video for the playlist songs are also provided by the LastFM API.
- The Lyrics.ovh API provides the user requested lyrics.
- user input validation was implemented using an if/else conditional to check for correct user input.
- SVG graphics were used for the country flags. SVGs are vector format, so the file size is small, and the images are infinitely scalable with no loss of image quality.

## How the app is organized:

GeoTunes' structure is defined by an HTML document. The app logic, the AJAX calls, and the jQuery code to populate the DOM are contained in a JavaScript file, and three CSS files are used: normalize.css, the Foundation CSS framework, and our custom css file.

## How to run GeoTunes:

GeoTunes can either be run from the hosted site (link is above) or you can download the files to a local directory and open the HTML document in a web browser.

## Demo:

![Demo](./assets/images/GeoTunes_demo.gif)

## Built with:

- CSS3
- Foundation CSS
- HTML5
- JavaScript
- jQuery
- LastFM API
- Lyrics.ovh API
- Normalize CSS

## Authors:

- Joel Akers (Front End)
- Dirk Kiesewetter (Front End)
- Evan Kozierachi (Back End)
- Pauline Senh (Team Lead & Back End)
