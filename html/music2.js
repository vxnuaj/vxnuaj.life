/* ********************************************************************** */
/* OLD SCHOOL CURRENT PLAYING STUFF */

var LFM_API = "https://ws.audioscrobbler.com/2.0/";
var LFM_KEY = "11d3d143fcf0866bce70d5c1f495bc64"; // Get one at https://secure.last.fm/login?next=/api/account/create
var LFM_USER = "vxnuaj";

var nowPlayingNode = null;
var secondTrackNode = null;
var thirdTrackNode = null;


function getNowPlaying() {
  var recentTracksUrl =
    LFM_API +
    "?method=user.getrecenttracks&user=" +
    LFM_USER +
    "&api_key=" +
    LFM_KEY +
    "+&format=json&limit=3";

  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        // All set
        var response = JSON.parse(httpRequest.responseText);
        console.log(response);
        var currentTracks = response.recenttracks.track;

        // Check if the tracks are the same, if not then rerender
        if (
          !window.nowPlaying ||
          window.nowPlaying.mbid != currentTracks[0].mbid
        ) {
          window.nowPlaying = currentTracks[0];
          renderNowPlaying(currentTracks[0]);
        }

        // Check if the second track is the same, if not then rerender
        if (
          !window.secondTrack ||
          window.secondTrack.mbid != currentTracks[1].mbid
        ) {
          window.secondTrack = currentTracks[1];
          renderSecondTrack(currentTracks[1]);
        }

        // Check if the third track is the same, if not then rerender
        if (
          !window.thirdTrack ||
          window.thirdTrack.mbid != currentTracks[2].mbid
        ) {
          window.thirdTrack = currentTracks[2];
          renderThirdTrack(currentTracks[2]);
        }
       

        setTimeout(getNowPlaying, 60 * 1000);
      } else {
        console.log("There was a problem with the last.fm request.");
      }
    }
  };
  httpRequest.open("GET", recentTracksUrl, true);
  httpRequest.send();
}

function renderNowPlaying(track) {
  if (nowPlayingNode) {
    nowPlayingNode.remove();
  }
  nowPlayingNode = document.createElement("a");
  nowPlayingNode.setAttribute("class", "now-playing");

  var imageurl = track.image.slice(-1)[0]["#text"];
  var nowPlayingImage = document.createElement("img");
  nowPlayingImage.setAttribute("src", imageurl);
  nowPlayingNode.appendChild(nowPlayingImage);

  var currently = track["@attr"] && track["@attr"].nowplaying == "true";

  var metadata = document.createElement("div");
  metadata.setAttribute("class", "np-metadata");
  metadata.innerHTML =
    "<span class=\"np-heading\">" +
    (currently ? "Now Playing" : "Latest Track") +
    "</span>" +
    "<span class=\"np-title\"><strong>" +
    track.name +
    "</strong></span>" +
    "<span class=\"np-artist\"> <i>" +
    track.artist["#text"] +
    "</i></span>" +
    (currently
      ? "<span class=\"np-date\"><span class=\"breather\">◉</span>  Currently Playing</span>"
      : "<span class=\"np-date\">" + track.date["#text"] + "</span>");
  nowPlayingNode.appendChild(metadata);

  nowPlayingNode.setAttribute("href", track.url);

  document.body.appendChild(nowPlayingNode);

  setTimeout(function () {
    nowPlayingNode.setAttribute("class", "now-playing loaded");
  }, 100);
}



function renderSecondTrack(track) {
  if (secondTrackNode) {
    secondTrackNode.remove();
  }
  secondTrackNode = document.createElement("a");
  secondTrackNode.setAttribute("class", "now-playing second-track");

  var imageurl = track.image.slice(-1)[0]["#text"];
  var secondTrackImage = document.createElement("img");
  secondTrackImage.setAttribute("src", imageurl);
  secondTrackNode.appendChild(secondTrackImage);

  var metadata = document.createElement("div");
  metadata.setAttribute("class", "np-metadata");
  metadata.innerHTML =
    "<span class=\"np-title\"><strong>" +
    track.name +
    "</strong></span>" +
    "<span class=\"np-artist\"><i>" +
    track.artist["#text"] +
    "</i></span>" +
    "<span class=\"np-date\" id=\"mscdate\">" +
    track.date["#text"] +
    "</span>";
  secondTrackNode.appendChild(metadata);

  secondTrackNode.setAttribute("href", track.url);

  document.body.appendChild(secondTrackNode);

  setTimeout(function () {
    secondTrackNode.setAttribute("class", "now-playing second-track loaded");
  }, 100);
}

function renderThirdTrack(track) {
  if (thirdTrackNode) {
    thirdTrackNode.remove();
  }
  thirdTrackNode = document.createElement("a");
  thirdTrackNode.setAttribute("class", "now-playing third-track");

  var imageurl = track.image.slice(-1)[0]["#text"];
  var thirdTrackImage = document.createElement("img");
  thirdTrackImage.setAttribute("src", imageurl);
  thirdTrackNode.appendChild(thirdTrackImage);

  var metadata = document.createElement("div");
  metadata.setAttribute("class", "np-metadata");
  metadata.innerHTML =
    "<span class=\"np-title\"><strong>" +
    track.name +
    "</strong></span>" +
    "<span class=\"np-artist\"><i>" +
    track.artist["#text"] +
    "</i></span>" +
    "<span class=\"np-date\" id=\"mscdate\">" +
    track.date["#text"] +
    "</span>";
  thirdTrackNode.appendChild(metadata);

  thirdTrackNode.setAttribute("href", track.url);

  document.body.appendChild(thirdTrackNode);

  setTimeout(function () {
    thirdTrackNode.setAttribute("class", "now-playing third-track loaded");
  }, 100);
}


getNowPlaying();
