// var assert = {
//   isTrue: function(expect, actual) {
//     if(expect === actual) {
//       console.log(":)");
//     }else{
//       console.log(":(");
//     }
//   }
// }

class NoteList {
  constructor (notes = []) {
    this.notes = notes
  }
  add(...notes) {
    notes.forEach(note => {
      this.notes.push(new Note(note))
    });
  }
  showNotes(){
  return this.notes.map(note => note.read());
  }
}

var testNoteList = new NoteList();
// var testNote1 = new Note("Yehays");
// var testNote2 = new Note("Oh no");
// var testNote3 = new Note("Maybe");
testNoteList.add("Yehays", "Oh no", "Maybe");
var firstNote = testNoteList.showNotes()[0]
assert.isTrue(firstNote, "Yehays");
