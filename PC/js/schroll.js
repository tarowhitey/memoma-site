
const scrollToArea = function (areaId)
{
    //console.log(window.scrollY);
    const areaLeft = document.getElementById(areaId).getBoundingClientRect().left;
    const areaTop = document.getElementById(areaId).getBoundingClientRect().top;

    //console.log(areaLeft);
    //console.log(areaTop);

    window.scrollBy({
        top: areaTop,
        behavior: "smooth"
    });
};
