$(function () {

    $('.filter-style').styler(); // Стилизация инпутов, чекбоксов, селектов ...

    $('.datepicker-here').datepicker();

    $('.tab').on('click', function (e) {
    e.preventDefault(); // отмена стандартного поведения браузера

    $($(this).siblings()).removeClass('tab--active');
    $('.tabs__content').removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');

    $('.start__slider').slick('setPosition'); // Инициализация слайдера
});



    $.fn.hasAttr = function(name) {  
    return this.attr(name) !== undefined;
 };
$('.input').on('change', function () {
    $(this).parent().find('button').show();
});

$('.reset-filter-btn').on('click', function () {
    $(this).hide();
    $(this).parent().find('input').val('');
});

$('.radio-field__label').on('click', function () {
    $(this).find('span').addClass('checked');
    $(this).siblings().find('span').removeClass('checked');
    // if ($(this).find('div').hasClass('focused checked')) {
    //     $(this).find('div').removeClass('focused checked');
    // } else {    
    //     $(this).find('div').addClass('focused checked');
    // }

    // if ($($(this).find('span').hasClass('checked'))) {
    //     $(this).find('span').removeClass('checked');
    // } else {
    //     $(this).find('span').addClass('checked');
    // }

    if($(this).find('input').hasAttr('checked')) {
        $(this).find('input').removeAttr("checked", "checked");
    } else {
        $(this).find('input').attr("checked", "checked");
    }
});


 $('.oval-check').on('click', function() {
     $(this).find('span').toggleClass('checked');
    if($(this).find('input').hasAttr('checked')) {
        $(this).find('input').removeAttr("checked", "checked");
    } else {
        $(this).find('input').attr("checked", "checked");
    }
});

$('.filters__reset-btn').on('click', function () {
    $(this).parent().parent().parent().find('input').removeAttr('checked');
});

$('.gabarits__minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.parent().siblings();
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 1;
    }

    $input.val(value);

});

$('.gabarits__plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.parent().siblings();
    var value = parseInt($input.val());

    value = value + 1;
    $input.val(value);
});

$('.add-driver').on('click', function () {
    $(this).before('<div class="field profile__field"><label class="label">Имя и Фамилия</laabel><input type="text" class="input field__value"><button class="reset-filter- btn"></button></div>');
});

$('.add-phone').on('click', function () {
    $(this).before('<div class="field phone-field profile__field"><label class= "label" for="phone">Номер телефона</label><div class="jq-selectbox jqselect filter-style"><select class="filter-style" name="country"><option value="by">BY</option><option value="ru">RU</option><option value="ua">UA</option></select><div class="jq-selectbox__select"><div class="jq-selectbox__select-text">BY</div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div><div class="jq-selectbox__dropdown" style="height: auto; bottom: auto; top: 20px; display: none;"><ul style="max-height:319px;"><li class="selected sel" style>BY</li><li style>RU</li><li style>UA</li></ul></div></div><input type="tel" name="phone"placeholder="+375 (_ _) _ _ _-_ _-_ _"></div>');
});

$('.add-email').on('click', function () {
    $(this).before('<div class= "field profile__field added-email__block profile__field-item profile__fields-col"><label class="label">Ваш e-mail</label><input type="email" class="input field__value"><button class="reset-filter-btn"></button></div>');
});

/* $('#add-bill').on('click', function () {
    $(this).before('');
}); */

    // Star rating
