/*
GIT417: JavaScript Tutorial Script
Author: Sophie Ojcius
Date: March 1, 2021
*/


/* The following functions and event listeners are all step-by-step changes and additions to Part 1.*/


/* Interactive Example Part 1
changes header text on button click */

function changeText1() {
    var elementText = document.getElementById("interactiveHeadingP1"); // accesses header
    elementText.textContent = "Thanks for clicking on the button!"; // changes text
}

var btn1 = document.getElementById("button1"); // accesses button
btn1.addEventListener("click", changeText1, false); // changeText1() triggers on click





/* Interactive Example Part 2
toggles back and forth between text on button click */

function changeText2() {
    var elementText = document.getElementById("interactiveHeadingP2"); // accesses header
    var firstState = "Clicking on buttons is fun!"; // 1st and original state
    var secondState = "Click on it again!"; // 2nd state

    if (elementText.textContent === firstState) { // if text matches 1st state,
        elementText.textContent = secondState; // change to 2nd state text
    } else { // else (if text does not match 1st state),
        elementText.textContent = firstState; // change to 1st state text
    }
}

var btn2 = document.getElementById("button2"); // accesses button
btn2.addEventListener("click", changeText2, false); // changeText2() triggers on click





/* Interactive Example Part 3
toggles text and CSS styling on button click*/

function changeText3() {
    var elementText = document.getElementById("interactiveHeadingP3"); // accesses header
    var firstState = "Clicking on buttons is fun!"; // 1st and original state
    var secondState = "Click on it again!"; // 2nd state

    if (elementText.textContent === firstState) { // if text matches 1st state,
        elementText.textContent = secondState; // change to 2nd state text
        elementText.style.backgroundColor = "#7ce5ff";  // adds background color
        elementText.style.padding = "3px"; // adds padding
        elementText.style.borderRadius = "15px"; // adds border radius
        elementText.style.textAlign = "center"; // adds text alignment
        elementText.style.color = "#ffffff"; // adds font color
    } else { // else (if text does not match 1st state),
        elementText.textContent = firstState; // change to 1st state text
        elementText.style.backgroundColor = ""; // removes background color
        elementText.style.padding = ""; // removes padding
        elementText.style.borderRadius = ""; // removes border radius
        elementText.style.textAlign = ""; // removes text alignment
        elementText.style.color = ""; // removes font color
    }
}

var btn3 = document.getElementById("button3"); // accesses button
btn3.addEventListener("click", changeText3, false); // changeText3() triggers on click





/* Interactive Example Part 4
toggles text and CSS styling by clicking on first button
toggles visibility on second button*/

function changeText4() {
    var elementText = document.getElementById("interactiveHeadingP4"); // accesses header
    var firstState = "Clicking on buttons is fun!"; // 1st and original state
    var secondState = "Click on it again!"; // 2nd state

    if (elementText.textContent === firstState) { // if text matches 1st state,
        elementText.textContent = secondState; // change to 2nd state text
        elementText.style.backgroundColor = "#7ce5ff";  // adds background color
        elementText.style.padding = "3px"; // adds padding
        elementText.style.borderRadius = "15px"; // adds border radius
        elementText.style.textAlign = "center"; // adds text alignment
        elementText.style.color = "#ffffff"; // adds font color
    } else { // else (if text does not match 1st state),
        elementText.textContent = firstState; // change to 1st state text
        elementText.style.backgroundColor = ""; // removes background color
        elementText.style.padding = ""; // removes padding
        elementText.style.borderRadius = ""; // removes border radius
        elementText.style.textAlign = ""; // removes text alignment
        elementText.style.color = ""; // removes font color
    }
}

var btn4 = document.getElementById("button4"); // accesses button
btn4.addEventListener("click", changeText4, false); // changeText() triggers on click


function changeVisibility4() {
    var displayVal = document.getElementById("interactiveHeadingP4"); // accesses header

    if (displayVal.style.display === "none") { // if display is none,
        displayVal.style.display = "block"; // make display block
    } else { // else (if display is one of the visible values),
        displayVal.style.display = "none"; // make display none
    }
}

var btn5 = document.getElementById("button5"); // accesses visibility button
btn5.addEventListener("click", changeVisibility4, false); // changeVisibility1() triggers on click





/* Interactive Example Part 5
toggles text and CSS styling by clicking on first button
toggles visibility on second button
(replaces some style properties with className)*/


function changeText5() {
    var elementText = document.getElementById("interactiveHeadingP5"); // accesses header
    var firstState = "Clicking on buttons is fun!"; // 1st and original state
    var secondState = "Click on it again!"; // 2nd state

    if (elementText.textContent === firstState) { // if text matches 1st state,
        elementText.textContent = secondState; // change to 2nd state text
        elementText.className = "headingClass"; // adds entire class
    } else { // else (if text does not match 1st state),
        elementText.textContent = firstState; // change to 1st state text
        elementText.className -= "headingClass"; // removes entire class
    }
}

var btn6 = document.getElementById("button6"); // accesses button
btn6.addEventListener("click", changeText5, false); // changeText() triggers on click

function changeVisibility5() {
    var displayVal = document.getElementById("interactiveHeadingP5"); // accesses header

    if (displayVal.style.display === "none") { // if display is none
        displayVal.style.display = "block"; // make display block
    } else { // else (if display is one of the visible values)
        displayVal.style.display = "none"; // make display none
    }
}

var btn7 = document.getElementById("button7"); // accesses visibility button
btn7.addEventListener("click", changeVisibility5, false); // changeVisibility1() triggers on click