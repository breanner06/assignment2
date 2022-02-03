//this is my string variable//
let consolVar = "Why do you want to write something in the console anyway? Is it just to leave a developer note?";
console.log(consolVar);

//this is my global variable//
var firstContainer= 10;
let secondContainer= 5;


const operatorChart = {
    addition: firstContainer+secondContainer,
    subtraction: firstContainer-secondContainer,
    multiplication: firstContainer*secondContainer,
    division: firstContainer/secondContainer,
};

function addVariables() {
    document.getElementById("add").innerHTML = operatorChart.addition
};
function subtractVariables() {
    document.getElementById("subtract").innerHTML = operatorChart.subtraction
};
function multiplyVariables() {
    document.getElementById("multiply").innerHTML = operatorChart.multiplication
};
function divideVariables() {
    document.getElementById("divide").innerHTML = operatorChart.division
};

//end of assignment