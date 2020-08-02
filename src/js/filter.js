// filter menu highlight
(function(){
const controls = document.querySelectorAll(".filter__link");
const activeClass = "filter__item--active";
controls.forEach(function(control){
    control.addEventListener("click", function(e){
        e.preventDefault();
        controls.forEach(function(link){
            link.closest(".filter__item").classList.remove(activeClass);
            //find parent for link with class ...
        })
        control.closest('.filter__item').classList.add(activeClass);
    } )
}) 

    // // filter
    const elem = document.querySelector(".product__list");
    const iso = new Isotope( elem, {
      itemSelector: ".product__item",
    });
}())