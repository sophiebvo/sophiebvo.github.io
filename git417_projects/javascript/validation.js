/*
    GIT417: Validation Script
    Author: Sophie Ojcius
    Date: Feb 22, 2021
*/

"use strict";

// global variables 
var formValid = true; // keeps track of form validity
var nameValid = true; // keeps track of name validity


// if the name input is empty or if the input includes something other than alphabet characters and spaces, show an error message
function validateName() {
    var fullName = document.getElementById("nameInput").value;
    var errorDiv = document.getElementById("contactErrorMsg1");
    var currentStyle = document.querySelector("#nameInput");
    var onlyAlphabetSpaceHyphen = /^[-\sA-Za-z]+$/; // regular expression for only alphabet characters, spaces, and hyphens

    try {
        if (fullName === "" || !onlyAlphabetSpaceHyphen.test(fullName)) {
            errorDiv.style.display = "block"; // makes error reappear if previously entered correctly but then entered incorrectly
            currentStyle.style.border = "2px solid #e63030";
            throw "Please enter a valid name.";
        } else {
            nameValid = true; // input name will be saved as valid, important for if/else statements in validateEmail() for error msg
            currentStyle.style.border = "none";
            errorDiv.style.display = "none";
        }
    }

    catch(message) {
        errorDiv.className = "contactErrorMsgClass";
        errorDiv.innerHTML = message;
        formValid = false;
        nameValid = false;
    }
}


// checks if email input is filled and valid (adds an error if it isn't) and has if/else statements to work well with validateName() because they share a div for the error
function validateEmail() {
    var emailAddress = document.getElementById("emailInput").value;
    var errorDiv = document.getElementById("contactErrorMsg1");
    var currentStyle1 = document.querySelector("#nameInput");
    var currentStyle2 = document.querySelector("#emailInput");
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // regular expression that only allows valid characters for an email address, will also not allow an empty space and must have certain characters presented in a certain order (courtesy of https://www.w3resource.com/javascript/form/email-validation.php for part of the expression explanation!)

    try {
        if (!validEmail.test(emailAddress) && nameValid === false) { // if both the email and name are invalid
            errorDiv.style.display = "block"; // makes error reappear if previously entered correctly but then entered incorrectly
            currentStyle1.style.border = "2px solid #e63030";
            currentStyle2.style.border = "2px solid #e63030";
            throw "Please enter a valid name and a valid email address.";
        } else if (!validEmail.test(emailAddress)) { // if just the email is invalid
            errorDiv.style.display = "block"; // makes error reappear if previously entered correctly but then entered incorrectly
            currentStyle1.style.border = "none";
            currentStyle2.style.border = "2px solid #e63030";
            throw "Please enter a valid email address.";
        } else if (!nameValid) {    // if just the name is invalid, will make sure previous error isn't wiped
            errorDiv.style.display = "block"; // makes error reappear if previously entered correctly but then entered incorrectly
            currentStyle1.style.border = "2px solid #e63030";
            currentStyle2.style.border = "none";
            throw "Please enter a valid name.";
        } else {
            currentStyle1.style.border = "none";
            currentStyle2.style.border = "none";
            errorDiv.style.display = "none";
        }
    }

    catch(message) {
        errorDiv.className = "contactErrorMsgClass";
        errorDiv.innerHTML = message;
        formValid = false;
    }
}


// checks if there's text in the textarea field and submits an error message if it's empty
function validateMessage() {
    var userMessage = document.getElementById("messageInput").value;
    var errorDiv = document.getElementById("contactErrorMsg2");
    var currentStyle = document.querySelector("#messageInput");

    try {
        if (userMessage === "") {
            errorDiv.style.display = "block"; // makes error reappear if previously entered correctly but then entered incorrectly
            currentStyle.style.border = "2px solid #e63030";
            throw "Please enter a message.";
        } else {
            currentStyle.style.border = "none";
            errorDiv.style.display = "none";
        }
    }

    catch(message) {
        errorDiv.className = "contactErrorMsgClass";
        errorDiv.innerHTML = message;
        formValid = false;
    }
}


// checks if any radio button has been selected, and changes radio button borders and adds an error message if none have been
function validateRadio() {
    var radioYes = document.getElementById("yesRadio");
    var radioNo = document.getElementById("noRadio");
    var radioMaybe = document.getElementById("maybeRadio");
    var currentStyle1 = document.querySelector("#yesRadio");
    var currentStyle2 = document.querySelector("#noRadio");
    var currentStyle3 = document.querySelector("#maybeRadio");
    var errorDiv = document.getElementById("contactErrorMsg3");


    try {
        if (!radioYes.checked && !radioNo.checked && !radioMaybe.checked) {
            currentStyle1.style.outline = "2px dashed #e63030";
            currentStyle1.style.outlineOffset = "2px";
            currentStyle2.style.outline = "2px dashed #e63030";
            currentStyle2.style.outlineOffset = "2px";
            currentStyle3.style.outline = "2px dashed #e63030";
            currentStyle3.style.outlineOffset = "2px";

            throw "Please pick a collaboration option.";
        } else {
            currentStyle1.style.outline = "";
            currentStyle1.style.outlineOffset = "";
            currentStyle2.style.outline = "";
            currentStyle2.style.outlineOffset = "";
            currentStyle3.style.outline = "";
            currentStyle3.style.outlineOffset = "";

            errorDiv.style.display = "none";
        }
    }
    
    catch(message) {
        errorDiv.className = "contactErrorMsgClass";
        errorDiv.innerHTML = message;
        formValid = false;
    }
}


// checks whether the entire form is valid or not to either submit the form or show an error message under the SEND button
function validateForm(event) {
    event.preventDefault();
    formValid = true; // will reset the value from the global var to check form validation

    validateName();
    validateEmail();
    validateMessage();
    validateRadio();

    if (formValid === true) {
        document.getElementById("contactForm").submit();
    } else {
        document.getElementById("contactSubmitErrorMsg").innerHTML = "The form was unable to be sent, please correctly fill out the fields before attempting to resubmit.";
        document.getElementById("contactSubmitErrorMsg").className = "contactErrorMsgClass2";
    }
}


// clears all input so that if form is entirely valid and ready to be submitted so that if a user goes back to this page, there aren't already filled out fields
function clearForm() {
    if (formValid) {
        document.getElementById("contactForm").reset();
    }
}


// creates event listeners to trigger the functions above
function createEventListeners() {
    var contact = document.getElementById("contactForm");

    contact.addEventListener("submit", validateForm, false);
    contact.addEventListener("submit", clearForm, false);
}


// runs the event listeners inside of eventListeners() when the page loads
window.addEventListener("load", createEventListeners, false);
