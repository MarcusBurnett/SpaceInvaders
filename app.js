var spriteContainer = document.getElementById('spriteContainer');
var alienContainer = document.getElementById('alienContainer')
var aliens = document.querySelectorAll('.alien');
var newBullet = document.createElement("div");
var scoreDisplay = document.getElementById('score');
var score = 0;
var bulletFired = false;
newBullet.id = "bullet";

/// store key codes and currently pressed ones
var keys = {};

keys.LEFT = 37;
keys.RIGHT = 39;
keys.SPACE = 32;

/// store reference to sprite's position and element
let sprite = {
  x: 47.5,
  // y: null,
  speedMultiplier: 1,
  element: document.getElementById("sprite")
};

var bullet = {
  x: 47.5,
  y: 55,
  speedMultiplier: 1,
  element: newBullet
};


/// need to update to use addeventlistener
document.body.onkeydown =
window.addEventListener('keyup', (e) => {

  if (event.keyCode === 32 && !bulletFired) {

    bulletFired = true;
    console.log(bulletFired)
    bullet.element.style.left = sprite.x + 1.85 + 'vw';

    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    var kc = e.keyCode || e.which;
    keys[kc] = e.type == 'keypress';
    document.body.appendChild(newBullet);
  }
});


/// sprite movement update
const moveBullet = (dx, dy) => {


  bullet.x += (dx || 0) * bullet.speedMultiplier;
  bullet.y += (dy || 0) * bullet.speedMultiplier;
  bullet.element.style.bottom = bullet.y + 'px';

};

/// sprite control
const detectBulletMovement = () => {
  //restrict alien to stay on screen
  if ((keys[keys.SPACE])) {
    if (!bulletFired) {
      //call function that will decrease the bullet.y


      var bulletMovement = setInterval(bulletFire, 1);

      function bulletFire() {

        if (bullet.y < 650) {
          
          for(var i = 0; i < aliens.length; i++){
          let alienStyle = window.getComputedStyle(aliens[i]);

            if(alienStyle.getPropertyValue('background-image') !== 'none'){
          if (bullet.element.getBoundingClientRect().bottom < aliens[i].getBoundingClientRect().bottom && bullet.element.getBoundingClientRect().top > aliens[i].getBoundingClientRect().top && bullet.element.getBoundingClientRect().left > aliens[i].getBoundingClientRect().left && bullet.element.getBoundingClientRect().right < aliens[i].getBoundingClientRect().right){
          clearInterval(bulletMovement);
          bulletFired = false;
          bullet.element.style.display = 'none';
          aliens[i].classList.add('alienHit');
          score += 10;
          scoreDisplay.textContent = score;

          // aliens[i].style.backgroundImage = 'url(imgs/explode.png)';
          // setTimeout(function(){ aliens[i].style.display = 'none'; }, 500);
          }
        }
          }moveBullet(0, 0.5);
        } else {
          clearInterval(bulletMovement);
          bulletFired = false;
        }

      }
      bullet.element.style.display = 'block';
      bullet.y = 55;
      bullet.element.style.left = sprite.x + 1.85 + 'vw';
    }
  }
};

/// update current position on screen


moveBullet();
/// game loop
setInterval(function () {
  detectBulletMovement();
}, 13);

document.addEventListener('click', function(){
  console.log(aliens[0].getBoundingClientRect().bottom);

})

/// need to update to use addeventlistener
document.body.onkeyup =
  document.body.onkeydown = function (e) {

    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    var kc = e.keyCode || e.which;
    keys[kc] = e.type == 'keydown';
  };

/// sprite movement update
const moveSprite = (dx, dy) => {

  sprite.x += (dx || 0) * sprite.speedMultiplier;
  sprite.y += (dy || 0) * sprite.speedMultiplier;
  sprite.element.style.left = sprite.x + 'vw';
  sprite.element.style.top = sprite.y + 'vw';
};

/// sprite control
const detectSpriteMovement = () => {
  //restrict alien to stay on screen
  if ((keys[keys.LEFT]) && (sprite.x > 0)) {
    moveSprite(-0.5, 0);
  }
  if ((keys[keys.RIGHT]) && (sprite.x < 95)) {
    moveSprite(0.5, 0);
  }

};

/// update current position on screen
moveSprite();

/// game loop
setInterval(function () {
  detectSpriteMovement();
}, 1000 / 60);


// space bar = 32,
// rightKey = 39
// leftKey = 37