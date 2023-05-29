const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const darkCursor ='url(images/cursors/dcursorlightning.svg), auto';

//unsplash @vxnuaj

document.addEventListener('DOMContentLoaded', function() {
  var accessKey = 'qRxI3zj6xJzWSMrZuKy1gP6LyFpxOrcdy5e53wfFNBs';
  var username = 'vxnuaj';
  var imageLimit = 6; // Set the image limit to 6

  // Fetch image data from your personal Unsplash gallery
  fetch('https://api.unsplash.com/users/' + username + '/photos?client_id=' + accessKey)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data); // Log the JSON data in the console

      // Display the images in the HTML
      var imageContainer = document.querySelector('.image-container');
      for (var i = 0; i < imageLimit && i < data.length; i++) { // Modify the for loop condition
        var img = document.createElement('img');
        img.src = data[i].urls.regular;
        img.width = 400;
        img.className = 'sample_img';
        img.setAttribute('data-unsplash-url', data[i].links.html); // Set data attribute with Unsplash URL
        imageContainer.appendChild(img);
      }
      
      // Add click event listener to each image
      var images = document.querySelectorAll('.sample_img');
      images.forEach(function(image) {
        image.addEventListener('click', function() {
          var unsplashUrl = this.getAttribute('data-unsplash-url');
          window.open(unsplashUrl, '_blank'); // Open Unsplash URL in a new tab
        });
      });
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
});


//darkmode



toggle.addEventListener('click', function() {
  this.classList.toggle('bi-sun');
  this.classList.toggle('bi-moon');
  
  const isDarkMode = this.classList.contains('bi-moon');
  
  body.style.background = isDarkMode ? '#161616' : 'white';
  body.style.color = isDarkMode ? 'white' : 'black';
  
  
  const audioName = "switch-20.wav";
  const audioVolume = 0.5;
  const audioDuration = isDarkMode ? 0.07 : 0.05;
  playSound(audioName, audioVolume, audioDuration);
  
  const themeColor = isDarkMode ? '#242323' : '#F5F5F5';
  const borderColor = isDarkMode ? '#434347' : '#D9D9E3';
  
  document.querySelector('.bi-moon-fill').style.background = themeColor;
  document.querySelector('.bi-moon-fill').style.borderColor = borderColor;
  document.querySelector('.sidebar').style.background = themeColor;
  document.querySelector('.sidebar').style.borderColor = borderColor;
  document.querySelector('#omdp').style.color = isDarkMode ? "#a5b0c4" : "black";
  document.querySelector('#omdp2').style.color = isDarkMode ? "#a5b0c4" : "black";
  document.querySelector('.dpcrd').style.background = themeColor;
  document.querySelector('.dpcrd').style.borderColor = borderColor;
  document.querySelector('#dpic').style.fill = isDarkMode ? "#7A7A7F":"black";
  document.querySelector('#ppcrd').style.background = themeColor;
  document.querySelector('#ppcrd').style.borderColor = borderColor;
  document.querySelector('#ppic').style.fill = isDarkMode ? "#7A7A7F" : "black";
  document.querySelector('#ppic').style.stroke = isDarkMode ? "#7A7A7F" : "black";
  document.querySelector('#pwcrd').style.background = themeColor;
  document.querySelector('#pwcrd').style.borderColor = borderColor;
  document.querySelector('#pwic').style.fill = isDarkMode ? "#7A7A7F" : "black";
  document.querySelector('#pwic').style.stroke = isDarkMode ? "#7A7A7F" : "black";
  document.querySelector('#synthexiacrd').style.background = themeColor;
  document.querySelector('#synthexiacrd').style.borderColor = borderColor;
  document.querySelector('#synthexiaic').style.fill = isDarkMode ? "#7A7A7F" : "black";
  document.querySelector('#synthexiaic').style.stroke = isDarkMode ? "#7A7A7F" : "black";
  document.querySelector('#ahcrd').style.background = themeColor;
  document.querySelector('#ahcrd').style.borderColor = borderColor;
  document.querySelector('#ahic').style.fill = isDarkMode ? "#7A7A7F" : "black";
  document.querySelector('#ahic').style.stroke = isDarkMode ? "#7A7A7F" : "black";
  
  const socialIcons = document.querySelectorAll('.socialicons svg');
  socialIcons.forEach(function(icon) {
    icon.style.fill = isDarkMode ? 'white' : 'black';
    icon.style.transition = '.25';
  });

  const nowPlaying = document.querySelector('.nowplaying');
  nowPlaying.style.borderColor = isDarkMode ? '#46484d' : '#D9D9E3';

});

