
const scrollToArea = function (areaId)
{
    let clientHeight = document.getElementById('header').clientHeight
    const areaLeft = document.getElementById(areaId).getBoundingClientRect().left;
    const areaTop = document.getElementById(areaId).getBoundingClientRect().top;

    window.scrollTo({
        left: areaLeft,
        top: areaTop - clientHeight,
        behavior: "smooth"
    });
};
