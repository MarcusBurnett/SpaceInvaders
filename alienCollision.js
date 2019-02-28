const detectAlienCollision = () => {

    let spritePosition = document.getElementById('sprite').getBoundingClientRect();

    for (let i = 0; i< alienArray.length; i++) {
        let alienPosition = alienArray[i].getBoundingClientRect();

        if (spritePosition.right > alienPosition.left && spritePosition.right < (alienPosition.left + alienPosition.width) && 
            spritePosition.y > alienPosition.bottom) {

            console.log('CRASHED!!!');
            
                //lose a life  numOfLives --
            
            



            //display explosion image


            //reset bullet i.e. set bullet fired flag to false

        }
    }
    
    

}