$(".review-form__rate-yo").rateYo({
    //"starSvg": '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M5.66911 0.478992C5.73124 0.353122 5.85942 0.273438 5.9998 0.273438C6.14018 0.273413 6.26839 0.353098 6.33052 0.478967L7.76896 3.39312C7.90423 3.66714 8.16565 3.85711 8.46808 3.90103L11.6842 4.36855C11.8231 4.38876 11.9385 4.48604 11.9819 4.61956C12.0253 4.75305 11.9891 4.89961 11.8886 4.9976L9.56159 7.2662C9.34276 7.47955 9.24292 7.78687 9.29453 8.08803L9.84361 11.2907C9.86732 11.429 9.81045 11.5689 9.69688 11.6513C9.58333 11.7339 9.43277 11.7447 9.30853 11.6794L6.43189 10.1673C6.16141 10.0251 5.83826 10.0251 5.56773 10.1674L2.69136 11.6793C2.5671 11.7447 2.41654 11.7337 2.30299 11.6512C2.18942 11.5687 2.13257 11.4289 2.15628 11.2906L2.7056 8.08817C2.75729 7.78691 2.65742 7.47954 2.43855 7.26615L0.111378 4.99763C0.0108778 4.89964 -0.0253249 4.75307 0.0180599 4.61958C0.0614446 4.48609 0.176845 4.38881 0.315764 4.36857L3.53179 3.90108C3.83421 3.85711 4.09567 3.66716 4.23093 3.3931L5.66911 0.478992Z" fill="white"/></svg>',
    starWidth: "12px",
    spacing: "5px",
    ratedFill: "#FFB800",
    normalFill: "#FFFFFF",
});

$(".employee-card__rate").rateYo({
    "starSvg": '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M5.66911 0.478992C5.73124 0.353122 5.85942 0.273438 5.9998 0.273438C6.14018 0.273413 6.26839 0.353098 6.33052 0.478967L7.76896 3.39312C7.90423 3.66714 8.16565 3.85711 8.46808 3.90103L11.6842 4.36855C11.8231 4.38876 11.9385 4.48604 11.9819 4.61956C12.0253 4.75305 11.9891 4.89961 11.8886 4.9976L9.56159 7.2662C9.34276 7.47955 9.24292 7.78687 9.29453 8.08803L9.84361 11.2907C9.86732 11.429 9.81045 11.5689 9.69688 11.6513C9.58333 11.7339 9.43277 11.7447 9.30853 11.6794L6.43189 10.1673C6.16141 10.0251 5.83826 10.0251 5.56773 10.1674L2.69136 11.6793C2.5671 11.7447 2.41654 11.7337 2.30299 11.6512C2.18942 11.5687 2.13257 11.4289 2.15628 11.2906L2.7056 8.08817C2.75729 7.78691 2.65742 7.47954 2.43855 7.26615L0.111378 4.99763C0.0108778 4.89964 -0.0253249 4.75307 0.0180599 4.61958C0.0614446 4.48609 0.176845 4.38881 0.315764 4.36857L3.53179 3.90108C3.83421 3.85711 4.09567 3.66716 4.23093 3.3931L5.66911 0.478992Z" fill = "#FFB800"/></svg>',
    starWidth: "12px",
    spacing: "5px",
    //ratedFill: "#FFB800",
    //normalFill: "#FFFFFF",
});

    $('.response-popup__add-list-item').on('click', function () {
    $('.response-popup__input').removeClass('none')
})

$('body').on('click', '.add-list-img', function () {
    $('.response-popup__add-input').val('');
    $('.response-popup__input').addClass('none');
    $('.response-popup__list').append(`<li class="response-popup__list-item">` + value + `</li>`);
});

$('.span-text').on('click', function () {
    $(this).find('.response-popup__dropdown').toggleClass('none');
});

$('.dropdow-list').on('click', function () {
    var listValue = $(this).text();
    $(this).parent().parent().find('span').text(listValue);
});

$('.top-filters__less-btn').on('click', function () {
    $('.main-filters').addClass('none');
    $('.filters__footer').addClass('none');
    $('.filters__main').addClass('remove-filter-style');
    $('.section-results').removeClass('search-results');
    $(this).addClass('none');
    $('.top-filters__more-btn').removeClass('none');
});
$('.top-filters__more-btn').on('click', function () {
    $('.main-filters').removeClass('none');
    $('.filters__footer').removeClass('none');
    $('.filters__main').removeClass('remove-filter-style');
    $('.section-results').addClass('search-results');
    $(this).addClass('none');
    $('.top-filters__less-btn').removeClass('none');
});

$('.order-card__settings-btn').on('click', function () {
    $(this).find('ul').toggleClass('none');
});

