// global variables
var operatingOne;
var operatingToo;
var operation;

function getReult() {
    // all the variables
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");
    var division = document.getElementById("division");
    var multiplication = document.getElementById("multiplication");
    var equal = document.getElementById("equal");
    var sum = document.getElementById("sum");
    var subtract = document.getElementById("subtract");
    var nine = document.getElementById("nine");
    var eight = document.getElementById("eight");
    var seven = document.getElementById("seven");
    var six = document.getElementById("six");
    var five = document.getElementById("five");
    var four = document.getElementById("four");
    var three = document.getElementById("three");
    var two = document.getElementById("two");
    var one = document.getElementById("one");
    var zero = document.getElementById("zero");

    // all events
    nine.onclick = function(event){
        result.textContent = result.textContent + "9"
    },

    eight.onclick = function(event){
        result.textContent = result.textContent + "8"
    },

    seven.onclick = function(event){
        result.textContent = result.textContent + "7"
    },

    six.onclick = function(event){
        result.textContent = result.textContent + "6"
    },

    five.onclick = function(event){
        result.textContent = result.textContent + "5"
    },

    four.onclick = function(event){
        result.textContent = result.textContent + "4"
    },

    three.onclick = function(event){
        result.textContent = result.textContent + "3"
    },

    two.onclick = function(event){
        result.textContent = result.textContent + "2"
    },

    one.onclick = function(event){
        result.textContent = result.textContent + "1"
    },

    zero.onclick = function(event){
        result.textContent = result.textContent + "0"
    },

    reset.onclick = function(event) {
        resetting();
    }

    sum.onclick = function(event) {
        operatingOne = result.textContent;
        operation = "+",
        cleaner();
    }

    subtract.onclick = function(event) {
        operatingOne = result.textContent;
        operation = "-",
        cleaner();
    }

    multiplication.onclick = function(event) {
        operatingOne = result.textContent;
        operation = "*",
        cleaner();
    }

    division.onclick = function(event) {
        operatingOne = result.textContent;
        operation = "/",
        cleaner();
    }

    equal.onclick = function(event) {
        operatingToo = result.textContent;
        solve();
    }

}

// all functions

function cleaner() {
    result.textContent = "";
}

function resetting() {
    result.textContent = "";
    operatingOne = 0;
    operatingToo = 0;
    operation = "";
}

function solve() {
    var answer = 0;
    switch(operation) {
        case "+":
            answer = parseFloat(operatingOne) + parseFloat(operatingToo);
            break;

        case "-":
            answer = parseFloat(operatingOne) - parseFloat(operatingToo);
            break;

        case "*":
            answer = parseFloat(operatingOne) * parseFloat(operatingToo);
            break;

        case "/":
            answer = parseFloat(operatingOne) / parseFloat(operatingToo);
            break;

        }
    answeretting();
    result.textContent = answer;
}