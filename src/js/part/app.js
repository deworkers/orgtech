$(document).ready(function() {
    

    var scrollTo = function(pos) {
        var pos;
        $('html,body').animate({scrollTop:pos}, 1000);
        return false;
    }

    $('.j-scroll-to').click(function(event) {
        event.preventDefault(); 
        var div = $(this).attr('href');
        var toPos = $(div).offset().top;
        scrollTo(toPos);
    });

    /*Модальные окна*/
    var overlay = $('#overlay'); 
    var open_modal = $('.open-modal'); 
    var close = $('.modal-close'); 
    var modal = $('.modal'); 

    // для открытия модалки нужна ссылка вида <a href="#name"></a> и класс "open_modal"
    // будет открыта модалка с id="name"
    open_modal.click( function(event){
        modal.fadeOut(200);
        event.preventDefault(); 
        var div = $(this).attr('href'); 
        overlay.fadeIn(400);
        $(div).fadeIn(400);
        $('html, body').addClass('j-noScroll');
        baseBoxHeight = $('.mobile-menu__right').height();
        
    });

    close.click(function() {
        modal.fadeOut(200);
        overlay.fadeOut(200);
        $('html, body').removeClass('j-noScroll');
    });

    overlay.click(function(event) {
        if ( $( event.target ).attr('id') == 'overlay' ) {
            $(this).fadeOut(200);
            modal.fadeOut(200);
            $('html, body').removeClass('j-noScroll');
        }
    });

    /*селект*/
    $('.select').click(function(e) {
        if ( !$(this).hasClass('j-open') ) {
            e.stopPropagation();
            $(this).addClass('j-open');
            $('.select-list').hide();
            $('.select').not(this).removeClass('j-open');
            $(this).find('.select-list').slideDown(200);
        } else {
            $(this).find('.select-list').slideUp(200);
            $(this).removeClass('j-open');
        }
    });


    // подстановка значения по умолчанию
    $('.select').each(function() {
        var val = $(this).find('.select-default').text();
        $(this).find('.select-default').addClass('selected');
        console.log(val);
        $(this).find('input').val(val);
    })

    $('body').click(function() {
        $('.select-list').slideUp(200);
        $('.select').removeClass('j-open');
    });

    $('.select-list__one').click(function(e) {
        e.stopPropagation();
        var val = $(this).text();
        $('.select').removeClass('j-open');
        $(this).parents('.select').find('input').val(val);
        $(this).parents('.select').find('.select-list').slideUp(200);
        $(this).parents('.select-list').find('.select-list__one').removeClass('selected');
        $(this).addClass('selected');
    });

    var newsSlider = new Swiper('.news-main-slider', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 5,
        nextButton: '.news-slider-next',
        prevButton: '.news-slider-prev',
        autoHeight: true
    });

    var contactOpen = function() {
        //$('.head-phone-more').toggleClass('active');
        $('.head-call').slideToggle();
    }

    $('.head-phone').on('click', function() {
        contactOpen();
        $('.head-phone').toggleClass('open');
        $('.head-city').slideUp();
        $('.head-phone-more').removeClass('active');
    });

    $('.head-call__other, .head-phone-more').on('click', function(event) {
        event.stopPropagation();
        $('.head-call').hide();
        $('.head-city').slideToggle();
        $('.head-phone').removeClass('open');
        $('.head-phone-more').toggleClass('active');
    });

    $('.head-city-one').on('click', function() {
        $('.head-city-one').show();
        thisCity = $(this).data('city');
        $('.head-city-one').each(function() {
            if ( $(this).data('city') == thisCity ) {
                $(this).hide();
            }
        });
        console.log(thisCity);
        $('.head-bottom-one').hide();
        $('.'+thisCity).show();
        $('.head-city').hide();
        $('.head-phone-more').removeClass('active');
    });

    $('.about-more').on('click', function() {
        $('.about-hide').toggleClass('active');
        $(this).toggleClass('active');

        if ( $(this).hasClass('active') ) {
            $(this).find('span').text('Cвернуть');
        } else {
            $(this).find('span').text('Читать дальше');
        }
    });

    
    $('.about-more--left').on('click', function() {
        $(this).prev('.about-hide').slideToggle();
        $(this).toggleClass('active');

        if ( $(this).hasClass('active') ) {
            $(this).find('span').text('Скрыть');
        } else {
            $(this).find('span').text('Показать');
        }
    });

    var swiper = new Swiper('.project', {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoHeight: true
    });

    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 1,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    //galleryTop.params.control = galleryThumbs;
    //galleryThumbs.params.control = galleryTop;


    $('.card-tab__title').on('click', function() {
        $(this).next('.card-tab__body').slideToggle();
        $(this).toggleClass('active');
    });

    /*$('.recommend-more').on('click', function() {
        $(this).hide();
        $('.recommend-one.hidden').slideDown();
    });*/

    $('.search-one__title').on('click', function() {
        $(this).next('').slideToggle();
        $(this).toggleClass('active');
    });

    $('.open-filtr').on('click', function() {
        event.preventDefault();
        $('#overlay--top').fadeIn(200);
        $('#filtr').fadeIn(400);
        $('html, body').addClass('j-noScroll');
    });

    close.click(function() {
        $('#overlay--top').fadeOut(200);
        $('#filtr').fadeOut(200);
        $('html, body').removeClass('j-noScroll');
    });

    $('#overlay--top').click(function(event) {
        if ( $( event.target ).attr('id') == 'overlay--top' ) {
            $(this).fadeOut(200);
            $('#filtr').fadeOut(200);
            $('html, body').removeClass('j-noScroll');
        }
    });


    $('.filtr-bottom__reset').on('click', function() {
        $('.search-one__param input').prop('checked', false);
    });

    var swiper = new Swiper('.product-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });

    $('.category > li').each(function() {
        if ( $(this).find('li').length > 0 ) {
            $(this).prepend('<div class="j-submenu"></div>')
        }
    });

    $('.j-submenu').on('click', function(event) {
        event.stopPropagation();
        $(this).parents('li').find('ul').slideToggle();
    });

    $('.tab-list__one').on('click', function() {
        $('.tab-one, .tab-list__one').removeClass('active');

        $(this).addClass('active');
        idx = $(this).index();
        $(this).parents('.tabs').find('.tab-one').eq(idx).addClass('active');
    });

    $('.products-list-one__title').on('click', function() {
        $(this).parents('.products-list-one').toggleClass('open').find('.products-list-one__hidden').slideToggle();
    });

    $('.products-list-one__close').on('click', function() {
        $(this).parents('.products-list-one').toggleClass('open').find('.products-list-one__hidden').slideToggle();
    });

    $('.card-descr__order').on('click', function() {
        $('#order').fadeIn();
        $('html, body').addClass('j-noScroll');
    });

    $('.order-close').on('click', function() {
        $('#order').fadeOut();
        $('html, body').removeClass('j-noScroll');
    });

    $("input[name='phone']").mask("+7(999) 999-99-99",{placeholder:"_"});

    $('.hideblock').each(function() {
        if ( !$(this).hasClass('active') ) {
            $(this).append('<div class="hideblock-button">Скрыть</div>');
        } else {
            $(this).append('<div class="hideblock-button">Показать</div>');
            $(this).find('.products-list-one').hide();
        }
    });

    $('.hideblock-button').on('click', function() {
        if (  $(this).parents('.hideblock').hasClass('active') ) {
            $(this).text('Скрыть');
            $(this).parents('.hideblock').toggleClass('active').find('.products-list-one').slideDown();
        } else {
            $(this).text('Показать');
            $(this).parents('.hideblock').toggleClass('active').find('.products-list-one').slideUp();
        }

    });

    var mainSlider = new Swiper('.main-top', {
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 5
    });

});