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
  write(input) {
    this.input = input;
  }
  read() {
    return this.input;
  }
}


//it returns it is note

var testNote = new Note();
testNote.write('It is a note');
assert.isTrue(testNote.read(), 'It is a note');

// it can return any given string
var testNote2 = new Note();
testNote2.write("I am very very calm I promise.")
assert.isTrue(testNote2.read(), 'I am very very calm I promise.');
