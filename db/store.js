const util = require("util");
const fs = require("fs");
const { v4: generateId } = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("db/db.json", "utf-8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      return JSON.parse(notes);
    });
  }

  writeNote(note) {
    if (!note.title || !note.text) {
      throw new Error("cannot be blank");
    }
    note.id = generateId();

    return this.getNotes().then((notes)=>{
        return [...notes, note]
    }).then((arrNotes)=>{
        return this.write(arrNotes);
    }).then(()=>{
        return note
    })
  }
}

module.exports = new Store();
