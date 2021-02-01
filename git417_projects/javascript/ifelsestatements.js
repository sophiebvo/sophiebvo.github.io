/*
    GIT417: If/Else Statements Script
    Author: Sophie Ojcius
    Date: Feb 2 2021
*/

// declared global variable(s)

var remainingMoney = 0;
var printedMoney = "";
var coloredMoney = "";


// writes string that says remaining money hasn't been calculated yet

document.getElementById("leftoverMoneyText").innerHTML = "<p class='leftoverMoneyTextClass'>Your remaining money has not yet been calculated. Click on the \"Calculate Remaining Money\" button to start.</p>";


// function with else if statements that ensure that "-" sign shows in front of "$" sign instead of after when remaingingMoney is negative
// .toFixed() property also ensures only 2 decimal numbers show after the dot

function addDollar() {
    if (remainingMoney < 0) {
        printedMoney = "-$" + (remainingMoney * -1).toFixed(2);
    } else if (remainingMoney >= 0) {
        printedMoney = "$" + remainingMoney.toFixed(2);
    }
}

// function changes the color of the -, $, and remaining money amount depending on how high or low the amount is

function changeDollarColor() {
    switch (true) {
        case remainingMoney >= 1500:
            coloredMoney = "<span class='green3'>" + printedMoney + "</span>";
            break;
        case remainingMoney >= 500 && remainingMoney < 1500:
            coloredMoney = "<span class='green2'>" + printedMoney + "</span>";
            break;
        case remainingMoney > 0 && remainingMoney < 500:
            coloredMoney = "<span class='green1'>" + printedMoney + "</span>";
            break;
        case remainingMoney > -500 && remainingMoney < 0:
            coloredMoney = "<span class='red1'>" + printedMoney + "</span>";
            break;
        case remainingMoney > -1500 && remainingMoney < -500:
            coloredMoney = "<span class='red2'>" + printedMoney + "</span>";
            break;
        case remainingMoney <= -1500:
            coloredMoney = "<span class='red3'>" + printedMoney + "</span>";
            break;
        default: // this will make sure $0 is still printed and is shown in black
            coloredMoney = printedMoney;
    }
}

// writes a comment depending on if remainingMoney is 0, a positive (> 0) number, or a negative number

function insertMoneyComment() {
    if (remainingMoney > 0) {
        document.getElementById("moneyComment").innerHTML = "<p class='moneyCommentClass'>It looks like you have some left over money! Maybe try again and divert it to a budget you'd like to spend more money from, or add it to your savings budget if you're not sure what you would want to do with it just yet?</p>";
    } else if (remainingMoney === 0) {
        document.getElementById("moneyComment").innerHTML = "<p class='moneyCommentClass'>Ideally, in this calculation, $0 is how much money you'd like to have left after budgeting for everything! This indicates that you know how to reasonably budget within your means. However, remember to always fill the savings category up to a moderate amount in case unexpected costs or emergencies occur.</p>";
    } else if (remainingMoney < 0) {
        document.getElementById("moneyComment").innerHTML = "<p class='moneyCommentClass'>Whoops! It looks like you're budgeting for more than you've been earning each month. Maybe try again and see which categories you would be willing cut back on?</p>";
    }
}

// calculates remaining money by subtracting all the inputted values in the budget categories from the inputted income
// also prints out a sentence a certain way based on the nested functions

