import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [locations, setLocations] = useState([{ col_row: [null, null] }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const Button = styled.button`
    background-color: transparent;
    border-color: white;
    border-radius: 10px;
    border-width: 1px;
    color: white;
  `;

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    const newLocations = locations.slice(0, stepNumber + 1);
    const col_row = [Math.floor(i / 3 + 1), (i % 3) + 1];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(
      newHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setLocations(
      newLocations.concat([
        {
          col_row: col_row,
        },
      ])
    );
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const restart = () => {
    setHistory([
      {
        squares: Array(9).fill(null),
      },
    ]);
    setLocations([
      {
        col_row: [null, null],
      },
    ]);
    setStepNumber(0);
    setXIsNext(true);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const newLocations = locations.slice();
  const restartButton = (
    <Button className="move-buttons" onClick={() => restart()}>
      Restart
    </Button>
  );

  const moves = history.map((step, move) => {
    const desc = move
      ? "Go to move #" +
        move +
        " (" +
        newLocations[move].col_row[0] +
        "," +
        newLocations[move].col_row[1] +
        ")"
      : "Go to game start";
    return (
      <li key={move}>
        <Button
          className="move-buttons"
          onClick={() => {
            jumpTo(move);
          }}
        >
          {desc}
        </Button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (stepNumber === 9) {
    status = "Draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="title">TIC TAC TOE</div>
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="info-top">
            <div className="status">{status}</div>
            <div className="restart">{restartButton}</div>
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default Game;
