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
  .command('add' || 'create', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('create', 'Add a new note', {
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

const command = argv._[0];

if (command === 'add' || command === 'create') {
  const note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    console.log('Please select unique title for new notes.');
  } else {
    notes.logNote(note);
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  const note = notes.getNote(argv.title);

  if (note) {
    notes.logNote(note);
  } else {
    console.log(`Note not found`);
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Note Removal Failed';
  console.log(message);
} else {
  console.log('Command not recognized');
}
