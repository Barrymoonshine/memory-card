import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='left-container'>
        <div>Don't Forget The Fish!</div>
      </div>
      <div className='right-container'>
        <div>Score: </div>
        <div>Best score: </div>
      </div>
    </div>
  );
};

export default Header;
