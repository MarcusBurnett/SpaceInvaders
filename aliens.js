
class alienMatrix {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
  }
  /*Getters*/
  
  get positionX() {
    return this.x;
  }
  get positionY() {
    return this.y;
  }
  

  /*Setters*/
  moveRight() {
    return this.x += 10
  }
  moveRight() {
    return this.x -= 10
  }
  
}

let invasion = [];
let aliensContainer = document.getElementById('alienContainer');
const alienZero = new alienMatrix(93, 156);
invasion.push(alienZero);

const alienRowGenerator = () => {
  for (let i = 1; i < 45; i++) {
    const alien = new alienMatrix(alienZero.x + (58 * i), alienZero.y);
    invasion.push(alien);
    let alienDeployed = document.createElement('div');
    
    switch (true) {
      case (i < 12):
        alienDeployed.setAttribute('class', 'alien a1');
        break;
      case (i > 11 && i < 34):
        alienDeployed.setAttribute('class', 'alien a2');
        break;
      default:
      alienDeployed.setAttribute('class', 'alien a3');
        break;
    }
    
   
    
    aliensContainer.appendChild( alienDeployed);
    
  }
};
alienRowGenerator();


