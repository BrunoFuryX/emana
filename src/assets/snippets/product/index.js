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
