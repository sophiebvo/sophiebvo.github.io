/*
    GIT417: Calculations Script
    Author: Sophie Ojcius
    Date: Jan 25 2021
*/

// declared global variable(s)

var remainingMoney = 0;

// writes string that says remaining money hasn't been calculated yet

document.getElementById("leftoverMoneyText").innerHTML = "<p class='leftoverMoneyTextClass'>Your remaining money has not yet been calculated. Click on the \"Calculate Remaining Money\" button to start.</p>";

// calculates remaining money by subtracting all the inputted values in the budget categories from the inputted income

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

    // Writes text that says how much money is remaining (calculated from calcLeftoverMoney() function)

    document.getElementById("leftoverMoneyText").innerHTML = "<p class='leftoverMoneyTextClass'>Your remaining money is " + remainingMoney.toFixed(2) + " dollars.</p>";
}


// triggers remaining money calculation (calculated from calcLeftoverMoney() function) and new text when clicking on the calculation button

document.getElementById("remainingMoney").addEventListener("click", calcLeftoverMoney, false);

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

    document.getElementById("leftoverMoneyText").innerHTML = "<p class='leftoverMoneyTextClass'>Your remaining money was previously " + remainingMoney.toFixed(2) + " dollars before you reset the budget categories back to 0.</p>";
}

// triggers the resetting of the budget values to 0 (but not the income value) and triggeers the new past tense text when clicking on the reset button

document.getElementById("resetBudgets").addEventListener("click", clearBudgetCategories, false);
