/*
$(function ()
{
    $('.hamburger').click(function ()
    {
        $(this).toggleClass('active');

        if ($(this).hasClass('active'))
        {
            $('.globalMenuSp').addClass('active');
        } else
        {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

*/

(function ($)
{
    $(function ()
    {
        $('#nav-toggle').on('click', function ()
        {
            $('body').toggleClass('open');
            console.log("toggle open")
        });
    });
})(jQuery);

(function ($)
{
    $(function ()
    {
        $('#gloval-nav').on('click', function ()
        {
            $('body').toggleClass('open');
            console.log("toggle open")
        });
    });
})(jQuery);

(function ($)
{
    $(function ()
    {
        $('#nav-about').on('click', function ()
        {
            $('body').toggleClass('open');
        });
    });
})(jQuery);

(function ($)
{
    $(function ()
    {
        $('#nav-common').on('click', function ()
        {
            $('body').toggleClass('open');
        });
    });
})(jQuery);

(function ($)
{
    $(function ()
    {
        $('#nav-basic').on('click', function ()
        {
            $('body').toggleClass('open');
        });
    });
})(jQuery);

(function ($)
{
    $(function ()
    {
        $('#nav-special').on('click', function ()
        {
            $('body').toggleClass('open');
        });
    });
})(jQuery);