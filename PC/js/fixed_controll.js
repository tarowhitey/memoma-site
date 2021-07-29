//id="common_footer" 共通科用のフッターID
//id="to_campfire_footer" 基礎科・特進科用のフッターID

var pos = window.scrollY

const aboutHeight = document.getElementById("about").getBoundingClientRect().top + window.pageYOffset;
const commonHeight = document.getElementById("common").getBoundingClientRect().top + window.pageYOffset - 1;
const basicHeight = document.getElementById("basic").getBoundingClientRect().top + window.pageYOffset - 1;

const header = document.getElementById("header")
const commonFooter = document.getElementById("common_footer");
const toCampfireFooter = document.getElementById("to_campfire_footer");

console.log('common Height:' + aboutHeight)

header.classList.add('header_hidden')
commonFooter.classList.add('footer_hidden');
toCampfireFooter.classList.add('footer_hidden');

const onScroll = () =>
{
    //console.log('pos:' + pos);
    if (pos < aboutHeight)
    {
        header.classList.add('header_hidden')
    } else
    {
        header.classList.remove('header_hidden')
    }

    if (pos < commonHeight)
    {
        commonFooter.classList.add('footer_hidden');
        toCampfireFooter.classList.add('footer_hidden');
    } else if (pos > commonHeight && pos < basicHeight)
    {
        toCampfireFooter.classList.add('footer_hidden');
        commonFooter.classList.remove('footer_hidden');
    } else if (pos > basicHeight) 
    {
        commonFooter.classList.add('footer_hidden');
        toCampfireFooter.classList.remove('footer_hidden');
    }
}

window.addEventListener("scroll", () =>
{
    onScroll();
});

window.addEventListener("scroll", () =>
{
    pos = window.scrollY;
    onScroll();
});