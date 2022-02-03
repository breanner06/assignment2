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



/* 
1. output to the console
2. create a global variable and identify it with comments
3. create a block variable and identify it with comments
4. perform mathematical operations on variables
5. create a string variable, identify it with a commment and output to the console
6. create an object variable using const. create an object variable and assign values
7. upload to Git and submit as a repository
*/
