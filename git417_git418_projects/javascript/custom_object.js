/*
    GIT417: Validation Script
    Author: Sophie Ojcius
    Date: Mar 15, 2021
*/

"use strict";

// global variables
// var addExercise = new Exercise();

// custom object constructor for exercise info

function Exercise(exerciseType, countType, amount) {
    this.exerciseName = exerciseType;
    this.repOrMin = countType;
    this.repOrMinAmount = amount;
}

function createExercise() {
    var writtenExercise = document.getElementById("exerciseInput").value;
    var repRadioOption = document.getElementById("repRadio");
    var minRadioOption = document.getElementById("minRadio");
    var repOrMinOption = "";
    var countAmount = document.getElementById("exerciseAmount").value;

    if (repRadioOption.checked) {
        repOrMinOption ="repetitions";
        
        if (countAmount < 2){
            repOrMinOption ="repetition";
        }
    }
    if (minRadioOption.checked) {
        repOrMinOption = "minutes";

        if (countAmount < 2){
            repOrMinOption ="minute";
        }
    }

    var addExercise = new Exercise(writtenExercise, repOrMinOption, countAmount);

    createNewExercise(addExercise);
}

function displayTable() {
    var exerciseTableArea = document.getElementById("workoutPlanDisplay");

    /* Check to see if you even need the if statement!!!!!!
    if (exerciseTableArea.style.display = "none") {
        exerciseTableArea.style.display = "block"
    }*/

    exerciseTableArea.style.display = "block"
}

function createNewExercise(exercise) {
    var table = document.getElementById("workoutPlanTable");
    var exerciseRow = table.insertRow();

    exerciseRow.insertCell().textContent = exercise.exerciseName;
    exerciseRow.insertCell().textContent = exercise.repOrMinAmount + " " + exercise.repOrMin;
}

function preventSubmission(event) {
    event.preventDefault();
}

 //ADD THIS INSIDE THE CREATE OBJECT FUNCTION?
function allowExerciseAdditionAndCleanUp() { // change event to submitActions???
    var exerciseForm = document.getElementById("workoutForm");

    var writtenExercise = document.getElementById("exerciseInput").value;
    var repRadioOption = document.getElementById("repRadio");
    var minRadioOption = document.getElementById("minRadio");
    var countAmount = document.getElementById("exerciseAmount").value;


    if (writtenExercise !== "" && (repRadioOption.checked || minRadioOption.checked) && countAmount >= 1) {
        preventSubmission(event); // prevents "submission" default behavior, keeps error messages from appearing right after proper submission
        displayTable();
        createExercise();
        exerciseForm.reset();
    }
}

function removeLastRow() {
    var exerciseTableArea = document.getElementById("workoutPlanDisplay");
    var table = document.getElementById("workoutPlanTable");
    var numberOfRows = table.rows.length;

    if (numberOfRows > 2) {
        table.deleteRow(numberOfRows-1);
    } else {
        table.deleteRow(numberOfRows-1);
        exerciseTableArea.style.display = "none"
    }
}
////////////////
function deleterow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    table.deleteRow(rowCount -1);
}
///////////////////

// creates event listeners to trigger the functions above

function createEventListeners() {
    var addNewExercise = document.getElementById("submitExercise");
    addNewExercise.addEventListener("click", allowExerciseAdditionAndCleanUp, false);

    var removeTableParts = document.getElementById("removeExercise");
    removeTableParts.addEventListener("click", removeLastRow, false);
}


// runs the event listeners inside of eventListeners() when the page loads

window.addEventListener("load", createEventListeners, false);