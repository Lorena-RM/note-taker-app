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
        return JSON.parse(notes)
    })
  }
}

module.exports = new Store();
