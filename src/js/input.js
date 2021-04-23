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