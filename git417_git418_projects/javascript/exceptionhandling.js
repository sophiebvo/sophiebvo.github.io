/*
    GIT417: Exception Handling Script
    Author: Sophie Ojcius
    Date: Feb 8, 2021
*/

"use strict";

// declare global variables

// global variables which help us track whether or not an input field has been filled
// default is true because we assume they are filled in correctly
var nameEntered = true;
var emailEntered = true;
var messageEntered = true;

// global variable which references the div elements where messages will be written
var errorMessageElement1 = document.getElementById("contactErrorMsg1");
var errorMessageElement2 = document.getElementById("contactErrorMsg2");
var errorMessageElement3 = document.getElementById("contactErrorMsg3");
var submitMessageElement = document.getElementById("contactSubmitMsg");


// function which prevents form from being "submitted" (for my page it essentially means it prevents a reload)

function preventSubmission(event) {
    event.preventDefault();
}


// function to check whether or not user put text in the name input

function checkNameValidity() {
    var validity = true;

    // if the user input doesn't include any text in the name input, throw statement is made
    try {
        var fullName = document.getElementById("nameInput").value;
        errorMessageElement1.innerHTML = ""; // clear previous error message

        if (fullName === "") {
            throw "Failed to send: please enter your name.";
        }
    }

    // prints throw statement to the div id
    catch (message) {
        errorMessageElement1.className = "contactErrorMsgClass"; // sets CSS class to message
        errorMessageElement1.innerHTML = message;
        validity = false;
    }

    // changes global value to false and prints the equivalent of the throw statement to the browser's console
    finally {
        nameEntered = validity;
        if (!validity) {
            console.log("Failed to send: please enter your name.");
        }
    }
}


// function to check whether or not user put @ symbol in the email input

function checkEmailValidity() {
    var validity = true;

    // if the user input doesn't include an @ symbol in the email input, throw statement is made
    try {
        var emailAddress = document.getElementById("emailInput").value;
        errorMessageElement2.innerHTML = ""; // clear previous error message

        if (!(emailAddress.includes("@"))) {
            throw "Failed to send: please enter a valid email address.";
        }
    }

    // prints throw statement to the div id
    catch (message) {
        errorMessageElement2.className = "contactErrorMsgClass"; // sets CSS class to message
        errorMessageElement2.innerHTML = message;
        validity = false;
    }

    // changes global value to false and prints the equivalent of the throw statement to the browser's console
    finally {
        emailEntered = validity;
        if (!validity) {
            console.log("Failed to send: please enter a valid email address.");
        }
    }
}


// function to check whether or not user put text in the textarea input

function checkMessageValidity() {
    var validity = true;

    // if the user input doesn't include any text in the textarea input, throw statement is made
    try {
        var messageSent = document.getElementById("messageInput").value;
        errorMessageElement3.innerHTML = ""; // clear previous error message

        if (messageSent === "") {
            throw "Failed to send: please enter a message.";
        }
    }

    // prints throw statement to the div id
    catch (message) {
        errorMessageElement3.className = "contactErrorMsgClass"; // sets CSS class to message
        errorMessageElement3.innerHTML = message;
        validity = false;
    }

    // changes global value to false and prints the equivalent of the throw statement to the browser's console
    finally {
        nameEntered = validity;
        if (!validity) {
            console.log("Failed to send: please enter a message.");
        }
    }
}


// function that makes contactSubmitMsg div display a thank you message when everything is filled in properly and removes the form / error messages

function testCompleteValidForm() {
    if (nameEntered && emailEntered && messageEntered) {
        submitMessageElement.className = "contactSubmitMsgClass"; // sets CSS class to message
        submitMessageElement.innerHTML = "Thank you for reaching out to me!</br>I will try my best to get back to you within 2 business days.";

        contactForm.remove(); // removes entire contact form, mostly so that users don't submit it multiple times and clearly see it was submitted
    }
}


// event listeners function which is triggered by clicking on the SEND button, which then triggers all other nested functions one by one

function eventListeners() {
    preventSubmission(event);
    checkNameValidity();
    checkEmailValidity();
    checkMessageValidity();
    testCompleteValidForm();
}

// Creates an event listener when clicking on the SEND button

var sendButton = document.getElementById("submitContact");

if (sendButton.addEventListener) {                                       // modern browser event listener
    sendButton.addEventListener("click", eventListeners, false);
} else if (sendButton.attachEvent) {                                     // old IE event listener
    sendButton.attachEvent("onclick", eventListeners);
}


/*

Debugging Methods I used in this project:

1)
    The most important debugging tool I used for noticing syntax errors was by using a code editor that highlights syntax errors, Visual Studio Code. It not only highlights when I miss curly braces or add functions without parantheses, but it also tells me when I'm using a variable in certain parts of the code (like an if/else statement) that isn't referenced anywhere else in the code, preventing me from using an undeclared or misspelled variable.
2)
    I requested that the JS processor to treat my entire script as if it's in strict mode so that I force myself to use strict syntax (such as always declaring variables with var) and helps me detect more errors or unsafe actions that could arise while I'm coding.
3)
    I commented out statements and entire functions when I was troubleshooting to try to pinpoint what was causing my code to not execute properly.
4)
    I inspected my source code in the browser, picking a breakpoint on the first statement of the function I wanted to start viewing in real-time. For example, I often picked line 28 of this JS file for my breakpoint, entered information into my form (or purposely left certain inputs blank), pressed the SEND button on my form, then used the "step into" button to see how my code was executing, what values it returned, and if it logically progressed as I had intended for it to. This is how I had noticed issues like a nonexistent function name being called under the eventListener() function, and that my exception handling code would run all the way until the finally statement according to the console, despite the .innerHTML property not properly printing the throw statement to the web page. A lot of logic errors were solved by stepping into, or stepping over, each function.
5)
    I used the W3C HTML validator to make sure my HTML code did not contain any errors before starting to work on my script.
6)
    I viewed my deployed site in an incognito/private window or cleared my browser's cache to ensure that I was viewing the most updated version of the site.

*/