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

