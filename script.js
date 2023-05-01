const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const waitxt = document.querySelector('#waitxt')
const interesttxt = document.querySelector('#interesttxt');
const buildingTxt = document.getElementById("buildingtxt");
const mindlab = document.getElementById("mindlab");

window.addEventListener("load", function() {
  mindlab.style.display = "none";
  mindlab.style.opacity = "0";
});

window.addEventListener("load", function() {
  distanceproject.style.display = "none";
  distanceproject.style.opacity = "0";
});

window.addEventListener("load", function() {
  photonicpropulsion.style.display = "none";
  photonicpropulsion.style.opacity = "0";
});

window.addEventListener("load", function() {
  planet.style.stroke = "black";
});

buildingTxt.addEventListener("click", function() {
  if (mindlab.style.display === "none") {
    mindlab.style.display = "block";
    setTimeout(function() {
      mindlab.style.opacity = "1";
    }, 0);
  } else {
    mindlab.style.opacity = "0";
    setTimeout (function() {
      mindlab.style.display = "none";
    }, 400);
  }
});

buildingTxt.addEventListener("click", function() {
  if (distanceproject.style.display === "none") {
    distanceproject.style.display = "block";
    setTimeout(function() {
      distanceproject.style.opacity = "1";
    }, 0);
  } else {
    distanceproject.style.opacity = "0";
    setTimeout (function() {
      distanceproject.style.display = "none";
    }, 400);
  }
});

buildingTxt.addEventListener("click", function() {
  if (photonicpropulsion.style.display === "none") {
    photonicpropulsion.style.display = "block";
    setTimeout(function() {
      photonicpropulsion.style.opacity = "1";
    }, 0);
  } else {
    photonicpropulsion.style.opacity = "0";
    setTimeout (function() {
      photonicpropulsion.style.display = "none";
    }, 400);
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


toggle.addEventListener('click', function() {
    this.classList.toggle('bi-sun');
    if (this.classList.toggle('bi-moon')) {
      body.style.background = 'black';
      body.style.color = 'white';
      body.style.transition = '.25s';
      document.querySelector ('#buildingtxt').style.border = '2px solid white';
      document.querySelector ('.sidebar').style.border = '2px solid white';
      document.querySelector ('#mindlab').style.border = '2px solid white';
      document.querySelector ('#distanceproject').style.border = '2px solid white';
      document.querySelector ('#photonicpropulsion').style.border = '2px solid white';
      document.querySelector ('#mindlabbrain').style.fill = 'white';
      document.querySelector ('#runfast').style.fill = 'white';
      document.querySelector ('#planet').style.stroke = 'white';
      document.querySelector ('#linkclick').style.fill = 'white';
      document.querySelector ('#linkclick2').style.fill = 'white';
      document.querySelectorAll('.socialicons svg').forEach(function(icon) {
        icon.style.fill = 'white';
        icon.style.transition = '.25s';
        function playSound(audioName) {
            let audio = new Audio (audioName);
            audio.loop=false;
            audio.play ();
            audio.volume = .08;
            audio.duration = .07;
        }
        playSound("switch-20.wav")
      });
    } else {
      body.style.background = '#f7ede5';
      body.style.color = 'black';
      body.style.transition = '.25s';
      document.querySelector ('#buildingtxt').style.border = '2px solid black';
      document.querySelector ('.sidebar').style.border = '2px solid black';
      document.querySelector ('#mindlab').style.border = '2px solid black';
      document.querySelector ('#photonicpropulsion').style.border = '2px solid black';
      document.querySelector ('#mindlabbrain').style.fill = 'black';
      document.querySelector ('#distanceproject').style.border = '2px solid black';
      document.querySelector ('#runfast').style.fill = 'black';
      document.querySelector ('#planet').style.stroke = 'black';
      document.querySelector ('#linkclick').style.fill = 'black';
      document.querySelector ('#linkclick2').style.fill = 'black';
      document.querySelectorAll('.socialicons svg').forEach(function(icon) {
        icon.style.fill = 'black';
        icon.style.transition = '.25s';
        function playSound(audioName) {
            let audio = new Audio (audioName);
            audio.loop=false;
            audio.play ();
            audio.volume = .08;
            audio.duration = .05;
        }
        playSound("switch-20.wav")
      });
    }
  });