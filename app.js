  /// store key codes and currently pressed ones
  var keys = {};

  keys.LEFT = 37;
  keys.RIGHT = 39;


/// store reference to sprite's position and element
var sprite = {
x: 550,
// y: null,
speedMultiplier: 2,
element: document.getElementById("sprite")
};

/// key detection (better to use addEventListener, but this will do)
document.body.onkeyup = 
document.body.onkeydown = function(e){
  // document.body.addEventListener('onkeydown', (e)=>{
    
    
    if (e.preventDefault) { 
      e.preventDefault();
    }
    else {
      e.returnValue = false; 
    }
    var kc = e.keyCode || e.which;
    keys[kc] = e.type == 'keydown';
  // });


};

/// sprite movement update
var moveSprite = function(dx, dy){
  
sprite.x += (dx||0) * sprite.speedMultiplier;
sprite.y += (dy||0) * sprite.speedMultiplier;
sprite.element.style.left = sprite.x + 'px';
sprite.element.style.top = sprite.y + 'px';
};

/// sprite control
var detectSpriteMovement = function(){
if ( keys[keys.LEFT] ) {
  moveSprite(-5, 0);
}
if ( keys[keys.RIGHT] ) {
  moveSprite(5, 0);
}

};

/// update current position on screen
moveSprite();

/// game loop
setInterval(function(){
detectSpriteMovement();
}, 1000/30);
