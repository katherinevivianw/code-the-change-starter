export function calculateWinner(squares) {
  if (squares[0] && squares[0] === squares[1] && squares[1] === squares[2]) {
    return squares[0];
  }

  else if (squares[3] && squares[3] === squares[4] && squares[4] === squares[5]) {
    return squares[3];
  }

  else if (squares[6] && squares[6] === squares[7] && squares[7] === squares[8]) {
    return squares[6];
  }

  // check vertical wins
  else if (squares[0] && squares[0] === squares[3] && squares[3] === squares[6]) {
    return squares[0];
  }

  else if (squares[1] && squares[1] === squares[4] && squares[4] === squares[7]) {
    return squares[1];
  }

  else if (squares[2] && squares[2] === squares[5] && squares[5] === squares[8]) {
    return squares[2];
  }

  // check diagonals
  else if (squares[0] && squares[0] === squares[4] && squares[4] === squares[8]) {
    return squares[0];
  }

  else if (squares[2] && squares[2] === squares[4] && squares[4] === squares[6]) {
    return squares[2];
  }

  return null;
}
