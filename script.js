const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const waitxt = document.querySelector('#waitxt')
const interesttxt = document.querySelector('#interesttxt');
const buildingTxt = document.getElementById("buildingtxt");

const sicon = document.getElementById("sicon");


toggle.addEventListener('click', function() {
    this.classList.toggle('bi-sun');
    if (this.classList.toggle('bi-moon')) {
      body.style.background = 'black';
      body.style.color = 'white';
      body.style.transition = '.25s';

      function playSound(audioName) {
        let audio = new Audio (audioName);
        audio.loop=false;
        audio.play ();
        audio.volume = .5;
        audio.duration = .07;
    }
    playSound("switch-20.wav")

    
  
      document.querySelectorAll('.socialicons svg').forEach(function(icon) {
        icon.style.fill = 'white';
        icon.style.transition = '.25s';
      });
      document.querySelectorAll('.socialicons2 svg').forEach(function(icon) {
        icon.style.fill = 'white';
        icon.style.transition = '.25s';
      });
      

      omdp.style.color='#9CA3AF'
      synthexiacrd.style.color ='white'
      synthexiacrd.style.background='black'
      ahcrd.style.color = 'white'
      ahcrd.style.background = 'black'
      dpcrd.style.color = 'white'
      dpcrd.style.background = 'black'
      ppcrd.style.color = 'white'
      ppcrd.style.background = 'black'
      pwcrd.style.color = 'white'
      pwcrd.style.background = 'black'
      
    } 
    else {
      body.style.background = 'white';
      body.style.color = 'black';
      body.style.transition = '.25s';
    
      function playSound(audioName) {
        let audio = new Audio (audioName);
        audio.loop=false;
        audio.play ();
        audio.volume = .5;
        audio.duration = .05;
    }
    playSound("switch-20.wav")
    
    document.querySelectorAll('.socialicons svg').forEach(function(icon) {
      icon.style.fill = 'black';
      icon.style.transition = '.25s';
    });
    
    document.querySelectorAll('.socialicons2 svg').forEach(function(icon) {
      icon.style.fill = 'black';
      icon.style.transition = '.25s';
    });

      omdp.style.color='black'
      synthexiacrd.style.color ='black'
      synthexiacrd.style.background='white'
      ahcrd.style.color = 'black'
      ahcrd.style.background = 'white'
      dpcrd.style.color = 'black'
      dpcrd.style.background = 'white'
      ppcrd.style.color = 'black'
      ppcrd.style.background = 'white'
      pwcrd.style.color = 'black'
      pwcrd.style.background = 'white'
      
    }
  
  });

  waitxt.addEventListener('animationend', function() {
    interesttxt.style.animation = 'typing 3.5s steps(55), cursor .4s step-end infinite alternate';
    interesttxt.style.color = 'inherit';
  });

interesttxt.addEventListener('animationend', function() {
    lifetxt.style.animation = 'typing 2.5s steps(42), cursor .4s step-end infinite alternate';
    lifetxt.style.color = 'inherit';
  });

lifetxt.addEventListener('animationend', function() {
    runtxt.style.animation = 'typing 1.5s steps(16), cursor .4s step-end infinite alternate';
    runtxt.style.color = 'inherit';
  });


/* lastfm js /*/

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
  nowPlayingNode.setAttribute("class", "now-playing");

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
    "<span class=\"np-title\"><strong>"+track.name+"</strong></span>" + "<span> •</span>" +
    "<span class=\"np-artist\"><i> "+track.artist["#text"]+"</i></span>"

  nowPlayingNode.appendChild(metadata);

  nowPlayingNode.setAttribute("href", track.url);

  document.body.appendChild(nowPlayingNode);

  setTimeout(function() {
    nowPlayingNode.setAttribute("class", "now-playing loaded");
  }, 100);
}
  