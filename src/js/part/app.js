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
        if ( $('.head-phone-more').hasClass('active') ) {
            contactOpen();
        }
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
    });

    var contactOpen = function() {
        $('.head-phone-more').toggleClass('active');
        $('.head-call').slideToggle();
    }

    $('.head-phone-more').on('click', function() {
        contactOpen();
    });

    $('.head-call__other').on('click', function() {
        $('.head-call').hide();
        $('.head-city').show();
    });

    $('.head-city-one').on('click', function() {
        thisCity = $(this).data('city');
        console.log(thisCity);
        $('.head-bottom-one').hide();
        $('.'+thisCity).show();

        $('.head-call').show();
        $('.head-city').hide();
    });

    $('.about-more').on('click', function() {
        $('.about-hide').slideToggle();
        $(this).toggleClass('active');

        if ( $(this).hasClass('active') ) {
            $(this).find('span').text('Cвернуть');
        } else {
            $(this).find('span').text('Читать дальше');
        }
    });


});