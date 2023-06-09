import './GameOver.css';
import { useState } from 'react';

const GameOver = (props) => {
  const [displayModel, setDisplayModal] = useState(true);

  const hideModal = () => {
    setDisplayModal(false);
  };

  const handleClick = (event) => {
    props.resetCurrentScore();
    props.resetBestScore();
    hideModal(event);
  };

  return (
    <div>
      {displayModel && (
        <div className='game-over-modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              Congrats you selected all the sharks in the right order! Play
              again?
            </div>
            <button className='play-again-button' onClick={handleClick}>
              Play again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameOver;
