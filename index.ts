//CACULATOR IN USING TYPESCRIPT

var prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Enter your first number:"));

var n2 = parseInt(prompt("Enter your second number:"));

var operator = (prompt("enter operator (+,-,*,/):"));
if (operator = "+") {
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1+n2}`);
}
if (operator = "-") {
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1-n2}`);
}
if (operator = "*") {
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1*n2}`);
}
if (operator = "/") {
  console.log(`the answer of ${n1} ${operator} ${n2} = ${n1/n2}`);

}else {
    console.log("please select correct operator ");
}
export{};
