#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWelcome To \ 'CodeWithTayyaba\' -CLI Simple Calculator\n");


//Asking Question from users through Inquirer

let answers = await inquirer.prompt([
 {message: "Enter first number", type:"number", name: "firstNumber"},
  {message: "Enter second namber", type:"number", name: "secondNumber" },
   { 
            message: "Select One of the Operators to perform operation",
            type: "list",
            name: "operator",
            choices:["Addition",  "Subtraction",  "Multiplication", "Division"],
        },
]);

// conditional statements
if(answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)

}
else{
    console.log("invalid input" )
}