// Importing the 'chalk' module for colorful console output.
const chalk = require('chalk')

// Importing the 'yargs' module for command-line argument parsing.
const yargs = require('yargs')

// Importing the functions exported from the 'notes.js' file.
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Creating the 'add' command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // This option is required
            type: 'string' // The type of the option's value
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // Calling the 'addNote' function from the 'notes' module with the provided arguments
        notes.addNote(argv.title, argv.body)
    }
})

// Creating the 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // Calling the 'removeNote' function from the 'notes' module with the provided arguments
        notes.removeNote(argv.title)
    }
})

// Creating the 'list' command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        // Calling the 'listNotes' function from the 'notes' module
        notes.listNotes()
    }
})

// Creating the 'read' command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // Calling the 'readNote' function from the 'notes' module with the provided arguments
        notes.readNote(argv.title)
    }
})

// Parsing the command-line arguments
yargs.parse()
