import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {
  // initializing states
  const boardArr = new Array(9).fill(null);
  const [board, setBoard] = useState(boardArr);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  // initializing other vars
  let winner = calculateWinner(board);

  function getPlayer(xIsNext) {
    let currPlayer = null;
    if (xIsNext) {
      currPlayer = "X";
    } else {
      currPlayer = "O";
    }
    return currPlayer;
  }
  let player = getPlayer(xIsNext);

  // initialize functions
  function handleClick(index) {
    if (winner === null && board[index] === null) {
      let currBoard = [...board]; // update board
      currBoard[index] = player;
    
      setXisNext(!xIsNext);
      setStepNumber(stepNumber + 1); // update stepnumber
      setBoard(currBoard);
      winner = calculateWinner(currBoard);
    }
  }

  let jumpToStart = () => {
    let emptyArr = new Array(9).fill(null);
    setBoard(emptyArr); // reset board
    player = "X";
    setStepNumber(0);
    setXisNext(true);
  }

  let getResult = (winner, player, stepNumber) => {
    if (winner !== null) {
      return "Winner: " + winner +"!";
    } 
    if (stepNumber === 9) {
      return "Tie Game."
    }
    return "Next Player: " + player;
  }

  let result = getResult(winner, player, stepNumber);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div className='info-wrapper'>
          <div>
            <button className="button" onClick={jumpToStart}>Go to Start</button>
          </div>
          <h3>{result}</h3>
      </div>
  </>
  );
};

export default Game;
