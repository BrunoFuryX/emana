



function debounce(func){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,200,event);
    };
}

function navigationHiddenResize() {
    var widthNavigation = jQuery('.menu--navigation .menu__ul--nv1').outerWidth();
    var widthCurrent = 0;
    jQuery('.menu--navigation .menu__item--nv1').removeClass('menu__item--hidden');
    jQuery('.menu--navigation .menu__item--nv1').each(function(){
        widthCurrent += jQuery(this).outerWidth();
        if(widthCurrent > widthNavigation) {
            jQuery(this).addClass('menu__item--hidden');
        }
    });
}

function navigationAlign() {
    jQuery('.menu--navigation').each(function(){
        jQuery(this).find('.menu--nv2').removeClass('menu--rtl');
        jQuery(this).find('.menu--nv2').each(function(){
            var nav = jQuery(this).closest('.menu--nv1').outerWidth();
            var left = jQuery(this).offset().left + jQuery(this).outerWidth();

            if(left > nav) {
                
                jQuery(this).addClass('menu--rtl');
            }
        });
    })
}

var childs = Array.from(document.querySelectorAll('.menu__item--has-child'));

childs.forEach((child) => {
    child.addEventListener('click', (evt) => {
        const target = evt.target;
        if (evt.currentTarget === target) {
            var expanded = target.getAttribute('aria-expanded');
            if (expanded !== 'true' && expanded !== 'false') expanded = 'false';
            target.setAttribute('aria-expanded', expanded === 'true' ? false : true);
            jQuery(target).find('> .menu--sub').slideToggle();
        }
    }, false);
});


// window.addEventListener('resize', debounce(function(e){
//     navigationHiddenResize();
//     navigationAlign();
// }));

// navigationHiddenResize();
// navigationAlign();


