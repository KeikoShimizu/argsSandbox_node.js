/******************************************************************/
/******************** Load Core Modules Here **********************/
const fs = require('fs');
/******************** Load NPM Modules Here ***********************/
const chalk = require('chalk');
/******************** Load Custom Modules Here ********************/
/******************** End of Modules ******************************/
/******************************************************************/
/*********************Add note **********************************/
//send a function back to App.js
const addNote = (title, body) => {
    //bring from note
    const notes = loadNotes()

    let dupNote = false

    if (notes.length > 0) {
        dupNote = notes.find((note) => note.title === title)
        console.log(dupNote)
    } else {
        dupNote = false
    }

    //push object into note array
    if (!dupNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('New Note was Added!'))
    } else {
        console.log(chalk.red.inverse('Title already exists'))
    }
    //save new note 
    saveNotes(notes)

}

/********************* Internal Functions (not for export) ********/
const loadNotes = () => {
    try {
        //if it works ().toString) json => string
        return JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (e) {
        //if it doesn't work return empty array
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

/********************* Remove note **********************************/
const removeNote = (title, body, index) => {
    const notes = loadNotes()
    console.log(notes)

    notes.map((notes, index) => {
        if(notes.title === title){
            const deleteNote = splice(notes[index].title)
        }
        console.log(chalk.green.inverse(`${deleteNote.title, deleteNote.body} is removed from note!`))
    })
}
/********************* List note **********************************/
const listNotes = (title, body) => {
    const notes = loadNotes()
    console.log(notes)

   
        if(notes.length > 0) {
            for (let i = 0; i < notes.length; i++){
                console.log(chalk.green.inverse(`Note title: ${notes[i].title}`))
            }
        }else {
            console.log(chalk.red.inverse('There is no note in system. Sorry.'))
        }
}
/********************* Read note **********************************/
const readNote = () => {
    const notes = loadNotes()
    console.log(notes)

    for(let i = 0; i < notes.length; i++){
        console.log(chalk.green.inverse(`Note title: ${notes[i].title}`))
    }
}
/********************* Exports ************************************/
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}