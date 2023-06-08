import './Header.css';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='left-container'>
        <div className='title'>Spot The Shark!</div>
        <div className='instructions'>
          Get points by clicking on an image but don't click on any more than
          once!
        </div>
      </div>
      <div className='right-container'>
        <div>Current score: {props.currentScore}</div>
        <div>Best score: {props.bestScore}</div>
      </div>
    </div>
  );
};

export default Header;