$('.carrier-profile__check-dropdown').on('click', function () {
    $(this).toggleClass('carrier-profile__check-dropdown--active')
    $('.carrier-profile__check-list').toggleClass('none');
});

$('.carrier-profile__item-head').on('click', function () {
    $(this).toggleClass('carrier-profile__item-head--active')
    $(this).parent().find('.carrier-profile__item-content').toggleClass('carrier-profile__item-content--active');
    $(this).parent().find('.carrier-profile__item-content').slideToggle('1000');
});

$('.knowledge-base__question-descr').on('click', function () {
    $(this).toggleClass('knowledge-base__question-descr--active')
    $(this).find('.knowledge-base__question-descr-content ').toggleClass('knowledge-base__question-descr-content--active');
});

$('.knowledge-base__start-working-block').on('click', function () {
    $(this).toggleClass('knowledge-base__start-working-block--active')
    $(this).find('.knowledge-base__start-working-block-content').toggleClass('knowledge-base__start-working-block-content--active');
});


    $('.some class').on('click', function(){
    $(this).toggleClass('some class--active');
    $(this).siblings().slideToggle('200'); // скорость 2с
});

/* order-fulfillment-cargo.html */
$('.contacts-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.contacts-block').find('.contacts-block__content').slideToggle(400);
});

$('.payment-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.payment-block').find('.payment-block__content').slideToggle(400);
});

$('.documents-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.documents-block').find('.documents-block__content').slideToggle(400);
});

$('.your-car-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.your-car-block').find('.your-car-block__info').slideToggle(400);
});

/* order-fulfillment-driver.html */
$('.help-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.help-block').find('.help-block__info').slideToggle(400);
});

    // ========================= OPENING BURGER-MENU ===================== //
$('.burger-menu .button-opening-burger-menu').click(function () {
    let backgroundBM = $('.burger-menu .bg-fixed-burger-menu');
    backgroundBM.addClass('bg-fixed-burger-menu--active');

    let headerBM = $('.burger-menu .header__menu');
    headerBM.addClass('header__menu--active');

    let crossButtonBM = $('.burger-menu .cross-icon');
    crossButtonBM.addClass('cross-icon--active');

    setTimeout(function () {
        $('.bg-fixed-burger-menu--active').animate({
            opacity: '1'
        }, 50);

        $('.header__menu--active').animate({
            left: '0px'
        }, 200, "linear");

        $('.cross-icon--active').animate({
            left: '269px'
        }, 200, "linear");

    }, 50);
});

$('.burger-menu .cross-icon').click(function closingBurgerMenu() {
    $('.header__menu--active').animate({
        left: '-320px'
    }, 200, "linear");

    $('.cross-icon--active').animate({
        left: '-269px'
    }, 200, "linear");

    $('.bg-fixed-burger-menu--active').animate({
        opacity: '0'
    }, 250);

    setTimeout(function () {
        $('.burger-menu .bg-fixed-burger-menu').removeClass('bg-fixed-burger-menu--active');
        $('.burger-menu .header__menu').removeClass('header__menu--active');
        $('.burger-menu .cross-icon').removeClass('cross-icon--active');
    }, 400);
});

// ========================= MENU-DROP ===================== //

$('.header__menu-item').on('click', function () {
    $(this).siblings().removeClass('header__menu-item--active');
    $(this).siblings().find('ul').slideUp();
    $(this).toggleClass('header__menu-item--active');
    $(this).find('ul').slideToggle('300');
});

$('.header__user-name').on('click', function () {
    $(this).toggleClass('header__user-name--active');
    $(this).parent().find('div.header__dashboard').toggleClass('header__dashboard--active');
});


// ========================= DASHBOARD ======================= //

$('.header-dashboard__item-title').on('click', function () {
    $(this).parent().find('ul').slideToggle('300');
    $(this).parent().parent().toggleClass('header-dashboard__menu-item--active');
});

$('.dashboard__item-header').on('click', function () {
    $(this).parent().find('ul').slideToggle('300');
});


// ======================== NOTIFICATIONS ======================= //

$('.header__notify').on('click', function () {
    $(this).toggleClass('header__notify--active');
    $('.header__notifications').toggleClass('header__notifications--active');
    console.log("hello");
});

