


var button = jQuery('#bt-submit-comments');

if(button) {
    var buttonAction = jQuery(`<button class="comments__button" type="button">Avaliar</button>`);
    button.after(buttonAction);

    buttonAction.click(() => {
        button.trigger('click');
    });
}
