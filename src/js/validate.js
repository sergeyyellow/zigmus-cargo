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