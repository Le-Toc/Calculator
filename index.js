let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");

let dot = document.getElementById(".");
let plus = document.getElementById("+");
let minus = document.getElementById("-");
let multiply = document.getElementById("*");
let divide = document.getElementById("/");
let equals = document.getElementById("=");

let displayValue = document.getElementById("display");
let expression = '';


let buttons = [zero, one, two, three, four, five, six, seven, eight, nine,
    dot, plus, minus, multiply, divide, equals];

for (let i = 0; i < buttons.length; i++)
    buttons[i].onclick = function () { updateExpression(buttons[i].innerHTML); };

function updateExpression(value) {
    expression += value;
}

equals.onclick = function () {
    let result = eval(expression);
    expression = '';
    display(result);
}

function display(result) {
    displayValue.innerHTML = result;
}
