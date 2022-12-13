import { useState } from 'react';
import './Square.css';

type Props = {
  value?: number;
  onClick: () => void;
};

const Square = ({ value, onClick }: Props) => {
  return (
    <div>
      <button className='square' onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;
