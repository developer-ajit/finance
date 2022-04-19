// counter banner start
window.addEventListener('load', () =>{
    autoSlide();
});
function autoSlide(){
      setInterval(() => {
        slide(getItemActiveIndex() + 1)
      }, 3000);
}
function slide(toIndex){
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    if (toIndex >= itemsArray.length) {
        toIndex = 0;
    }
    const newItemActive = itemsArray[toIndex];
    newItemActive.classList.add("carousel_item_pos_next");
    setTimeout(() => {
        newItemActive.classList.add("carousel_item_next");
        itemActive.classList.add("carousel_item_next");
    }, 20);

    newItemActive.addEventListener("transitionend", ()=> {
        itemActive.className = "carousel_item";
        newItemActive.className = "carousel_item carousel_item__active";
    }, {
        once:true,
    });
}
function getItemActiveIndex(){
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
}
// counter banner end
$('.owlcarousel').owlCarousel({
    loop:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$(document).ready(function() {
    $('.testcarousel').owlCarousel({
      items: 2,
      loop:true,
      autoPlay: 3000,
      itemsDesktop: [1199, 1],
      itemsDesktopSmall: [979, 1],
      itemsMobile: [768, 1],
      dots:false,
      navigation: true,
      navigationText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ]
    });
  });
// counter animation 
$('.countanimation').counterUp({
    delay: 10,
    time: 1000,
    offset: 70,
    beginAt: 100,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
});
// imgae slider 
// var slide_index = 1;  
// displaySlides(slide_index);  
// function nextSlide(n) {  
//     displaySlides(slide_index += n);  
// }  
// function currentSlide(n) {  
//     displaySlides(slide_index = n);  
// }  
// function displaySlides(n) {  
//     var i;  
//     var slides = document.getElementsByClassName("showSlide");  
//     if (n > slides.length) { slide_index = 1 }  
//     if (n < 1) { slide_index = slides.length }  
//     for (i = 0; i < slides.length; i++) {  
//         slides[i].style.display = "none";  
//     }  
//     slides[slide_index - 1 ].style.display = "block";  
// }  
// imgae gallery 
$(document).ready(function() {
    $('.image_gellery').magnificPopup({
        type:'image',
        delegate:'a',
        gallery:{enabled:true}
      });
  });
  // imgae gallery 
//   responsive menu
function parentmenu(){
    $(this).find('.mobiledropdown').toggle(500);
}

function mobilemenuactive(){
    $('.mobile_menu').addClass('mobile_menuactive');
}
function menuhidebtn(){
    $('.mobile_menu').removeClass('mobile_menuactive');
}
$('.parentmenu > a').click(function (e) { 
    e.preventDefault();
    $(this).siblings('.mobiledropdown').toggle(500);
});