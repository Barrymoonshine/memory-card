import './Card.css';
import React, { useState } from 'react';

const CardsContainer = (props) => {
  const [clickedFish, setClickedFishState] = useState([]);

  const handleCard = (updatedState) => {
    updatedState.some((item, index) => updatedState.indexOf(item) !== index)
      ? console.log('Duplicate fish, start again')
      : props.incrementScore();
  };

  const handleClick = (fishType) => {
    const updatedArray = [...clickedFish, fishType];
    console.log(updatedArray);
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