//$('body').not('.header__notify').not('.header__notifications').on('click', function () {});

$('.notifications__item--new').on('click', function () {
    $(this).removeClass('notifications__item--new');
});


// ==================== SEARCH-FORM ================ //

$('.header__search-input').on('focus', function () {
    $(this).parent().addClass('header__search-form--active');
    $('.header__menu').hide();
    $('.header__search-help').show();

    if (($(window).width() >= 768) && ($(window).width() <= 1023)) {
        if ($('.header__search-form').hasClass('header__search-form--active') == true) {
            $('.logo.header__logo').hide();
        } else {
            $('.logo.header__logo').show();
        }
    }

    if (($(window).width() <= 709)) {
        if ($('.header__search-form').hasClass('header__search-form--active') == true) {
            $('.logo.header__logo').hide();
        } else {
            $('.logo.header__logo').show();
        }
    }
});

$('.header__search-input').on('blur', function () {
    $(this).parent().removeClass('header__search-form--active');
    $('.header__menu').show();
    $('.header__search-help').hide();

    setTimeout(function () {
        if (($(window).width() >= 768) && ($(window).width() <= 1023)) {
            if ($('.header__search-form').hasClass('header__search-form--active') != true) {
                $('.logo.header__logo').show();
            } else {
                $('.logo.header__logo').hide();
            }
        }

        if (($(window).width() <= 709)) {
            if ($('.header__search-form').hasClass('header__search-form--active') != true) {
                $('.logo.header__logo').show();
            } else {
                $('.logo.header__logo').hide();
            }
        }
    }, 100);
});

$(document).mouseup(function (e) {
    var div = $('.header__notifications');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.header__notify').removeClass('header__notify--active');
        $('.header__notify').addClass('header__notify--read');
        $('.header__notifications').removeClass('header__notifications--active');
    }
});

$(document).mouseup(function (e) {
    var search = $('.header__search');
    if (!search.is(e.target) && search.has(e.target).length === 0) {
        $('.header__search-form').removeClass('header__search-form--active');
        $('.header__search-help').hide();
        $('.header__menu').show('300');
    }
});

// ========================= SELECTS =========================== //

const selectCurrency = document.getElementById('currency-choice');
const selectCurrencyTitle = selectCurrency.querySelector('.header__select-title');
const selectCurrencyValue = selectCurrency.querySelector('.header__select-value');
const selectCurrencyLabels = selectCurrency.querySelectorAll('.header__select-label');

// Toggle menu
selectCurrencyTitle.addEventListener('click', () => {
    if ('active' === selectCurrency.getAttribute('data-state')) {
        selectCurrency.setAttribute('data-state', '');
    } else {
        selectCurrency.setAttribute('data-state', 'active');
    }
    if (selectLang.getAttribute('data-state') === 'active') {
        selectLang.setAttribute('data-state', '');
    }
});

// Close when click to option
for (let i = 0; i < selectCurrencyLabels.length; i++) {
    selectCurrencyLabels[i].addEventListener('click', (event) => {
        selectCurrencyValue.textContent = event.target.textContent;
        selectCurrency.setAttribute('data-state', '');
    });
}

const selectLang = document.getElementById('language-choice');
const selectLangTitle = selectLang.querySelector('.header__select-title');
const selectLangValue = selectLang.querySelector('.header__select-value');
const selectLangLabels = selectLang.querySelectorAll('.header__select-label');

// Toggle menu
selectLangTitle.addEventListener('click', () => {
    if ('active' === selectLang.getAttribute('data-state')) {
        selectLang.setAttribute('data-state', '');
    } else {
        selectLang.setAttribute('data-state', 'active');
    }
    if (selectCurrency.getAttribute('data-state') === 'active') {
        selectCurrency.setAttribute('data-state', '');
    }
});

// Close when click to option
for (let i = 0; i < selectLangLabels.length; i++) {
    const langs = ['Ру', 'Англ', 'Пол', 'Бел'];
    selectLangLabels[i].addEventListener('click', () => {
        selectLangValue.textContent = langs[i];
        selectLang.setAttribute('data-state', '');
    });
}

