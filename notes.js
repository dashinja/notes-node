const fs = require('fs');

let fetchNotes = () => {
  try {
    /* <-- Define new variable to hold content of existing notes, if any --> */
    let notesString = fs.readFileSync('notes-data.json');

    /* <-- Update the array 'notes' to be the a real object of the content of notesString, aka all existing notes --> */
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

/* Writes the most up-to-date STRINGIFIED version of the 'notes' array to the to the file 'notes-data.json', which may at some later time be read again to inquire about which notes already exist */
let saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  let duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    /* <-- Adds the newest note to the 'notes' array, content is added based on calling the 'addNote' function using the parameters specified in CLI as --title and --body, see the 'note' assignment operation above --> */
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () => {
  return fetchNotes();
};

let getNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];
};

let removeNote = title => {
  let notes = fetchNotes();
  // filter notes, removing the one with title of argument
  let notesToKeep = notes.filter(note => note.title !== title);
  // save new notes array
  saveNotes(notesToKeep);

  // Test whether the removeNote operation was successful
  return notes.length !== notesToKeep.length;
};
let logNote = note => {
  // Break on this line and use repl to output note
  // Use read command with --title, yeah this is kool!

  console.log(
    `-------------\nNote Created! \n------------- \nTitle: ${
      note.title
    } \nBody: ${note.body}\n`
  );
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
  fetchNotes
};
