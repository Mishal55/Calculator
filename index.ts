//BMI CALCULATOR USING INQUIRER PROMPT
import inquirer from "inquirer";
const questions = [
    { type: "number", name: "weight", message: "weight(kg):" },
    { type: "number", name: "height", message: "heght(e):" },
];
const calculateBMI = (weight: number, height: number) => weight / (height + height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);
    console.log(`BMI:${calculateBMI(weight, height).toFixed(2)}`);
};
main();
