'use strict';

var assert = {
  isTrue: function(expect, actual) {
    if(expect === actual) {
      console.log(":)");
    }else{
      console.log(":(");
    }
  }
}

class Note {
  constructor() {
  }
  write() {
  }
  read() {
    return 'It is a note';  
  }
}


//it can hold text

var testNote = new Note();
testNote.write('It is a note');
assert.isTrue(testNote.read(), 'It is a note');
