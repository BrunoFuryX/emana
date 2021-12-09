

var $ = $tray;
if (typeof $ == 'function') {
    jQuery(document).ready(function () {
        jQuery(window).ajaxComplete(function (event, xhr, settings) {
            if (settings) {
                if (settings.url.indexOf('variant_gallery') !== -1) {
                    loadThumb();
                }
            }
        });
        loadThumb();
    });

    function loadThumb() {
        var thumbs = jQuery('.produto-imagem-miniaturas');

        if (thumbs.length) {
            thumbs.hide();

            var images = thumbs.find('img, .icon-video');
            let html;

            if (jQuery('.thumbs').length) jQuery('.thumbs').remove();

            if (images.length) {
                html = `<div class="thumbs">`;
                html += `<ul class="thumbs__list">`;

                images.each((index, item) => {
                    html += createThumb(jQuery(item).attr('src'), index);
                });

                html += `</ul>`;
                html += `</div>`;
                thumbs.after(html);

                jQuery(document).trigger("thumbs:start");

                jQuery('.thumbs a').click((evt) => {
                    let index = jQuery(evt.currentTarget).attr('data-index');

                    selectThumb(index);

                    if (jQuery(evt.currentTarget).find('.thumb__video').length) {
                        jQuery('#colVideo').show();
                    } else {
                        jQuery(jQuery('a', thumbs).eq(index)).mouseover().click();
                        jQuery('#colVideo').hide();
                    }
                    evt.preventDefault();
                });

                selectThumb('0');
            }
        }
    }

    function selectThumb(index) {
        jQuery(`.thumbs li`).removeClass('thumbs__item--actived');
        jQuery(`.thumbs [data-index=${index}]`).closest('li').addClass('thumbs__item--actived');
    }

    function createThumb(src, index) {
        if (src) {
            return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><img class="thumbs__image" src="${src}" /></a></li>`;
        } else {
            return `<li class="thumbs__item"><a class="thumbs__link" data-index="${index}" href="#${index}"><span class="thumb__video"></span></a></li>`;
        }
    }
}