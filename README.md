# Notes-Node
Welcome to Notes-Node, a very simple note creation application. 
This program is a command line application and all its features 
are accessed via the command line. This project is an exercise
in completing what I start as well as newer concepts made applicable.

## Format to Access Application
> node app.js {command}

## Commands:
  [add]     - Add a new note
  
  [list]    - Lists all notes
  
  [read]    - Reads a note
  
  [remove]  - Deletes a note

### Options:
  --help    - Show help 
  

## How to Create Notes
> node app.js add -t -b

### Options:
  [--help]  - Show help
  
  [--title], [-t] - Title of Note  - [required]
  
  [--body], [-b]  - Body of Note - [required]
  

## How to List All Notes
> node app.js list

## How to Read a Note
> node app.js read -t

### Options:
  [--help]  - Show help
  
  [--title], [-t] - Title of Note  - [required]
  
## How to Remove a Note
> node app.js remove -t

### Options:
  [--help]  - Show help
  
  [--title], [-t] - Title of Note  - [required]
