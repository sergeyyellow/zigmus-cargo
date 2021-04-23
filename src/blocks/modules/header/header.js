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