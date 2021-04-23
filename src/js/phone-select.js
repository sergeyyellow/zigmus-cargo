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