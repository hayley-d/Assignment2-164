
function activeHover()
{
    /*code for toggle active when hover*/
    /*get active element*/
    var activeNavElement = document.getElementsByClassName("navbtn")[0];
    var activeNavText = document.getElementsByTagName("h2")[0];

    activeNavElement.addEventListener('mouseenter', function () {
        activeNavText.classList.remove('active');

    });

    activeNavElement.addEventListener('mouseleave', function () {
        activeNavText.classList.add('active');

    });
}
activeHover();