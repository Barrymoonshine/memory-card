import './Card.css';
import React, { useState } from 'react';

const CardsContainer = (props) => {
  const [clickedSharks, setClickedSharksState] = useState([]);

  const resetClickedFish = () => {
    setClickedSharksState([]);
  };

  const checkForDuplicate = (updatedArray) => {
    return updatedArray.some(
      (item, index) => updatedArray.indexOf(item) !== index
    );
  };

  const handleCard = (updatedArray) => {
    const isCardDuplicate = checkForDuplicate(updatedArray);
    if (isCardDuplicate) {
      props.resetParentCurrentScore();
      resetClickedFish();
    } else {
      props.handleParentScores();
    }
  };

  const handleClick = (sharkName) => {
    const updatedArray = [...clickedSharks, sharkName];
    setClickedSharksState(updatedArray);
    handleCard(updatedArray);
    props.reOrderCards();
  };

  return (
    <div className='card' onClick={() => handleClick(props.sharkName)}>
      <div>
        <img src={props.sharkImg} className='shark-imgs' alt='shark' />
      </div>
      <div className='shark-names'>{props.sharkName}</div>
    </div>
  );
};

export default CardsContainer;
