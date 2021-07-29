const scrollToArea = function (areaId)
{
    let clientHeight = document.getElementById('header').clientHeight
    const areaTop = document.getElementById(areaId).getBoundingClientRect().top;

    window.scrollBy({
        top: areaTop - clientHeight,
        behavior: "smooth"
    });
};