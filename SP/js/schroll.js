const scrollToArea = function (areaId)
{
    let clientHeight = document.getElementById('header').clientHeight
    const areaLeft = document.getElementById(areaId).getBoundingClientRect().left;
    const areaTop = document.getElementById(areaId).getBoundingClientRect().top;

    window.scrollBy({
        top: areaTop,
        behavior: "smooth"
    });
};