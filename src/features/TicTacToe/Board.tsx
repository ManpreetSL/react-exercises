import Square from './Square';
import './Board.css';
import { useState } from 'react';

type Props = {
  squares: Array<Number>;
  onClick: (i: number) => void;
};

const Board = ({ squares, onClick }: Props) => {
  const createSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <div>
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
