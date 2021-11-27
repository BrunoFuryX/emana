if ($('.instagram__content').length) {
    $('.instagram__content').not('.slick-initialized').slick({
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1023,
                settings: "unslick"
            }
        ]
    });
}
