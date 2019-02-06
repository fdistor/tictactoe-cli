const prompt = require('prompt');

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

const displayBoard = () => {
  console.log(`\n ${board[0]} | ${board[1]} | ${board[2]} \n --------\n ${board[3]} | ${board[4]} | ${board[5]} \n --------\n ${board[6]} | ${board[7]} | ${board[8]} \n --------`);
};

const placePiece = (position, piece) => {
  if (board[position] === ' ') {
    board[position] = piece;
    return true;
  }
  return false;
};

const play = (player) => {
  console.log(`Player ${player}'s turn.`);
  prompt.start();
  prompt.get(['position'], (err, result) => {
    const placed = placePiece(result.position, player);
    if (placed === true) {
      displayBoard();
    } else {
      console.log('Invalid move.');
      play(player);
    }
  });
}

displayBoard();
play('O');
