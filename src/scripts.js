
export function Sudoku() {
  this.row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.row9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

Sudoku.prototype.checkRow = function(row) {
  console.log(row.length);
  if (row.length != 9) {
    return false;
  }
  var integersOnly;
  for (var i = 0; i < 9; i++) {
    if (parseInt(row[i]) > 0 && parseInt(row[i]) < 10) {
      console.log("PASSED IF STATEMENT");
      integersOnly = true;
    } else {
      console.log("FAILED IF STATEMENT");
      return false;
    }
  }
  return integersOnly;
}