// ========================= SELECTS MOBILE =========================== //

const selectCurrencyMobile = document.getElementById('currency-choice--mobile');
const selectCurrencyTitleMobile = selectCurrencyMobile.querySelector('.header__select-title');
const selectCurrencyValueMobile = selectCurrencyMobile.querySelector('.header__select-value');
const selectCurrencyLabelsMobile = selectCurrencyMobile.querySelectorAll('.header__select-label');

// Toggle menu
selectCurrencyTitleMobile.addEventListener('click', () => {
    if ('active' === selectCurrencyMobile.getAttribute('data-state')) {
        selectCurrencyMobile.setAttribute('data-state', '');
    } else {
        selectCurrencyMobile.setAttribute('data-state', 'active');
    }
    if (selectLangMobile.getAttribute('data-state') === 'active') {
        selectLangMobile.setAttribute('data-state', '');
    }
});

// Close when click to option
for (let i = 0; i < selectCurrencyLabelsMobile.length; i++) {
    selectCurrencyLabelsMobile[i].addEventListener('click', (event) => {
        selectCurrencyValueMobile.textContent = event.target.textContent;
        selectCurrencyMobile.setAttribute('data-state', '');
    });
}

const selectLangMobile = document.getElementById('language-choice--mobile');
const selectLangTitleMobile = selectLangMobile.querySelector('.header__select-title');
const selectLangValueMobile = selectLangMobile.querySelector('.header__select-value');
const selectLangLabelsMobile = selectLangMobile.querySelectorAll('.header__select-label');

// Toggle menu
selectLangTitleMobile.addEventListener('click', () => {
    if ('active' === selectLangMobile.getAttribute('data-state')) {
        selectLangMobile.setAttribute('data-state', '');
    } else {
        selectLangMobile.setAttribute('data-state', 'active');
    }
    if (selectCurrencyMobile.getAttribute('data-state') === 'active') {
        selectCurrencyMobile.setAttribute('data-state', '');
    }
});

// Close when click to option
for (let i = 0; i < selectLangLabelsMobile.length; i++) {
    const langsMobile = ['Ру', 'Англ', 'Пол', 'Бел'];
    selectLangLabelsMobile[i].addEventListener('click', () => {
        selectLangValueMobile.textContent = langsMobile[i];
        selectLangMobile.setAttribute('data-state', '');
    });
}

    $('.questions__item-header').on('click', function(){
    $(this).parent().toggleClass('questions__item--active');   
});

    $('.aside-process__payment-cancel').on('click', function () {
    $('.overlay, #cancel-order').fadeIn('slow');
});

$('.aside-process__docs-add').on('click', function () {
    $('.overlay, #add-document').fadeIn('slow');
});

$('.aside-process__item-title').on('click', function () {
    $(this).siblings().slideToggle('300');
    $(this).toggleClass('aside-process__item-title--active');
});

    $('.profile-card__drop').on('click', function () {
    $(this).parent().parent().parent().toggleClass('profile-card--active');
    $(this).parent().parent().siblings().find('.profile-card__offer').slideToggle('300');
});

    // ===================== POPUPS =======================//

    
$('.header__register-btn').on('click', function () {
    $('.overlay, #register-popup').fadeIn('slow');
});

$('.registration__profile-btn').on('click', function () {
    $('.overlay, #register-popup').fadeIn('slow');
});

$('.start__btn').on('click', function () {
    $('.overlay, #register-popup').fadeIn('slow');
});

$('.header__enter-btn').on('click', function () {
    $('.overlay, #enter-popup').fadeIn('slow');
});

$('.cargo-auction__details-btn').on('click', function () {
    $('.overlay, #cargo-order-card').fadeIn('slow');
});
$('.transport-auction-order-card__response-btn').on('click', function () {
    $('.overlay, #transport-order-card').fadeIn('slow');
});

$('.registration__enter-btn').on('click', function () {
    $('.overlay, #enter-popup').fadeIn('slow');
});

$('.popup__close-btn').on('click', function () {
    $('.overlay, .popup').fadeOut('slow');
});

