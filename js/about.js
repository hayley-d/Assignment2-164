function activeHover()
{
    /*code for toggle active when hover*/
    /*get active element*/
    var activeNavElement = document.getElementsByClassName("navbtn")[1];
    var activeNavText = document.getElementsByTagName("h2")[1];

    activeNavElement.addEventListener('mouseenter', function () {
        activeNavText.classList.remove('active');

    });

    activeNavElement.addEventListener('mouseleave', function () {
        activeNavText.classList.add('active');

    });
}
activeHover();



const imgArr = ["./img/travel.jpg","./img/liverpool.jpg","./img/computer.PNG","./img/sloth.jpg","./img/england.jpg"];
var count = 0;
function changeImage(){

    const element = document.getElementsByClassName("fact-pic")[0];
    element.style.backgroundImage = `url("${imgArr[count]}")`;
    count++;
    if(count === 5)
    {
        count = 0;
    }
}

// Automatically advance to the next image every 3 seconds (3000 milliseconds).
setInterval(changeImage, 3000);


/*var count2 = 0;
function changeImage2(){

    const element = document.getElementsByClassName("fact-pic2")[0];
    element.style.backgroundImage = `url("${imgArr[count2]}")`;
    count2++;
    if(count2 === 5)
    {
        count2 = 0;
    }
}

// Automatically advance to the next image every 3 seconds (3000 milliseconds).
setInterval(changeImage2, 3000);*/

var counter = -1;
var arrCount = 0;
const slothArr = ["./img/sloths/sloth1.png","./img/sloths/sloth2.png","./img/sloths/sloth3.png","./img/sloths/sloth4.png","./img/sloths/sloth5.png","./img/sloths/sloth6.png","./img/sloths/sloth7.png","./img/sloths/sloth8.png","./img/sloths/sloth9.png","./img/sloths/sloth10.png"]
function inc()
{
    const box = document.getElementsByClassName("counter-box")[0];
    const number = document.getElementById("counter-num");
    counter += 1;

    number.textContent = counter;
    if(counter >= 0)
    {
        number.style.color = "white";
        if(arrCount >= 0 && arrCount < 10)
        {
            box.style.backgroundImage = `url("${slothArr[arrCount]}")`;
            arrCount++;
        }
        else{
            arrCount = 0;
            box.style.backgroundImage = `url("${slothArr[arrCount]}")`;
            arrCount++;
        }
    }
    else{
        number.style.color = "red";
        if(arrCount >= 0 && arrCount < 10)
        {
            box.style.backgroundImage = `url("${slothArr[arrCount]}")`;
            arrCount++;
        }
        else{
            arrCount = 0;
            box.style.backgroundImage = `url("${slothArr[arrCount]}")`;
            arrCount++;
        }
    }
}

function dec()
{
    const box = document.getElementsByClassName("counter-box")[0];
    const number = document.getElementById("counter-num");
    counter -= 1;

    number.textContent = counter;
    if(counter >= 0)
    {
        number.style.color = "white";
        if(arrCount >= 0 && arrCount < 10)
        {
            box.style.backgroundImage = `url("${slothArr[arrCount]}")`;
            arrCount++;
        }
        else{
            arrCount = 0;
            box.style.backgroundImage = `url("${slothArr[arrCount]}")`;
            arrCount++;
        }
    }
    else{
        number.style.color = "red";
        if(arrCount >= 0 && arrCount < 10)
        {
            box.style.backgroundImage = `url("${slothArr[arrCount]}")`;
            arrCount++;
        }
        else{
            arrCount = 0;
            box.style.backgroundImage = `url("${slothArr[arrCount]}")`;
            arrCount++;
        }
    }
}
const incrementButton = document.getElementById('inc-btn');
const decButton = document.getElementById('dec-btn');
// Add a click event listener to the buttons
incrementButton.addEventListener('click', inc);
decButton.addEventListener('click', dec);
inc();

function adjustPictureHeight()
{
//this function adjusts the height of the picture so that it is the same height as the about me text area
    const textArea = document.getElementsByClassName("about-text")[0];/*the text area*/
    const textHeight = textArea.offsetHeight;/*the height in px of the text area*/
    const picture = document.getElementById("about-hayley");/*the picture*/
    picture.style.height = `${textHeight}px`;/*changing the height of the picture*/

    /*also for the facts picture*/
    const factArea = document.getElementById("fact-area");/*the text area*/
    const factAreaHeight = factArea.offsetHeight;/*the height in px of the text area*/
    const factPicture = document.getElementsByClassName("fact-pic")[0];/*the picture*/
    factPicture.style.height = `${factAreaHeight}px`;/*changing the height of the picture*/
}
/*call to get the initial size of the image*/
/*adjustPictureHeight();*/
// event listener for the "resize" event
window.addEventListener("resize", adjustPictureHeight);
document.addEventListener('DOMContentLoaded',adjustPictureHeight);