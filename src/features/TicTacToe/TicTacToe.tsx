import Board from './Board';
import './TicTacToe.css';

type Props = {};

const TicTacToe = (props: Props) => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
