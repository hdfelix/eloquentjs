// Part a (for an 8 x 8 board)
var x = 0;
var line = '# # # #\n';
var board = '';
for(x=0; x < 8; x++){
  if(x % 2 === 0){
    board += ' ';
  }
  
  board += line;
}
console.log(board);


// Part b (for any board size)
var size = prompt('Enter the size of the board: ');
var line = '';
var board = '';

// Create a line
for(x = 0; x < size; x++){
  if(x % 2 === 0){
   line += '#';
  }else{
    line += ' ';
  }
}

line += '\n';

// generate the board
for(x=0; x < size; x++){
  if(x % 2 === 0){
    board += ' ';
  }
  
  board += line;
}

// print the board
console.log(board);
