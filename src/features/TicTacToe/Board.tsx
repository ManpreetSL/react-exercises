import Square from './Square';
import './Board.css';
import { useState } from 'react';

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

const Board = (props: Props) => {
  const handleClick = (i: number) => {
    const slicedSquares = squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    slicedSquares[i] = currentPlayer();
    setSquares(slicedSquares);
    togglePlayer();
  };

  const currentPlayer = () => (xIsNext ? 'X' : 'O');
  const togglePlayer = () => setXIsNext(!xIsNext);

  const createSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  const [squares, setSquares] = useState(Array(9).fill(undefined));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status = undefined;

  if (winner) status = 'Winner: ' + winner;
  else status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <div>
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {createSquare(0)}
          {createSquare(1)}
          {createSquare(2)}
        </div>
        <div className='board-row'>
          {createSquare(3)}
          {createSquare(4)}
          {createSquare(5)}
        </div>
        <div className='board-row'>
          {createSquare(6)}
          {createSquare(7)}
          {createSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default Board;
