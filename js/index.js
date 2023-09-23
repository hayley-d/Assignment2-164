
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

function calculateAge() {
    const today = new Date();
    const birthDate = new Date('2002-04-25');

    // Calculate the time difference in milliseconds
    const timeDiff = today - birthDate;

    // Calculate years
    const years = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));

    // Calculate months
    const months = Math.floor((timeDiff % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));

    // Calculate days
    const days = Math.floor((timeDiff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    const age = document.getElementById("age");
    age.textContent = `${years} years, ${months} months and ${days} days`;
}

calculateAge();