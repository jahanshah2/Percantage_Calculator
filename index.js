import inquirer from "inquirer";
import chalk from "chalk";
const answer2 = await inquirer.prompt([
    { message: chalk.bold.bgBlueBright.whiteBright("Enter Your Percentage"), type: "number", name: "Number" },
]);
if (answer2.Number > 100) {
    console.log(chalk.bold.redBright("Warrning!") + " Please Enter Valid Percentage");
}
else if (answer2.Number >= 90 && answer2.Number <= 100) {
    console.log(("Your Grade is : ") + chalk.bold.greenBright.underline("'A'+"));
}
else if (answer2.Number >= 80 && answer2.Number <= 89) {
    console.log(("Your Grade is : ") + chalk.bold.green.underline("'A'"));
}
else if (answer2.Number >= 70 && answer2.Number <= 79) {
    console.log(("Your Grade is : ") + chalk.bold.yellow.underline("'B'"));
}
else if (answer2.Number >= 60 && answer2.Number <= 69) {
    console.log(("Your Grade is : ") + chalk.bold.redBright.underline("'C'"));
}
else {
    console.log(chalk.red.bold.underline("You are Failed"));
}
