/******************************************************************/
/******************** Load Core Modules Here **********************/
const fs = require('fs')
/******************** Load NPM Modules Here ***********************/
const chalk = require('chalk')
/******************** Load Custom Modules Here ********************/
/******************** End of Modules ******************************/
/******************************************************************/

const addNote = (title, body) => {
    const notes = loadNotes()

    let dupNote = false

    if (notes.length > 0) {
        dupNote = notes.find((note) => note.title === title)
    } else {
        dupNote = false
    }

    if (!dupNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('New Note was Added!'))
    } else {
        console.log(chalk.red.inverse('Title already exists'))
    }

    saveNotes(notes)

}

/********************* Internal Functions (not for export) ********/
const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

/********************* Exports ************************************/
module.exports = {
    addNote
}