




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


if(jQuery(".page-product").length > 0){
    (function (a) { a.isScrollToFixed = function (b) { return !!a(b).data("ScrollToFixed") }; a.ScrollToFixed = function (d, i) { var m = this; m.$el = a(d); m.el = d; m.$el.data("ScrollToFixed", m); var c = false; var H = m.$el; var I; var F; var k; var e; var z; var E = 0; var r = 0; var j = -1; var f = -1; var u = null; var A; var g; function v() { H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed"); f = -1; E = H.offset().top; r = H.offset().left; if (m.options.offsets) { r += (H.offset().left - H.position().left) } if (j == -1) { j = r } I = H.css("position"); c = true; if (m.options.bottom != -1) { H.trigger("preFixed.ScrollToFixed"); x(); H.trigger("fixed.ScrollToFixed") } } function o() { var J = m.options.limit; if (!J) { return 0 } if (typeof (J) === "function") { return J.apply(H) } return J } function q() { return I === "fixed" } function y() { return I === "absolute" } function h() { return !(q() || y()) } function x() { if (!q()) { var J = H[0].getBoundingClientRect(); u.css({ display: H.css("display"), width: J.width, height: J.height, "float": H.css("float") }); cssOptions = { "z-index": m.options.zIndex, position: "fixed", top: m.options.bottom == -1 ? t() : "", bottom: m.options.bottom == -1 ? "" : m.options.bottom, "margin-left": "0px" }; if (!m.options.dontSetWidth) { cssOptions.width = H.css("width") } H.css(cssOptions); H.addClass(m.options.baseClassName); if (m.options.className) { H.addClass(m.options.className) } I = "fixed" } } function b() { var K = o(); var J = r; if (m.options.removeOffsets) { J = ""; K = K - E } cssOptions = { position: "absolute", top: K, left: J, "margin-left": "0px", bottom: "" }; if (!m.options.dontSetWidth) { cssOptions.width = H.css("width") } H.css(cssOptions); I = "absolute" } function l() { if (!h()) { f = -1; u.css("display", "none"); H.css({ "z-index": z, width: "", position: F, left: "", top: e, "margin-left": "" }); H.removeClass("scroll-to-fixed-fixed"); if (m.options.className) { H.removeClass(m.options.className) } I = null } } function w(J) { if (J != f) { H.css("left", r - J); f = J } } function t() { var J = m.options.marginTop; if (!J) { return 0 } if (typeof (J) === "function") { return J.apply(H) } return J } function B() { if (!a.isScrollToFixed(H) || H.is(":hidden")) { return } var M = c; var L = h(); if (!c) { v() } else { if (h()) { E = H.offset().top; r = H.offset().left } } var J = a(window).scrollLeft(); var N = a(window).scrollTop(); var K = o(); if (m.options.minWidth && a(window).width() < m.options.minWidth) { if (!h() || !M) { p(); H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed") } } else { if (m.options.maxWidth && a(window).width() > m.options.maxWidth) { if (!h() || !M) { p(); H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed") } } else { if (m.options.bottom == -1) { if (K > 0 && N >= K - t()) { if (!L && (!y() || !M)) { p(); H.trigger("preAbsolute.ScrollToFixed"); b(); H.trigger("unfixed.ScrollToFixed") } } else { if (N >= E - t()) { if (!q() || !M) { p(); H.trigger("preFixed.ScrollToFixed"); x(); f = -1; H.trigger("fixed.ScrollToFixed") } w(J) } else { if (!h() || !M) { p(); H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed") } } } } else { if (K > 0) { if (N + a(window).height() - H.outerHeight(true) >= K - (t() || -n())) { if (q()) { p(); H.trigger("preUnfixed.ScrollToFixed"); if (F === "absolute") { b() } else { l() } H.trigger("unfixed.ScrollToFixed") } } else { if (!q()) { p(); H.trigger("preFixed.ScrollToFixed"); x() } w(J); H.trigger("fixed.ScrollToFixed") } } else { w(J) } } } } } function n() { if (!m.options.bottom) { return 0 } return m.options.bottom } function p() { var J = H.css("position"); if (J == "absolute") { H.trigger("postAbsolute.ScrollToFixed") } else { if (J == "fixed") { H.trigger("postFixed.ScrollToFixed") } else { H.trigger("postUnfixed.ScrollToFixed") } } } var D = function (J) { if (H.is(":visible")) { c = false; B() } else { l() } }; var G = function (J) { (!!window.requestAnimationFrame) ? requestAnimationFrame(B) : B() }; var C = function () { var K = document.body; if (document.createElement && K && K.appendChild && K.removeChild) { var M = document.createElement("div"); if (!M.getBoundingClientRect) { return null } M.innerHTML = "x"; M.style.cssText = "position:fixed;top:100px;"; K.appendChild(M); var N = K.style.height, O = K.scrollTop; K.style.height = "3000px"; K.scrollTop = 500; var J = M.getBoundingClientRect().top; K.style.height = N; var L = (J === 100); K.removeChild(M); K.scrollTop = O; return L } return null }; var s = function (J) { J = J || window.event; if (J.preventDefault) { J.preventDefault() } J.returnValue = false }; m.init = function () { m.options = a.extend({}, a.ScrollToFixed.defaultOptions, i); z = H.css("z-index"); m.$el.css("z-index", m.options.zIndex); u = a("<div />"); I = H.css("position"); F = H.css("position"); k = H.css("float"); e = H.css("top"); if (h()) { m.$el.after(u) } a(window).bind("resize.ScrollToFixed", D); a(window).bind("scroll.ScrollToFixed", G); if ("ontouchmove" in window) { a(window).bind("touchmove.ScrollToFixed", B) } if (m.options.preFixed) { H.bind("preFixed.ScrollToFixed", m.options.preFixed) } if (m.options.postFixed) { H.bind("postFixed.ScrollToFixed", m.options.postFixed) } if (m.options.preUnfixed) { H.bind("preUnfixed.ScrollToFixed", m.options.preUnfixed) } if (m.options.postUnfixed) { H.bind("postUnfixed.ScrollToFixed", m.options.postUnfixed) } if (m.options.preAbsolute) { H.bind("preAbsolute.ScrollToFixed", m.options.preAbsolute) } if (m.options.postAbsolute) { H.bind("postAbsolute.ScrollToFixed", m.options.postAbsolute) } if (m.options.fixed) { H.bind("fixed.ScrollToFixed", m.options.fixed) } if (m.options.unfixed) { H.bind("unfixed.ScrollToFixed", m.options.unfixed) } if (m.options.spacerClass) { u.addClass(m.options.spacerClass) } H.bind("resize.ScrollToFixed", function () { u.height(H.height()) }); H.bind("scroll.ScrollToFixed", function () { H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed"); B() }); H.bind("detach.ScrollToFixed", function (J) { s(J); H.trigger("preUnfixed.ScrollToFixed"); l(); H.trigger("unfixed.ScrollToFixed"); a(window).unbind("resize.ScrollToFixed", D); a(window).unbind("scroll.ScrollToFixed", G); H.unbind(".ScrollToFixed"); u.remove(); m.$el.removeData("ScrollToFixed") }); D() }; m.init() }; a.ScrollToFixed.defaultOptions = { marginTop: 0, limit: 0, bottom: -1, zIndex: 1000, baseClassName: "scroll-to-fixed-fixed" }; a.fn.scrollToFixed = function (b) { return this.each(function () { (new a.ScrollToFixed(this, b)) }) } })(jQuery);
    // scroll
    (function ($) {
        // Atualizar o carrinho sozinho na pag de produto
        jQuery(document).ready(function ($) {

            $(document).ajaxComplete(function (event, xhr, settings) {
                if (settings.url.indexOf("cart_preview") !== -1) {
                    var UPDATECART = new CustomEvent('UPDATECART');
                    window.dispatchEvent(UPDATECART);
                }
            });
        })
        jQuery("#foto_p").removeAttr("data-target")
    })(jQuery);
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

    jQuery("body").addClass("show-cookies-alert");

    jQuery(".cookies-alert, .cookies-alert__close").on("click", function (e) {
        if (e.target === e.currentTarget) {
            jQuery("body").removeClass("show-cookies-alert");
            window.sessionStorage.setItem("cookies-alert", 1);
        }
    });

    document.cookie = "CookieAlertBase=true";
};





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
            responsive: [
                {
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

var test = $("#tab-payments").attr("data-url");
$.get(test, function(resultado){
    $("#tab-payments").html(resultado);
})

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

 