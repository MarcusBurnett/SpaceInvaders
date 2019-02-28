var spriteContainer = document.getElementById('spriteContainer');
var alienContainer = document.getElementById('alienContainer')
var aliens = document.querySelectorAll('.alien');
var newBullet = document.createElement("div");
var bulletFired = false;
newBullet.id = "bullet";

// var alienRect = aliens[0].getBoundingClientRect();
// var bulletRect = bullet.getBoundingClientRect();
// var bulletBottom = bulletStyle.getPropertyValue('bottom');

// console.log(bullet.getBoundingClientRect().top);
// console.log(bullet.getBoundingClientRect().bottom);
// console.log(alienRect.top, alienRect.right, alienRect.bottom, alienRect.left);
// console.log(bulletRect.top, bulletRect.right, bulletRect.bottom, bulletRect.left);

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
window.addEventListener('keyup', (e) => {

  if (!bulletFired) {

    bulletFired = true;
    console.log(bulletFired)

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
  bullet.element.style.left = sprite.x + 1.85 + 'vw';
  bullet.element.style.bottom = bullet.y + 'px';

};

/// sprite control
const detectBulletMovement = () => {
  //restrict alien to stay on screen
  if ((keys[keys.SPACE])) {
    if (!bulletFired) {
      //call function that will decrease the bullet.y
      var flagFired = false;
      if(!flagFired) {
        var bulletMovement = setInterval(bulletFire, 1);
      }

      function bulletFire() {

        if (bullet.y < 650) {

          moveBullet(0, 0.5);
        } else {
          clearInterval(bulletMovement);
          bulletFired = false;
          flagFired = false;
        }
        
      }

      bullet.y = 55

    }
  }
};

/// update current position on screen


moveBullet();
/// game loop
setInterval(function () {
  detectBulletMovement();
}, 80);





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
  detectBulletMovement();
}, 1000 / 60);


// space bar = 32,
// rightKey = 39
// leftKey = 37