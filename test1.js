/******************************************************************/
/******************** Load Core Modules Here **********************/
/******************** Load NPM Modules Here ***********************/
// import chalk from 'chalk';
const chalk = require('chalk'); // needs chalk module, 
                                // so run npm i chalk if it's 
                                // not installed
/******************** Load Custom Modules Here ********************/
/******************** End of Modules ******************************/
/******************************************************************/

console.log(chalk.red.inverse('failed!'))
console.log(chalk.green('success!'))