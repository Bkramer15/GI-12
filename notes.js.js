// Importing the 'fs' module (File System) from Node.js core library.
const fs = require('fs')

// Importing the 'chalk' module for colorful console output.
const chalk = require('chalk')

// Defining a function to add a new note with given title and body.
const addNote = (title, body) => {
    // Loading existing notes from 'notes.json' file or creating an empty array if file doesn't exist.
    const notes = loadNotes()
    
    // Checking if a note with the same title already exists.
    const duplicateNote = notes.find((note) => note.title === title)

    // If no note with the same title exists, add the new note to the array and save it to 'notes.json' file.
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        // If a note with the same title exists, print a message indicating that the title is taken.
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// Defining a function to remove a note with the given title.
const removeNote = (title) => {
    // Loading existing notes from 'notes.json' file or creating an empty array if file doesn't exist.
    const notes = loadNotes()

    // Filtering out the notes with the given title and keeping the rest.
    const notesToKeep = notes.filter((note) => note.title !== title)

    // If any note was removed, save the updated notes array to 'notes.json' file.
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        // If no note was removed (no note with the given title found), print a message indicating that.
        console.log(chalk.red.inverse('No note found!'))
    }    
}

// Defining a function to list all the existing notes.
const listNotes = () => {
    // Loading existing notes from 'notes.json' file or creating an empty array if file doesn't exist.
    const notes = loadNotes()

    // Printing a header for the list of notes.
    console.log(chalk.inverse('Your notes'))

    // Iterating through each note and printing its title.
    notes.forEach((note) => {
        console.log(note.title)
    })
}

// Defining a function to read and display the body of a note with the given title.
const readNote = (title) => {
    // Loading existing notes from 'notes.json' file or creating an empty array if file doesn't exist.
    const notes = loadNotes()

    // Finding the note with the given title.
    const note = notes.find((note) => note.title === title)

    // If a note with the given title exists, print its title and body.
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        // If no note with the given title exists, print a message indicating that.
        console.log(chalk.red.inverse('Note not found!'))
    }
}

// Defining a function to save notes to 'notes.json' file.
const saveNotes = (notes) => {
    // Converting the notes array to JSON format.
    const dataJSON = JSON.stringify(notes)
    
    // Writing the JSON data to 'notes.json' file.
    fs.writeFileSync('notes.json', dataJSON)
}

// Defining a function to load notes from 'notes.json' file.
const loadNotes = () => {
    try {
        // Reading data from 'notes.json' file.
        const dataBuffer = fs.readFileSync('notes.json')
        
        // Converting the data to a string.
        const dataJSON = dataBuffer.toString()
        
        // Parsing the JSON string to convert it back to an array of notes objects.
        return JSON.parse(dataJSON)
    } catch (e) {
        // If an error occurs (e.g., file not found), return an empty array.
        return []
    }
}

// Exporting the functions to make them accessible from other files.
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
