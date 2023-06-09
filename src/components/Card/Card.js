import './Card.css';

const Card = (props) => {
  return (
    <div className='card' onClick={() => props.handleClick(props.sharkName)}>
      <div>
        <img src={props.sharkImg} className='shark-imgs' alt='shark' />
      </div>
      <div className='shark-names'>{props.sharkName}</div>
    </div>
  );
};

export default Card;
