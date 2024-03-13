"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CACULATOR IN USING TYPESCRIPT
var prompt = require("prompt-sync")();
var n1 = parseInt(prompt("Enter you first number:"));
var n2 = parseInt(prompt("Enter your second number:"));
var operator = (prompt("enter operator (+,-,*,/):"));
if (operator = "+") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
if (operator = "-") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
if (operator = "*") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
if (operator = "/") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
else {
    console.log("please select correct operator ");
}
