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

    // header slider
    const slide = document.querySelectorAll(".header-slider__item");
    const activeCls = 'header-slider__item--visible';
    let index = 0;

    setInterval(function(){
        slide[index].classList.remove(activeCls);
        index++;
        if(index +1 > slide.length){
            index=0;
        }
        slide[index].classList.add(activeCls);
        
    }, 4000)
}())