import { Sudoku } from '../src/scripts.js';

describe('sudoku', function(){
  var exampleRow;
  var examplePuzzle;

  beforeEach(function() {
    examplePuzzle = new Sudoku();
  });

  it('should disregard all integers that are not 1-9 and also non-numeric input', function(){
    expect(examplePuzzle.checkRow(examplePuzzle.row1)).toBe(true);
    expect(examplePuzzle.checkRow(examplePuzzle.row2)).toBe(true);
    expect(examplePuzzle.checkRow(examplePuzzle.row3)).toBe(true);
    expect(examplePuzzle.checkRow(examplePuzzle.row4)).toBe(true);
    expect(examplePuzzle.checkRow(examplePuzzle.row5)).toBe(true);
    expect(examplePuzzle.checkRow(examplePuzzle.row6)).toBe(true);
    expect(examplePuzzle.checkRow(examplePuzzle.row7)).toBe(true);
    expect(examplePuzzle.checkRow(examplePuzzle.row8)).toBe(true);
    expect(examplePuzzle.checkRow(examplePuzzle.row9)).toBe(true);
  });


});
