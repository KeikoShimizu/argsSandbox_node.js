/******************************************************************/
/******************** Load Core Modules Here **********************/
/******************** Load NPM Modules Here ***********************/
import yargs from 'yargs' ///this is the 3rd module, run npm i yargs
const chalk = require('chalk')
const yargsMod = require('yargs')
const { hideBin } = require('yargs/helpers')
/******************** Load Custom Modules Here ********************/
import notes from './notes.js'  //this is the local module
const notes = require('./notes.js')
/******************** End of Modules ******************************/
/******************************************************************/
const yargs = yargsMod(hideBin(process.argv))

yargs
    .command({
        command: 'add',
        describe: 'Adds a New Note to the System',
        builder: {
            title: {
                describe: 'This should be the Title of the Note',
                demandOption: chalk.red.inverse('\n"title" is a required parameter'),
                type: 'string'
            },
            body: {
                describe: 'This should be the Content of the Note',
                demandOption: chalk.red.inverse('\n"body" is a required parameter'),
                type: 'string'
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    })
    .help()
    .parse()

// Create Remove Command calling the removeNote() method

// Create List Command calling the listNotes() method

// Create Read Command calling the readNote() method