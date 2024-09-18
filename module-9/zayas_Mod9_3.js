// JS variables 
// Best practice not to use var Should use let or const instead
//used let in this case as I can move in the future and change my location
let word1 = "Bronx";
//used const in this case as my families names are constants and will never need to be changed.
const word2 = "Jayden";
const word3 = "Nicholas";
const word4 = "Diana";

// JS functions to fill words
function fillWord1() {
    document.getElementById('word1').textContent = word1;
}

function fillWord2() {
    document.getElementById('word2').textContent = word2;
}

function fillWord3() {
    document.getElementById('word3').textContent = word3;
}

function fillWord4() {
    document.getElementById('word4').textContent = word4;
}
