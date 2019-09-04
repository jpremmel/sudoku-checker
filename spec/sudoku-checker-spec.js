import { Sudoku } from '../src/scripts.js';

describe('sudoku', function(){
  var exampleRow;
  var examplePuzzle;

  beforeEach(function() {
    examplePuzzle = new Sudoku();
    exampleRow = examplePuzzle.row1;
  });

  it('should disregard all integers that are not 1-9 and also non-numeric input', function(){
    expect(exampleRow.length).toEqual(9);
    for (var i = 0; i < exampleRow.length; i++) {
      expect(parseInt(exampleRow[i])).toBeGreaterThan(0);
      expect(parseInt(exampleRow[i])).toBeLessThan(10);
    }
  });


});
