const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const waitxt = document.querySelector('#waitxt');
const interesttxt = document.querySelector('#interesttxt');

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
      document.querySelector ('#mindlabbrain').style.fill = 'white';
      document.querySelector ('#linkclick').style.fill = 'white';
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
      document.querySelector ('#mindlabbrain').style.fill = 'black';
      document.querySelector ('#linkclick').style.fill = 'black';
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