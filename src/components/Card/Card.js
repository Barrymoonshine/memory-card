import './Card.css';
import React, { useState } from 'react';

const CardsContainer = (props) => {
  const [clickedFish, setClickedFishState] = useState([]);

  const resetClickedFish = () => {
    setClickedFishState([]);
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

  const handleClick = (fishType) => {
    const updatedArray = [...clickedFish, fishType];
    setClickedFishState(updatedArray);
    handleCard(updatedArray);
    props.reOrderCards();
  };

  return (
    <div className='card' onClick={() => handleClick(props.fishType)}>
      {props.fishType}
    </div>
  );
};

export default CardsContainer;
