const slideButton = document.getElementsByClassName('slide-button');
const carouselSlide = document.querySelector('#slider');
const carouselImages = document.querySelectorAll('#slider img');

const size = carouselImages[0].clientWidth;

var counter = 0;

// loop all radio button
for (var i = 0 ; i < slideButton.length; i++) {
    
    slideButton[i].addEventListener('click',function() {
        
        let buttonValue = this.value;

        // by changing counter value and the translate, images inside the square is moving
        switch(buttonValue){
            case '1':
                carouselSlide.style.transition = 'transform 0.4s ease-in-out';
                counter = 0;
                carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
                break;
            case '2':
                carouselSlide.style.transition = 'transform 0.4s ease-in-out';
                counter = 1;
                carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
                break;
            case '3':
                carouselSlide.style.transition = 'transform 0.4s ease-in-out';
                counter = 2;
                carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
                break;
        }

    });

}

// allow to change slide every 3 seconds
setTimeout(function(){ 
    loopSlide();
}, 3000);

function loopSlide(){
    
    console.log('change');
    if(counter < 2){
        counter++;
    }else{
        counter = 0;
    }
    
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';

    setTimeout(function(){ 
        loopSlide();
    }, 3000);

}