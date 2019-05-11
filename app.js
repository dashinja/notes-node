const yargs = require('yargs')

const notes = require('./notes')

const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't',
}

const bodyOptions = {
  describe: 'Body of Note',
  demand: true,
  alias: 'b',
}

const argv = yargs
  .command('add' || 'create', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('create', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'Lists all notes')
  .command('read', 'Reads a note', {
    title: titleOptions,
  })
  .command('remove', 'Deletes a note', {
    title: titleOptions,
  })
  .help().argv

const command = argv._[0]

let note = ''

switch (command) {
  case 'add' || 'create':
    note = notes.addNote(argv.title, argv.body)

    note === undefined
      ? console.log('Please select unique title for new notes.')
      : notes.logNote(note)

    break

  case 'list':
    const allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach(note => notes.logNote(note))
    break

  case 'read':
    note = notes.getNote(argv.title)

    if (note) {
      notes.logNote(note)
    } else {
      console.log(`Note not found`)
    }
    break

  case 'remove':
    const noteRemoved = notes.removeNote(argv.title)
    const message = noteRemoved ? 'Note was removed' : 'Note Removal Failed'
    console.log(message)

  default:
    console.log('Default Message: None of your switch cases caught any fish')
    break
}