function calcLeftoverMoney() {
    var income = document.getElementById("income");
    var budcat1 = document.getElementById("housingBudget");
    var budcat2 = document.getElementById("utilitiesBudget");
    var budcat3 = document.getElementById("transportationBudget");
    var budcat4 = document.getElementById("educationBudget");
    var budcat5 = document.getElementById("insuranceBudget");
    var budcat6 = document.getElementById("healthcareBudget");
    var budcat7 = document.getElementById("foodBudget");
    var budcat8 = document.getElementById("clothingBudget");
    var budcat9 = document.getElementById("groomingBudget");
    var budcat10 = document.getElementById("householdBudget");
    var budcat11 = document.getElementById("subscriptionsBudget");
    var budcat12 = document.getElementById("travelBudget");
    var budcat13 = document.getElementById("otherEntBudget");
    var budcat14 = document.getElementById("giftsBudget");
    var budcat15 = document.getElementById("debtBudget");
    var budcat16 = document.getElementById("savingsBudget");

    remainingMoney = parseFloat(income.value) - parseFloat(budcat1.value) - parseFloat(budcat2.value) - parseFloat(budcat3.value) - parseFloat(budcat4.value) - parseFloat(budcat5.value) - parseFloat(budcat6.value) - parseFloat(budcat7.value) - parseFloat(budcat8.value) - parseFloat(budcat9.value) - parseFloat(budcat10.value) - parseFloat(budcat11.value) - parseFloat(budcat12.value) - parseFloat(budcat13.value) - parseFloat(budcat14.value) - parseFloat(budcat15.value) - parseFloat(budcat16.value);
    

    addDollar(); // adds dollar sign in proper place and limits decimal places to 2

    changeDollarColor(); // changes the color of the money, dollar symbol, and - sign if there is one

    // Writes text that says how much money is remaining (calculated from calcLeftoverMoney() function)
    document.getElementById("leftoverMoneyText").innerHTML = "<p class='leftoverMoneyTextClass'>Your remaining money is " + coloredMoney + "</p>";

    insertMoneyComment(); // inserts a comment at the end which changes depending on if remainingMoney < 0, === 0, or is > 0
}


// clears budget categories and reverts them back to values of 0, and changes remaining money text to past tense

function clearBudgetCategories() {
    document.getElementById("housingBudget").value = 0;
    document.getElementById("utilitiesBudget").value = 0;
    document.getElementById("transportationBudget").value = 0;
    document.getElementById("educationBudget").value = 0;
    document.getElementById("insuranceBudget").value = 0;
    document.getElementById("healthcareBudget").value = 0;
    document.getElementById("foodBudget").value = 0;
    document.getElementById("clothingBudget").value = 0;
    document.getElementById("groomingBudget").value = 0;
    document.getElementById("householdBudget").value = 0;
    document.getElementById("subscriptionsBudget").value = 0;
    document.getElementById("travelBudget").value = 0;
    document.getElementById("otherEntBudget").value = 0;
    document.getElementById("giftsBudget").value = 0;
    document.getElementById("debtBudget").value = 0;
    document.getElementById("savingsBudget").value = 0;

    // Writes past tense text that says how much money remained (money calculated from calcLeftoverMoney() function)
    document.getElementById("leftoverMoneyText").innerHTML = "<p class='leftoverMoneyTextClass'>Your remaining money was previously " + coloredMoney + " before you reset the budget categories back to 0.</p>";

    // Erases the last comment on what users should do with their money
    document.getElementById("moneyComment").innerHTML = "";
}


// triggers remaining money calculation (calculated from calcLeftoverMoney() function) and new text when clicking on the calculation button

var calculateButton = document.getElementById("remainingMoney");

if (calculateButton.addEventListener) {                                     // modern browser event listener
    calculateButton.addEventListener("click", calcLeftoverMoney, false);
} else if (calculateButton.attachEvent) {                                   // old IE event listener
    calculateButton.attachEvent("onclick", calcLeftoverMoney);
}


// clicking on the resetBudgets button triggers the resetting of the budget values to 0 (but not the income value), triggers the new past tense leftoverMoneyText, and removes the moneyComment message

var resetButton = document.getElementById("resetBudgets");

if (resetButton.addEventListener) {                                       // modern browser event listener
    resetButton.addEventListener("click", clearBudgetCategories, false);
} else if (resetButton.attachEvent) {                                     // old IE event listener
    resetButton.attachEvent("onclick", clearBudgetCategories);
}
