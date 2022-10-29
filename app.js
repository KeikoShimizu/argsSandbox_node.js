/******************************************************************/
/******************** Load Core Modules Here **********************/
/******************** Load NPM Modules Here ***********************/
const chalk = require('chalk')
const yargsMod = require('yargs')
const { hideBin } = require('yargs/helpers')
/******************** Load Custom Modules Here ********************/
// import notes from './notes.js'  //this is the local module
const notes = require('./notes.js')
/******************** End of Modules ******************************/
/******************************************************************/
const yargs = yargsMod(hideBin(process.argv))

yargs
    .command({
        command: 'add',
        describe: 'Add a New notes to the system',
        builder: {
            title: {
                describe: 'This should be the Title of the Note',
                demandOption: chalk.red.inverse('\n"Title" is a required parameter'),
                type: 'string'
            },
            body: {
                describe: 'This should be the Content of the Note',
                demandOption: chalk.red.inverse('\n"body" is a required parameter'),
                type: 'string'
            }
        },
        handler(argv) {
            notes.addNote(argv.title,argv.body)
        }
    })
    .help()
    .parse()

    // Create Remove Command calling the removeNote() method
    yargs    
    .command({
        command: 'remove',
        describe: 'Remove a note from the system',
        builder: {
            title: {
                describe: 'This should be the Title of the Note',
                demandOption: chalk.red.inverse('\n"Title" is a required parameter'),
                type: 'string'
            },
            body: {
                describe: 'This should be the Content of the Note',
                demandOption: chalk.red.inverse('\n"body" is a required parameter'),
                type: 'string'
            }
        },
        handler(argv) {
            notes.removeNote(argv.title, argv.body)
        }
    })
    .help()
    .parse()

    // Create Read Command calling the readNote() method
    yargs  
    .command({
        command: 'read',
        describe: 'Read a note title and body from the system',
        builder: {
            title: {
                describe: 'This should be the Title of the Note',
                demandOption: chalk.red.inverse('\n"Title" is a required parameter'),
                type: 'string'
            },
            body: {
                describe: 'This should be the Content of the Note',
                demandOption: chalk.red.inverse('\n"body" is a required parameter'),
                type: 'string'
            }
        },
        handler(argv) {
            notes.readNote(argv.title, argv.body)
        }
    })
    .help()
    .parse()

    // Create List Command calling the listNotes() method
    yargs  
    .command({
        command: 'list',
        describe: 'List all of the note titles from the system',
        builder: {
            title: {
                describe: 'This should be the Title of the Note',
                demandOption: chalk.red.inverse('\n"Title" is a required parameter'),
                type: 'string'
            },
            // body: {
            //     describe: 'This should be the Content of the Note',
            //     demandOption: chalk.red.inverse('\n"body" is a required parameter'),
            //     type: 'string'
            // }
        },
        handler(argv) {
            notes.listNotes(argv.title)
        }
    })
    .help()
    .parse()





