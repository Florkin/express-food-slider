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
        if ($(this).find('.h2 span').hasClass('smaller')) {
            if ($(this).find('.h2').hasClass('seq')) {
                var title = "SEQ - " + $(this).find('.h2 .smaller').html();
            } else {
                var title = "CU - " + $(this).find('.h2 .smaller').html();
            }

        } else {
            var title = $(this).find('.h2').html();
        }
        $('.slider-nav').append('<div class="slide-nav"><p>' + title + '</p></div>')
    });

    $("#startSlider").click(function (e) {
        e.preventDefault();
        $('.slick-slides').slick('slickGoTo', 1);
    });

    // mouse scroll
    const $slider = $(".slider-nav");
    $slider
        .on('init', () => {
            mouseWheel($slider)
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slick-slides',
            centerMode: true,
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true
        })

    function mouseWheel($slider) {
        $(window).on('wheel', {
            $slider: $slider
        }, mouseWheelHandler)
    }

    function mouseWheelHandler(event) {
        event.preventDefault()
        const $slider = event.data.$slider
        const delta = event.originalEvent.deltaY

        if ($(".slider-nav:hover").length != 0) {
            if (delta > 0) {
                $slider.slick('slickNext')
            } else {
                $slider.slick('slickPrev')
            }
        }
    }
})
