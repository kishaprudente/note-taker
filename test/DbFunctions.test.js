const DbFunctions = require("../db/dbFunctions.js");

describe("DbFunctions", () => {
  describe("readNotes", () => {
    test("should call fs.readFileAsync on db.json", () => {
      const dbFunctions = new DbFunctions();
      const output = [{ title: "Test Title", text: "Test text" }];

      const data = dbFunctions.readNotes();

      return expect(data).resolves.toEqual(output);
    });
  });
});
