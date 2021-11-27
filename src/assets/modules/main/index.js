jQuery('.button--menu').click(function() {
    jQuery('body').addClass('menu__open')
});

jQuery('.button__close--navigation').click(function() {
    jQuery('body').removeClass('menu__open')
});


jQuery('.search__active').on("click",function() {
    jQuery('.search__form').addClass('active')
});
