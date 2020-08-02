(function(){
    const slides = document.querySelectorAll(".fade-slider__item");
    const activeClass = 'fade-slider__item--visible';
    let ind = 0;

    setInterval(function(){
        slides[ind].classList.remove(activeClass);
        ind++;
        if(ind +1 > slides.length){
            ind=0;
        }
        slides[ind].classList.add(activeClass);
        
    }, 5000)
}())