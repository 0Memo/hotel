$('.responsive').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }
    ]
});