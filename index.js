import inquirer from 'inquirer';
import chalk from 'chalk';
import add from './add.js';
import division from './division.js';
import multiply from './multiply.js';
import subs from './subs.js';
import require from './addRequire.js';
var takefunaction_name;
async function main() {
    const answer = await inquirer.prompt([
        {
            type: 'number',
            name: 'number1',
            message: "Enter firts number",
        },
        {
            type: 'number',
            name: 'number2',
            message: 'Enter second number'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select operator to perform operations',
            choices: [
                { name: "add", value: add },
                { name: "subs", value: subs },
                { name: "multiply", value: multiply },
                { name: "division", value: division }
            ]
            // we are passing functions as a value
        },
    ]);
    takefunaction_name = answer.operation.name;
    const solution = answer.operation(answer.number1, answer.number2);
    let table = require('table');
    let data, conf;
    data = [
        // Data to be saved in the tables 
        ["NUMBER 1 ", "NUMBER 2 ", "Operation", "ANSWER"],
        [answer.number1, answer.number2, takefunaction_name, solution]
    ];
    conf = {
        // Predefined styles of table 
        border: table.getBorderCharacters("ramac")
    };
    let x = table.table(data, conf);
    console.log(chalk.red(x));
}
let confirm;
do {
    await main();
    confirm = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmation',
            message: 'Do you want to continue',
            choices: ['Yes', 'No']
        }
    ]);
} while (confirm.confirmation);
