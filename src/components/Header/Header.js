import './Header.css';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='left-container'>
        <div>Don't Forget The Fish!</div>
      </div>
      <div className='right-container'>
        <div>Current score: {props.currentScore}</div>
        <div>Best score: {props.bestScore}</div>
      </div>
    </div>
  );
};

export default Header;
