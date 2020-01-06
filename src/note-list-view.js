

class NoteListView {
  constructor (noteList = new NoteList()) {
    this.noteList = noteList;
  }
  render(){
    return "<ul>" + this.noteList.showNotes().map(note => {
      return "<li><div>" + note + "</div></li>"
    }).join("") + "</ul>"
  }
}

// can return two notes
let testNoteList2 = new NoteList();
let testNoteListView = new NoteListView(testNoteList2);
let foodThatGood = "Favourite food: pesto"
let drinkThatGood = "Favourite drink: seltzer"
testNoteList2.add(foodThatGood, drinkThatGood);
expectedNoteListModel = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
console.log(testNoteListView.render());
assert.isTrue(testNoteListView.render(), expectedNoteListModel)

// can return one note
testNoteList2 = new NoteList();
testNoteListView = new NoteListView(testNoteList2);
let thisIsADifferentNote = "nothing!"
testNoteList2.add(thisIsADifferentNote);
expectedNoteListModel = "<ul><li><div>nothing!</div></li></ul>"
assert.isTrue(testNoteListView.render(), expectedNoteListModel);

//can return no notes
testNoteList2 = new NoteList();
testNoteListView = new NoteListView(testNoteList2);
expectedNoteListModel = "<ul></ul>"
assert.isTrue(testNoteListView.render(), expectedNoteListModel);