$('#forgot-pass').on('click', function () {
    $('#enter-popup').fadeOut('slow');
    $('#forgot-password').fadeIn('slow');
});

$('#email-reset').on('click', function () {
    $(this).hide();
    $('#phone-reset').show();
    $('.reset-popup__phone-reset').hide();
    $('.get-new-password-phone__btn').hide();
    $('.reset-popup__email-reset').show();
    $('.get-new-password-email__btn').show();
});

$('#phone-reset').on('click', function () {
    $(this).hide();
    $('#email-reset').show();
    $(".reset-popup__email-reset").hide();
    $(".get-new-password-email__btn").hide();
    $(".reset-popup__phone-reset").show();
    $(".get-new-password-phone__btn").show();
});

$('input[name=phone]').mask("+375 (99) 999-99-99");

$("#email-enter").on("click", function () {
    $(this).hide();
    $('#phone-enter').show();
    $(".enter-popup__phone-enter").hide();
    $(".enter-popup__email-enter").show();
});

$("#phone-enter").on("click", function () {
    $(this).hide();
    $('#email-enter').show();
    $(".enter-popup__email-enter").hide();
    $(".enter-popup__phone-enter").show();
});

$('.documents-block__add-button').on('click', function () {
    $('.overlay, #add-document-popup').fadeIn('slow');
});

$('.payment-block__cancel-the-order').on('click', function () {
    $('.overlay, #undo-order-popup').fadeIn('slow');
});
    
    $('.from-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
});

$('.where-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
});

$('.from-input').on('input', function () {
    $('.from-content').addClass('valid');
});

$('.where-input').on('input', function () {
    $('.from-content').addClass('valid');
});

$('.popup-close-btn').on('click', function () {
    $('.overlay, .popup').fadeOut('slow');
});

$('.your-bet-btn').on('click', function () {
    $('.overlay, #bet-popup').fadeIn('slow');
});

$('.auction-bet-popup__accept-bet-btn').on('click', function () {
    $('.overlay, #bet-popup').fadeOut('slow');
});


    
    // ===================== SLIDERS ========================/

    $('.slider-clients').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button class="slider__btn slider__btn--prev"><svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2064 6.53814C23.4992 6.24525 23.4992 5.77038 23.2064 5.47748L18.4334 0.704512C18.1405 0.411618 17.6656 0.411618 17.3727 0.704512C17.0798 0.997405 17.0798 1.47228 17.3727 1.76517L21.6154 6.00781L17.3727 10.2505C17.0798 10.5433 17.0798 11.0182 17.3727 11.3111C17.6656 11.604 18.1405 11.604 18.4334 11.3111L23.2064 6.53814ZM0.676025 6.75781H22.676V5.25781H0.676025V6.75781Z" fill="#FFF8F5"/></svg></button>',
    nextArrow: '<button class="slider__btn slider__btn--next"><svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469181 6.53814C0.176289 6.24525 0.176289 5.77038 0.469181 5.47748L5.24215 0.704512C5.53505 0.411618 6.00992 0.411618 6.30281 0.704512C6.59571 0.997405 6.59571 1.47228 6.30281 1.76517L2.06017 6.00781L6.30281 10.2505C6.59571 10.5433 6.59571 11.0182 6.30281 11.3111C6.00992 11.604 5.53505 11.604 5.24215 11.3111L0.469181 6.53814ZM22.9995 6.75781H0.999512V5.25781H22.9995V6.75781Z" fill="#FFF8F5"/></svg></button>',
    variableWidth: true,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                arrows: false,
                infinite: true,
            }
        },
    ]
});

    $('.slider-start').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            vertical: false,
            verticalSwiping: false,
        }
    },]
});

    $('.logos__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    prevArrow: '<button class="slider__btn logos__slider-btn slider__btn--prev"><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"fill="white"/></svg><button>',
    nextArrow: '<button class="slider__btn logos__slider-btn slider__btn--next"><svg width="25" height = "12" viewBox = "0 0 25 12" fill ="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM25 6.75H1V5.25H25V6.75Z" fill="white"/></svg></button>',
    appendArrows: $('.logos__slider-arrows'),
});


    //=====================VALIDATION==================//

    document.styleSheets[0].addRule('.form-message', 'margin-bottom: 20px');
