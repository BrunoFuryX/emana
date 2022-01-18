jQuery.get('https://blog.souemana.com.br/wp-json/wp/v2/posts?filter[orderby]=date&per_page=4&_embed').done(function(data) {
    data.forEach(function(i){ 
        var date = i.date; 
        function formatDate(date) {
            var monthNames = [
              "Janeiro", "Fevereiro", "Março",
              "Abril", "Maio", "Junho", "Julho",
              "Agosto", "Setembro", "Outubro",
              "Novembro", "Dezembro"
            ];
            var day = date.getDate(date);
            var monthIndex = date.getMonth(date);
            var year = date.getFullYear(date);
            return day + '/' + monthIndex+1 + '/' + year;
        }
        var image = i._embedded['wp:featuredmedia'][0].source_url;
        var title = i.title.rendered;
        var description = i.excerpt.rendered;
        var link = i.link; 
        var html ='<div class="blog__item">' +
            '<figure>' +
            '<a class="list__post-link" target="_blank" href="' +link + '">'+
            '<img src="'+ image + '" alt="' + title + '" title="' + title + '"/>'+
            '<span>' + formatDate(new Date(date))  + '</span>' +
            '</a>'
            + '</figure>' +
            '<div class="list__post-content">' +
                '<h4>' + title + '</h4>' +
                '<a target="_blank" href="' +link + '">Leia mais</a>' +
            '</div>' +
        '</div>';
        jQuery('.blog__content').append($(html));
    });
});
 
setTimeout(function(){ 
    if (jQuery('.blog__content').length) {
        jQuery('.blog__content').not('.slick-initialized').slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
    }
    jQuery(window).trigger('resize');
},2000);
 