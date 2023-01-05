const slider = tns({
    container: '.carusel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    autoplay: true,
    speed: 1200,
    autoplayButtonOutput: false,
    mouseDrag: true,
    responsive: {
        320: {
            nav:true,
            navContainer: '.carusel__nav',
            navAsTrambnails: true,
            autoHeight: true,
        },
        1024: {
            nav: false,
            autoHeight: false,
        },
    },

  });

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};

$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            })
        });
    };

    toggleSlide('.catalog-item__more')
    toggleSlide('.catalog-item__back')


  });