document.styleSheets[0].addRule('.form-message.warning', 'color: #ff6118');
document.styleSheets[0].addRule('.popup__form-item.warning', 'border-color: #ff6118');
document.styleSheets[0].addRule('.popup__form-item.success', 'border-color: #236eff');
document.styleSheets[0].addRule('.form-message.success', 'color: #236eff');
document.styleSheets[0].addRule('.filter-style .jq-selectbox__select::before', 'border-radius: 10px; background-size: auto!important;');

function checkpass() {
    let pass = this.find('[name=password]');
    let rep = this.find('[name=repeat-password]');
    let message = this.find('.form-message');
    let text, className;
    rep.parent().removeClass("success").removeClass("warning");
    pass.parent().removeClass("success").removeClass("warning");
    if (rep.val()) {
        if (pass.val() == rep.val()) {
            text = "Пароль успешно подтвержден.";
            className = 'success';
        } else {
            text = "Пароли не совпадают. Введите пароль заново.";
            className = 'warning';
        }
        rep.parent().addClass(className);
        pass.parent().addClass(className);
        if (message.length) {
            message.text(text);
            message.removeClass("success").removeClass("warning").addClass(className);
        } else {
            $("#register").before("<p class='form-message " + className + "'>" + text + "</p>");
        }
    }
}
$('[name=password], [name=repeat-password]').keyup(function () {
    let form = $(this).parents('form');
    checkpass.call(form);
});

    function getCssIndex(selector) {
    let len = document.styleSheets[0].cssRules.length;
    if (len) {
        for (let i = 0; i < len; i++) {
            if (document.styleSheets[0].cssRules[i]['selectorText'] == selector) {
                return i;
            }
        }
        return -1;
    }
    return -1;
}
$('.filter-style[name=country]').change(function () {
    let code = {
        "ru": "+7",
        "by": "+375",
        "ua": "+380",
    };
    let flags = {
        "ru": "rus.png",
        "by": "belarus.png",
        "ua": "ua.png",
    };
    let input = $(this.parentElement.parentElement).find("[name=phone]");
    let placeHolder = input.attr('placeholder');
    placeHolder = placeHolder.replace(/\+\d{1,3}/, code[this.value]);
    input.attr('placeholder', placeHolder);
    input.mask(code[this.value] + "(999) 999-99-99");
    let index = getCssIndex('.jq-selectbox__select.flag::before');
    if (index >= 0) {
        document.styleSheets[0].removeRule(index);
    }
    $('.jq-selectbox__select').removeClass('flag');
    $(this).next().addClass('flag');
    document.styleSheets[0].addRule('.jq-selectbox__select.flag::before', 'background-image: url(../img/icons/' + flags[this.value] + ')!important');
});


    //=================CHECK-IMG====================//

    $('.profile-card__check').on('click', function () {
    $(this).find('.check-span').toggleClass('display-none checked');
    var length = $('.checked').length;
    $('.check-length').val(length);
});

$('.cancel-btn').on('click', function () {
    $('.check-span').removeClass('checked');
    $('.check-span').addClass('display-none');
    var length = $('.checked').length;
    $('.check-length').val(length);
});


    //================ASIDE======================//

    // $(window).resize(function(){
//     var windowWidth = $('body').innerWidth();
//     if(windowWidth < 1200){$(".p-profile__aside").addClass('aside-none');
// $('.p-profile__fullness-percent--adaptive').removeClass('percent-none');
// }
//     if(windowWidth > 1200){$(".p-profile__aside").removeClass('aside-none');
//     $('.p-profile__fullness-percent--adaptive').addClass('percent-none');
//     }
//   });

    $('.search-results__btn').on('click', function () {
    $(this).addClass('search-results__btn--active');
    $(this).siblings().removeClass('search-results__btn--active');
    $('.search-results__cards').removeClass('search-results__cards--active');
    $($(this).attr('href')).addClass('search-results__cards--active');
});


window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }


});