function playSound(audioName, volume, duration) {
  const audio = new Audio(audioName);
  audio.loop = false;
  audio.play();
  audio.volume = volume;
  audio.duration = duration;
}


//lastfm+applemusic for index.html

var LFM_API = "https://ws.audioscrobbler.com/2.0/";
var LFM_KEY = "11d3d143fcf0866bce70d5c1f495bc64"; // Get one at https://secure.last.fm/login?next=/api/account/create
var LFM_USER = "vxnuaj";

function getNowPlaying() {
  var recentTracksUrl =
    LFM_API+"?method=user.getrecenttracks&user="+LFM_USER+"&api_key="+LFM_KEY+"+&format=json&limit=1";

  if (window.XMLHttpRequest) {
      httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        // All set
        var response = JSON.parse(httpRequest.responseText);
        console.log(response);
        var currentTrack = response.recenttracks.track[0];

        // Check if it's the same, if not then rerender
        if (!window.nowPlaying || window.nowPlaying.mbid != currentTrack.mbid) {
          window.nowPlaying = currentTrack;
          renderNowPlaying(currentTrack);
        }
        setTimeout(getNowPlaying, 60*1000);
      } else {
        console.log('There was a problem with the last.fm request.');
      }
    }
  };
  httpRequest.open('GET', recentTracksUrl, true);
  httpRequest.send();
}


var nowPlayingNode = null;

function renderNowPlaying(track) {
  console.log(track);
  if (nowPlayingNode) {
    nowPlayingNode.remove();
  }
  nowPlayingNode = document.createElement("a");
  nowPlayingNode.setAttribute("class", "nowplaying");

  var imageurl = track.image.slice(-1)[0]["#text"];
  var nowPlayingImage = document.createElement("img");
  nowPlayingImage.setAttribute("src", imageurl);
  nowPlayingNode.appendChild(nowPlayingImage);

  // Add more stuff to the display

  var currently = track["@attr"] && track["@attr"].nowplaying == "true";

  var metadata = document.createElement("div");
  metadata.setAttribute("class", "np-metadata");
  metadata.innerHTML =
    "<span class=\"np-heading\">" + (currently ? "Now Playing" : "Last Played ") + "</span>" +
    "<span class=\"np-title\">"+track.name+"</span>" + "<span> •</span>" +
    "<span class=\"np-artist\"><i> "+track.artist["#text"]+"</i></span>"

  nowPlayingNode.appendChild(metadata);

  nowPlayingNode.setAttribute("href", track.url);

  document.body.appendChild(nowPlayingNode);

  setTimeout(function() {
    nowPlayingNode.setAttribute("class", "nowplaying loaded");
  }, 100);
}

//openweathermap
function renderWeather(weather){
  console.log(weather);
  var resultsContainer = document.querySelector("#weather-results");
  
  
  //p for temp
  var temp = document.createElement("span");
temp.setAttribute("id", "temperatureElement");
temp.classList.add("weather-temp");
temp.innerHTML = "feelin' like <span class='weather-temp-bold'>" + weather.main.temp + "°F</span>";
resultsContainer.append(temp);

  //p for weather description
  var weatherDetails = weather.weather[0];
if (weatherDetails && weatherDetails.description) {
  var description = document.createElement("span");
  description.textContent = " " + " (" + weatherDetails.description + ")";
  description.setAttribute("id", "weatherdes");
  description.classList.add("weather-description");
  resultsContainer.append(description);
}
//p for city
  var city = document.createElement("span");
  city.textContent = " • "+ "in " + weather.name;
  city.setAttribute("id","city");
  resultsContainer.append(city);}

//weather for city
function fetchWeather(query) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units=imperial&appid=f3fd3a62e78fb61ef61ed70911b46053";

  fetch(url)
   .then((response) => response.json())
   .then((data) => renderWeather(data));
}

fetchWeather ("Gaithersburg");

let time = document.getElementById("clcktime")

setInterval(() =>{
  let d = new Date ();
  time.innerHTML = d.toLocaleTimeString ();
},1000)
let d = new Date ();
time.innerHTML = d.toLocaleTimeString ();

