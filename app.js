const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of Note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'Lists all notes')
  .command('read', 'Reads a note', {
    title: titleOptions
  })
  .command('remove', 'Deletes a note', {
    title: titleOptions
  })
  .help().argv;

let command = argv._[0];

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    console.log('Please select unique title for new notes.');
  } else {
    notes.logNote(note);
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  let note = notes.getNote(argv.title);

  if (note) {
    notes.logNote(note);
  } else {
    console.log(`Note not found`);
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note Removal Failed';
  console.log(message);
} else {
  console.log('Command not recognized');
}
