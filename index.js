import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "Fisrtnumber",
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "Secondnumber",
    },
    {
        message: "Select one of the operators to perform action",
        choices: ["+", "-", "*", "/"],
        type: "list",
        name: "operator",
    },
]);
//Conditional statement
if (ans.operator === "+") {
    console.log(ans.Fisrtnumber + ans.Secondnumber);
}
else if (ans.operator === "-") {
    console.log(ans.Fisrtnumber - ans.Secondnumber);
}
else if (ans.operator === "*") {
    console.log(ans.Fisrtnumber * ans.Secondnumber);
}
else if (ans.operator === "/") {
    console.log(ans.Fisrtnumber / ans.Secondnumber);
}
else {
    console.log("Please select valid operators");
}
