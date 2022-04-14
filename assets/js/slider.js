$('.slider').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    autoplaySpeed: 3000,
    speed: 500,
    centerMode: true,
    centerPadding: "15%",
    pauseOnHover: true,
    pauseOnFocus: false,
    cssEase: 'linear',
    dots: true,
    responsive: [{
        breakpoint: 767,
          settings: {
            slidesToShow: 2,
            centerMode: false,
        }
      }]
});