import $ from 'jquery';


export default class SlickSlider {
    init() {
        $('[data-slick]').not('.slick-initialized').each(function () {
            let self = $(this);
            if (self.data('count') === 1) {
                return;
            }

            self.slick({
                prevArrow: "<button type=\"button\" class=\"btn btn-link slick-prev slick-arrow\"><i class=\"material-icons left\">&#xE314;</i></button>",
                nextArrow: "<button type=\"button\" class=\"btn btn-link slick-next slick-arrow\"><i class=\"material-icons right\">&#xE315;</i></button>"

            });
        });
    }

}

$(window).ready(function () {
    // initialize big slider
    $('.slick-slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    // append all slider pages and title to create nav slider
    $('.slick-slides .slick-track').children('.slick-slide').each(function () {
        var title = $(this).find('.h2').html();
        $('.slider-nav').append('<div class="slide-nav"><p>' + title + '</p></div>')
    });

    //  initialize nav slider
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick-slides',
        centerMode: true,
        focusOnSelect: true
    });
})
