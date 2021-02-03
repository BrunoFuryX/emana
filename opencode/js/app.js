




jQuery('.button--menu').click(function() {
    jQuery('body').addClass('menu__open')
});

jQuery('.button__close--navigation').click(function() {
    jQuery('body').removeClass('menu__open')
});


 if($('.showcase__list[data-carousel=true]')) {
    $('.showcase__list[data-carousel=true]').each(function(){
        $(this).find('.showcase__item--empty').remove();
        $(this).not('.slick-initialized').slick({
            mobileFirst: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: `<button aria-label="prev" type="button" class="slick-prev"><</button>`,
            nextArrow: `<button aria-label="prev" type="button" class="slick-next">></button>`,
            responsive: [
                {
                    breakpoint: 424,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4   
                    }
                }
            ]   
        });
    });
    
 }

 

if($('.banner--javascript .banner__list')) {
$('.banner--javascript .banner__list').not('.slick-initialized').slick({
    mobileFirst: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button aria-label="prev" type="button" class="slick-prev"><</button>`,
    nextArrow: `<button aria-label="next" type="button" class="slick-next">></button>`,
    responsive: [
        {
            breakpoint: 424,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]   
});
}

if($('.banner--grid .banner__list')) {
$('.banner--grid .banner__list').not('.slick-initialized').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" aria-label="prev" class="slick-prev"><</button>`,
    nextArrow: `<button type="button" aria-label="next" class="slick-next">></button>`,
    responsive: [
        {
            breakpoint: 424,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4   
            }
        }
    ]   
});
}



var controls = Array.from(document.querySelectorAll("[aria-controls]"));
var body = document.querySelector("body");

controls.forEach(control => {
    control.addEventListener("click", evt => {
        var currentTarget = evt.currentTarget;
        var id = `#${currentTarget.getAttribute("aria-controls")}`;

        if (id.indexOf("slick") === -1) {
            var el = document.querySelector(id);
            var currentHidden = el.getAttribute("aria-hidden");
            var hasFixed = el.getAttribute("data-fixed") == "false" ? false : true;

            if (currentHidden != "false" && currentHidden != "true")
                currentHidden = "true";
            if (hasFixed) {
                if (currentHidden === "true") body.classList.add("fixed");
                else body.classList.remove("fixed");
            }

            el.setAttribute("aria-hidden", currentHidden === "true" ? false : true);
        }
    });
});


 



var button = $('#bt-submit-comments');

if(button) {
    var buttonAction = $(`<button class="comments__button" type="button">Avaliar</button>`);
    button.after(buttonAction);

    buttonAction.click(() => {
        button.trigger('click');
    });
}



// Get cookie function
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// call getCokkie function and set into exists variable
var exists = getCookie('CookieAlertBase');

// check if cookie is active
if (exists != 'true') {

    jQuery("body").addClass("show-lgpd-alert");

    jQuery(".lgpd-alert, .lgpd-alert__close").on("click", function (e) {
        if (e.target === e.currentTarget) {
            jQuery("body").removeClass("show-lgpd-alert");
            window.sessionStorage.setItem("lgpd-alert", 1);
        }
    });

    document.cookie = "CookieAlertBase=true";
};


// function FakeSelect() {
//     $('select').each(function(){
//         if($(this).closest('.fake-select').length === 0) {
//             var text = $(this).find('option:selected').text();
//             var fake = $('<div class="fake-select">');
//             var label = $('<span class="fake-select__label">').text(text);
//             var cssClass = $(this).attr('class').split(' ');

//             cssClass.forEach((item) => {
//                 if(item !== '') {
//                     fake.addClass(item);
//                 }
//             })

//             fake.prepend(label);
//             $(this).after(fake);
//             fake.append(this);

//             $(this).change(() => { label.text($(this).find('option:selected').text()) });
//         }
//     });
// }

// FakeSelect();

// document.addEventListener('FAKESELECT', () => { FakeSelect() }, false);




function debounce(func){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,200,event);
    };
}

function navigationHiddenResize() {
    var widthNavigation = $('.menu--navigation .menu__ul--nv1').outerWidth();
    var widthCurrent = 0;
    $('.menu--navigation .menu__item--nv1').removeClass('menu__item--hidden');
    $('.menu--navigation .menu__item--nv1').each(function(){
        widthCurrent += $(this).outerWidth();
        if(widthCurrent > widthNavigation) {
            $(this).addClass('menu__item--hidden');
        }
    });
}

