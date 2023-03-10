import { useState } from 'react';
import Board from './Board';
import './TicTacToe.css';

type Props = {};

/**
 * Given an array of 9 squares, this function will check for a winner and return 'X', 'O', or null as appropriate.
 * @param squares
 * @returns
 */
const calculateWinner = (squares: Array<Number>) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const TicTacToe = (props: Props) => {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(undefined) },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i: number) => {
    // This ensures that if we “go back in time” and then make a new move from that point,
    // we throw away all the “future” history that would now be incorrect.
    const localHistory = history.slice(0, stepNumber + 1);
    const current = localHistory[localHistory.length - 1];
    const squares = current.squares.slice();

    // Check if a player has won already or the square is already filled
    if (calculateWinner(current.squares) || current.squares[i]) {
      return;
    }

    squares[i] = currentPlayer();
    setHistory(localHistory.concat([{ squares: squares }]));
    setStepNumber(localHistory.length);
    togglePlayer();
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const currentPlayer = () => (xIsNext ? 'X' : 'O');
  const togglePlayer = () => setXIsNext(!xIsNext);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status = undefined;

  if (winner) status = 'Winner: ' + winner;
  else status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className='game'>
        <div className='game-board'>
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className='game-info'>
          <div className='status'>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
