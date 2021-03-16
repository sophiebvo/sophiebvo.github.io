/*
    GIT418: Validation Script
    Author: Sophie Ojcius
    Date: Mar 15, 2021
*/

"use strict";


// custom object constructor for exercise info

function Exercise(exerciseType, countType, amount) {
    this.exerciseName = exerciseType;
    this.repOrMin = countType;
    this.repOrMinAmount = amount;
}


// creates a new Exercise object and stores references to it in var addExercise

function createExercise() {
    var writtenExercise = document.getElementById("exerciseInput").value;
    var repRadioOption = document.getElementById("repRadio");
    var minRadioOption = document.getElementById("minRadio");
    var repOrMinOption = "";
    var countAmount = document.getElementById("exerciseAmount").value;

    // writes "repetitions" or "minutes string depending on which radio button was checked, and writes it in plural or singular form depending on how many reps/mins were added to the count
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


// adds a new row and 2 cells to the table and writes user input/user choice in them

function createNewExercise(exercise) {
    var table = document.getElementById("workoutPlanTable");
    var exerciseRow = table.insertRow();

    exerciseRow.insertCell().textContent = exercise.exerciseName;
    exerciseRow.insertCell().textContent = exercise.repOrMinAmount + " " + exercise.repOrMin;
}


// makes the table visible in case it was invisible before (at the start of making the working of after clearing all non-header rows)

function displayTable() {
    var exerciseTableArea = document.getElementById("workoutPlanDisplay");

    exerciseTableArea.style.display = "block"
}


// prevents "submission" default behavior, mostly keeps browser validation error messages from appearing right after correctly filled form is submitted

function preventSubmission(event) {
    event.preventDefault();
}


// when #submitExercise button is clicked, function determines if form was fully filled out, and if so, calls upon the functions which: prevent default submission behavior, display the div which contains the table, and create a new exercise object + place it in a new row/cells (also resets the form fields to be empty of user input with the reset() method)

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


// when #removeExercise button is clicked, function will remove the last row that was added with user input, and if all non-table header rows are removed, will hide the entire #workoutPlanDisplay div

function removeLastRow() {
    var exerciseTableArea = document.getElementById("workoutPlanDisplay");
    var table = document.getElementById("workoutPlanTable");
    var numberOfRows = table.rows.length;

    if (numberOfRows > 2) { // if there are more than 2 table rows
        table.deleteRow(numberOfRows-1); // remove last row (index number is 1 less than number of rows)
    } else { // otherwise (if less than 2 rows)
        table.deleteRow(numberOfRows-1); // remove last row
        exerciseTableArea.style.display = "none" // and make entire div surrounding table/button/line invisible
    }
}


// creates event listeners to trigger the functions above

function createEventListeners() {
    var addNewExercise = document.getElementById("submitExercise");
    addNewExercise.addEventListener("click", allowExerciseAdditionAndCleanUp, false);

    var removeTableParts = document.getElementById("removeExercise");
    removeTableParts.addEventListener("click", removeLastRow, false);
}


// runs the event listeners inside of eventListeners() when the page loads

window.addEventListener("load", createEventListeners, false);