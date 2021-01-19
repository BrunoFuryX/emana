




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






var button = $('#bt-submit-comments');

if(button) {
    var buttonAction = $(`<button class="comments__button" type="button">Avaliar</button>`);
    button.after(buttonAction);

    buttonAction.click(() => {
        button.trigger('click');
    });
}


 


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


if ($('.page-home').length > 0) {
    // Get cookie function
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        console.log(decodedCookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                console.log(c.substring(name.length, c.length));
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
}





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

document.addEventListener('DOMContentLoaded', function() {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy-new'))
    let active = false

    const lazyLoad = function() {
        if (active === false) {
            active = true

            setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                    if (
                        lazyImage.getBoundingClientRect().top <=
                            window.innerHeight &&
                        lazyImage.getBoundingClientRect().bottom >= 0 &&
                        getComputedStyle(lazyImage).display !== 'none'
                    ) {
                        lazyImage.src = lazyImage.dataset.src
                        lazyImage.srcset = lazyImage.dataset.srcset
                        lazyImage.classList.remove('lazy-new')

                        lazyImages = lazyImages.filter(function(image) {
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






// var $ = $tray;
// if( typeof $ == 'function') {
//     $(document).ready(function(){
//         $(window).ajaxComplete(function( event, xhr, settings ){
//             if(settings) {
//                 if(settings.url.indexOf('variant_gallery') !==  -1) {
//                     loadThumb();
//                 }
//             }
//         });
//         loadThumb();
//     });

//     function  loadThumb() {
//         var  thumbs  =  $('.produto-imagem-miniaturas');

//         if(thumbs.length) {
//             thumbs.hide();

//             var   images  =  thumbs.find('img, .icon-video');
//             let     html;
            
//             if($('.thumbs').length) $('.thumbs').remove();

//             if(images.length) {
//                 html  =  `<div class="thumbs">`;
//                 html  +=  `<ul class="thumbs__list">`;
                
//                 images.each((index, item) => {
//                     html  +=  createThumb($(item).attr('src'), index);
//                 });
            
//                 html  +=  `</ul>`;
//                 html  +=  `</div>`;
//                 thumbs.after(html);

//                 $(document).trigger("thumbs:start");
                
//                 $('.thumbs a').click((evt) => {
//                     let index = $(evt.currentTarget).attr('data-index');

//                     selectThumb(index);
                    
//                     if ($(evt.currentTarget).find('.thumb__video').length) { 
//                         $('#colVideo').show();
//                     } else {
//                         $($('a', thumbs).eq(index)).mouseover().click();
//                         $('#colVideo').hide();
//                     }
//                     evt.preventDefault();
//                 });			
                
//                 selectThumb('0');
//             }
//         }
//     }
    
//     function selectThumb(index) {
//         $(`.thumbs li`).removeClass('thumbs__item--actived');
//         $(`.thumbs [data-index=${index}]`).closest('li').addClass('thumbs__item--actived');
//     }

//     function  createThumb(src,index) {
//         if (src) {
//             return  `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><img class="thumbs__image" src="${src}" /></a></li>`;
//         }else{
//             return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><span class="thumb__video"></span></a></li>`;
//         }
//     }
// }

 