function navigationAlign() {
    $('.menu--navigation').each(function(){
        $(this).find('.menu--nv2').removeClass('menu--rtl');
        $(this).find('.menu--nv2').each(function(){
            var nav = $(this).closest('.menu--nv1').outerWidth();
            var left = $(this).offset().left + $(this).outerWidth();

            if(left > nav) {
                
                $(this).addClass('menu--rtl');
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






/* Lazy Load  */

document.addEventListener('DOMContentLoaded', function () {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy-new'))
    let active = false

    const lazyLoad = function () {
        if (active === false) {
            active = true

            setTimeout(function () {
                lazyImages.forEach(function (lazyImage) {
                    if (
                        lazyImage.getBoundingClientRect().top <=
                        window.innerHeight &&
                        lazyImage.getBoundingClientRect().bottom >= 0 &&
                        getComputedStyle(lazyImage).display !== 'none'
                    ) {
                        lazyImage.src = lazyImage.dataset.src
                        lazyImage.srcset = lazyImage.dataset.srcset
                        lazyImage.classList.remove('lazy-new')

                        lazyImages = lazyImages.filter(function (image) {
                            return image !== lazyImage
                        })

                        if (lazyImages.length === 0) {
                            document.removeEventListener('scroll', lazyLoad)
                            window.removeEventListener('resize', lazyLoad)
                            window.removeEventListener(
                                'orientationchange',
                                lazyLoad
                            )
                        }
                    }
                })

                active = false
            }, 200)
        }
    }

    document.addEventListener('scroll', lazyLoad)
    window.addEventListener('resize', lazyLoad)
    window.addEventListener('orientationchange', lazyLoad)
})


if (typeof $tray === 'function') {

    $tray(document).on('thumbs:start', function () {
        $('.thumbs__list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: false,
            dots: false,
            prevArrow: `<button type="button" class="slick-prev"><svg viewBox="0 0 18 32"><path d="M6.05842759,16.0067642 L17.4825931,4.03512195 C17.7971586,3.70627642 17.9702069,3.26660163 17.9702069,2.79778862 C17.9702069,2.32871545 17.7971586,1.88930081 17.4825931,1.55993496 L16.4815448,0.511479675 C16.1674759,0.181593496 15.7476414,0 15.3002483,0 C14.8528552,0 14.4335172,0.181593496 14.1192,0.511479675 L0.516910345,14.764748 C0.201351724,15.0951545 0.0285517241,15.5366504 0.0297864518,16.0059837 C0.0285517241,16.4773984 0.201103448,16.918374 0.516910345,17.2490407 L14.1065379,31.4885203 C14.4208552,31.8184065 14.8401931,32 15.2878345,32 C15.7352276,32 16.1545655,31.8184065 16.469131,31.4885203 L17.469931,30.440065 C18.1211586,29.7576585 18.1211586,28.6467642 17.469931,27.9646179 L6.05842759,16.0067642 Z"></path></svg></button>`,
            nextArrow: `<button type="button" class="slick-next"><svg viewBox="0 0 18 32"><path d="M6.05842759,16.0067642 L17.4825931,4.03512195 C17.7971586,3.70627642 17.9702069,3.26660163 17.9702069,2.79778862 C17.9702069,2.32871545 17.7971586,1.88930081 17.4825931,1.55993496 L16.4815448,0.511479675 C16.1674759,0.181593496 15.7476414,0 15.3002483,0 C14.8528552,0 14.4335172,0.181593496 14.1192,0.511479675 L0.516910345,14.764748 C0.201351724,15.0951545 0.0285517241,15.5366504 0.0297864518,16.0059837 C0.0285517241,16.4773984 0.201103448,16.918374 0.516910345,17.2490407 L14.1065379,31.4885203 C14.4208552,31.8184065 14.8401931,32 15.2878345,32 C15.7352276,32 16.1545655,31.8184065 16.469131,31.4885203 L17.469931,30.440065 C18.1211586,29.7576585 18.1211586,28.6467642 17.469931,27.9646179 L6.05842759,16.0067642 Z"></path></svg></button>`,

            responsive: [{
                breakpoint: 1025,
                settings: {
                    vertical: false
                }
            },
            {
                breakpoint: 993,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: `<button type="button" class="slick-prev"><svg viewBox="0 0 18 32"><path d="M6.05842759,16.0067642 L17.4825931,4.03512195 C17.7971586,3.70627642 17.9702069,3.26660163 17.9702069,2.79778862 C17.9702069,2.32871545 17.7971586,1.88930081 17.4825931,1.55993496 L16.4815448,0.511479675 C16.1674759,0.181593496 15.7476414,0 15.3002483,0 C14.8528552,0 14.4335172,0.181593496 14.1192,0.511479675 L0.516910345,14.764748 C0.201351724,15.0951545 0.0285517241,15.5366504 0.0297864518,16.0059837 C0.0285517241,16.4773984 0.201103448,16.918374 0.516910345,17.2490407 L14.1065379,31.4885203 C14.4208552,31.8184065 14.8401931,32 15.2878345,32 C15.7352276,32 16.1545655,31.8184065 16.469131,31.4885203 L17.469931,30.440065 C18.1211586,29.7576585 18.1211586,28.6467642 17.469931,27.9646179 L6.05842759,16.0067642 Z"></path></svg></button>`,
                    nextArrow: `<button type="button" class="slick-next"><svg viewBox="0 0 18 32"><path d="M6.05842759,16.0067642 L17.4825931,4.03512195 C17.7971586,3.70627642 17.9702069,3.26660163 17.9702069,2.79778862 C17.9702069,2.32871545 17.7971586,1.88930081 17.4825931,1.55993496 L16.4815448,0.511479675 C16.1674759,0.181593496 15.7476414,0 15.3002483,0 C14.8528552,0 14.4335172,0.181593496 14.1192,0.511479675 L0.516910345,14.764748 C0.201351724,15.0951545 0.0285517241,15.5366504 0.0297864518,16.0059837 C0.0285517241,16.4773984 0.201103448,16.918374 0.516910345,17.2490407 L14.1065379,31.4885203 C14.4208552,31.8184065 14.8401931,32 15.2878345,32 C15.7352276,32 16.1545655,31.8184065 16.469131,31.4885203 L17.469931,30.440065 C18.1211586,29.7576585 18.1211586,28.6467642 17.469931,27.9646179 L6.05842759,16.0067642 Z"></path></svg></button>`,
                }
            }
            ]

        })
    })
}


// import axios from 'axios';

// document.addEventListener("DOMContentLoaded", function(){

//     var tabs = document.querySelector('.product-tabs');
//     if(tabs){
//         var urls = Array.from(tabs.querySelectorAll('[data-url]'));

//         urls.forEach((element) => {
//             var url = element.getAttribute('data-url');
//             axios.get(url)
//                 .then((data) => data.data)
//                 .then((data) => element.innerHTML = data);
//         });

//         var customTabs = Array.from(document.querySelectorAll('.product-tabs--custom .product-tabs__link'));

//         customTabs.forEach((customTab) => {
//             customTab.addEventListener('click', (evt) => {
//                 var href = evt.currentTarget.getAttribute('href');
//                 var hash = href.match(/^[^#]*#(.*)/)[1];

//                 if(hash) {
//                     var contents = Array.from(document.querySelectorAll('.prodBox'));
//                     var current = document.querySelector(`#${ hash }`);

//                     contents.forEach((content) => content.setAttribute('style', 'display:none'));
//                     if(current) current.setAttribute('style', 'display: block');

//                     customTabs.forEach((customTab) => customTab.classList.remove('on'));
//                     evt.currentTarget.classList.add('on');

//                 }

//                 evt.preventDefault();
//             });
//         });

//         if(customTabs.length) {
//             customTabs[0].classList.add('on');
//         }
//     }
// });



if($('.rulers__list')) {
    $('.rulers__list').not('.slick-initialized').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: `<button type="button" aria-label="prev" class="slick-prev"><</button>`,
        nextArrow: `<button type="button" aria-label="next" class="slick-next">></button>`,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]   
    });
}






var $ = $tray;
if (typeof $ == 'function') {
    $(document).ready(function () {
        $(window).ajaxComplete(function (event, xhr, settings) {
            if (settings) {
                if (settings.url.indexOf('variant_gallery') !== -1) {
                    loadThumb();
                }
            }
        });
        loadThumb();
    });

    function loadThumb() {
        var thumbs = $('.produto-imagem-miniaturas');

        if (thumbs.length) {
            thumbs.hide();

            var images = thumbs.find('img, .icon-video');
            let html;

            if ($('.thumbs').length) $('.thumbs').remove();

            if (images.length) {
                html = `<div class="thumbs">`;
                html += `<ul class="thumbs__list">`;

                images.each((index, item) => {
                    html += createThumb($(item).attr('src'), index);
                });

                html += `</ul>`;
                html += `</div>`;
                thumbs.after(html);

                $(document).trigger("thumbs:start");

                $('.thumbs a').click((evt) => {
                    let index = $(evt.currentTarget).attr('data-index');

                    selectThumb(index);

                    if ($(evt.currentTarget).find('.thumb__video').length) {
                        $('#colVideo').show();
                    } else {
                        $($('a', thumbs).eq(index)).mouseover().click();
                        $('#colVideo').hide();
                    }
                    evt.preventDefault();
                });

                selectThumb('0');
            }
        }
    }

    function selectThumb(index) {
        $(`.thumbs li`).removeClass('thumbs__item--actived');
        $(`.thumbs [data-index=${index}]`).closest('li').addClass('thumbs__item--actived');
    }

    function createThumb(src, index) {
        if (src) {
            return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><img class="thumbs__image" src="${src}" /></a></li>`;
        } else {
            return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><span class="thumb__video"></span></a></li>`;
        }
    }
}
 



jQuery(document).ready(function () {

    //ESCONDER ITENS NO SCROLL MOBLIE
    let body = document.querySelector('body');
    let currentTop = 0;
    let oldTop = 0;
    let headerTop = document.querySelector('#header').offsetHeight;

    body.setAttribute('data-scrolling', false);
    body.setAttribute('data-scrolling-mode', 'none');

    window.addEventListener('scroll', () => {
        currentTop = window.pageYOffset;

        if (currentTop == 0) body.setAttribute('data-scrolling', false);
        else body.setAttribute('data-scrolling', true);

        if (currentTop > headerTop) {
            if (oldTop > currentTop) {
                body.setAttribute('data-scrolling-mode', 'up');
            } else if (oldTop < currentTop) {
                body.setAttribute('data-scrolling-mode', 'down');
            } else {
                body.setAttribute('data-scrolling-mode', 'none');
            }
            oldTop = currentTop;
        } else body.setAttribute('data-scrolling-mode', 'none');
    });

});




