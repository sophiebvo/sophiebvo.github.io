/*
    GIT417: Web Security Script
    Author: Sophie Ojcius
    Date: Feb 15, 2021
*/

"use strict";

// function which fills in user info in the span tags by getting the element ids

function populateUserInfo() {
    // prints user's browser name
    document.getElementById("userBrowser").innerHTML = navigator.appName;

    // prints user's platform name
    document.getElementById("userPlatform").innerHTML = navigator.platform;

    // prints user's screen resolution using height and width values
    document.getElementById("userScreenResolution").innerHTML = screen.width + " x " + screen.height + " (" + screen.width + " pixels wide by " + screen.height + " pixels tall)";

    // print's the approximate dimensions of the user's browser from the outer edges
    document.getElementById("userWindowSize").innerHTML = window.outerWidth + " x " + window.outerHeight + " (" + window.outerWidth + " pixels wide by " + window.outerHeight + " pixels tall)";

    // print's user's available size for web content, not counting space for OS menus
    document.getElementById("userAvailContentSize").innerHTML = screen.availWidth + " x " + screen.availHeight + " (" + screen.availWidth + " pixels wide by " + screen.availHeight + " pixels tall)";
    
    // prints user's color depth
    document.getElementById("userColorDepth").innerHTML = screen.colorDepth + " bits";
}


// event listener to run populateUserInfo() once the page loads
// *did not make event listener compatitible with older versions of IE since most of my web page is not compatible with those versions anyway

window.addEventListener("load", populateUserInfo, false);