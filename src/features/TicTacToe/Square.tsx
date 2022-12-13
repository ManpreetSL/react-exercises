import './Square.css';

type Props = {
  value: number;
};

const Square = ({ value }: Props) => {
  return (
    <div>
      <button className='square'>{value}</button>
    </div>
  );
};

export default Square;
