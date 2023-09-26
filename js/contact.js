function activeHover()
{
    /*code for toggle active when hover*/
    /*get active element*/
    var activeNavElement = document.getElementsByClassName("navbtn")[2];
    var activeNavText = document.getElementsByTagName("h2")[2];

    activeNavElement.addEventListener('mouseenter', function () {
        activeNavText.classList.remove('active');

    });

    activeNavElement.addEventListener('mouseleave', function () {
        activeNavText.classList.add('active');

    });
}
activeHover();

// Get references to the form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submitButton');



// Function to validate the form
function validateForm() {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        alert('Name and Email are required fields.');
        return false; // Prevent form submission
    }
    else {
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = document.getElementById("message").value.trim();

        console.log(`Name: ${nameValue}`);
        console.log(`Email: ${emailValue}`);
        console.log(`Message: ${messageValue}`);

        alert(`Name: ${nameValue}` + "\n" + `Email: ${emailValue}` + "\n" + `Message: ${messageValue}`)
        return true; // Allow form submission
    }
}

//input event listeners to enable/disable the submit button
nameInput.addEventListener('input', toggleSubmitButton);
emailInput.addEventListener('input', toggleSubmitButton);

//submit event listener to the form
document.querySelector('form').addEventListener('submit', function (e) {
    if (!validateForm()) {
        e.preventDefault(); // Prevent form submissi
    }on if validation fails
});

// Function to toggle the submit button based on the input fields
function toggleSubmitButton() {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}






