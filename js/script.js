var counter = 0;
const slideButton = document.getElementsByClassName('slide-button');
const carouselSlide = document.querySelector('#slider');
const carouselImages = document.querySelectorAll('#slider img');
const size = carouselImages[0].clientWidth;

for (var i = 0 ; i < slideButton.length; i++) {
    
    slideButton[i].addEventListener('click',function() {
        
        console.log('val : ' + this.value);
        let buttonValue = this.value;

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



//carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
/**
 
const carouselSlide = document.querySelector('#slider');
const carouselImages = document.querySelectorAll('#slider img');

const size = carouselImages[0].clientWidth;
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

nextBtn.addEventListener('click', function(){
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', function(){
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translate(' + (-size * counter) + 'px)';
});

/**
const slideButton = document.getElementsByClassName('slide-button');
const slideButton1 = document.getElementById('slide1');
const slideButton2 = document.getElementById('slide2');
const slideButton3 = document.getElementById('slide3');
const slideButton4 = document.getElementById('slide4');

for (var i = 0 ; i < slideButton.length; i++) {
    
    slideButton[i].addEventListener('click',function() {

        console.log('val : ' + this.value);
        let buttonValue = this.value;

        switch(buttonValue){
            case 1:

                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }

    });

}
**/
