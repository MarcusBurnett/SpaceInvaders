  /// store key codes and currently pressed ones
  var keys = {};

  keys.LEFT = 37;
  keys.RIGHT = 39;


/// store reference to sprite's position and element
var sprite = {
x: 47.5,
// y: null,
speedMultiplier: 1,
element: document.getElementById("sprite")
};

/// need to update to use addeventlistener
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
sprite.element.style.left = sprite.x + 'vw';
sprite.element.style.top = sprite.y + 'vw';
console.log('alien position' + sprite.x)
};

/// sprite control
var detectSpriteMovement = function(){
  //restrict alien to stay on screen
if (( keys[keys.LEFT] ) && (sprite.x > 0)) {
  moveSprite(-0.5, 0);
}
if (( keys[keys.RIGHT] ) && (sprite.x<95) ){
  moveSprite(0.5, 0);
}

};

/// update current position on screen
moveSprite();

/// game loop
setInterval(function(){
detectSpriteMovement();
}, 1000/60);
