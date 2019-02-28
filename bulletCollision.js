const detectBulletCollision = () => {

    let currentBullet = document.getElementById('bullet').getBoundingClientRect();

    for (let i = 0; i< invasion.length; i++) {
        let alienPosition = invasion[i].getBoundingClientRect();

        if (currentBullet.x > alienPosition.left && currentBullet.x < alienPosition.right && 
            currentBullet.y > alienPosition.bottom && currentBullet.y < alienPosition.top) {

            console.log('HIT!!!');
            
                //remove alien from array
            
            invasion.splice(i, 1);

            //update score currentScore += 10;



            //display explosion image


            //reset bullet i.e. set bullet fired flag to false

        }
    }
    
    console.log(currentBullet);

}

