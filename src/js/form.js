//Modal windows closing function

$('.modal__close').on('click', function() {
    $('.overlay').fadeOut('slow');
});

//Form sending

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
});