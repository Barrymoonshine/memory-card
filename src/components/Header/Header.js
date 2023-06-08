import './Header.css';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='left-container'>
        <div className='title'>Spot The Shark</div>
        <div className='instructions'>Don't click the same shark twice!</div>
      </div>
      <div className='right-container'>
        <div className='scores'>Current score: {props.currentScore}</div>
        <div className='scores'>Best score: {props.bestScore}</div>
      </div>
    </div>
  );
};

export default Header;
