//id="common_footer" 共通科用のフッターID
//id="to_campfire_footer" 基礎科・特進科用のフッターID

var pos = window.scrollY

let headerHeight = document.getElementById("header").clientHeight;

const commonHeight = document.getElementById("common").getBoundingClientRect().top + window.pageYOffset - 1 - headerHeight;
const basicHeight = document.getElementById("basic").getBoundingClientRect().top + window.pageYOffset - 1 - headerHeight;

const commonFooter = document.getElementById("common_footer");
const toCampfireFooter = document.getElementById("to_campfire_footer");

//ar commonPos = document.getElementById("common").getBoundingClientRect().top;
//var basicPos = document.getElementById("basic").getBoundingClientRect().top;

/*
const onScroll = () =>
{
    
};
*/

console.log('common Height:' + commonHeight)

commonFooter.classList.add('footer_hidden');
toCampfireFooter.classList.add('footer_hidden');

const onScroll = () =>
{
    //console.log('pos:' + pos);

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