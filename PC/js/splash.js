if ($.cookie('WelcomeLayer') != 'isOpen')
{
    $.when(
        $('.splash').show()
    )
        .done(function ()
        {
            setTimeout(function ()
            {
                $('.splash').fadeOut(500);
            }, 2000),
                $('main').show(),
                $.cookie('splash', 'isOpen')
        })
        .fail(function ()
        {
            console.log('error');
        });
} else
{
    $('main').show();
}