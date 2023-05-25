const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const waitxt = document.querySelector('#waitxt')
const interesttxt = document.querySelector('#interesttxt');
const buildingTxt = document.getElementById("buildingtxt");




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
    } else {
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