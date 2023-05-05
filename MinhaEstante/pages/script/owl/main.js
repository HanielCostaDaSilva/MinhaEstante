$('.owl-carousel').owlCarousel({
    loop:true,
    nav: true,
    center:true,
    rewind:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})