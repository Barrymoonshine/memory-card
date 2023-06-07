import './Card.css';
import React, { useState } from 'react';

const CardsContainer = (props) => {
  const [clickedFish, setClickedFishState] = useState([]);

  const handleClickedCard = (updatedState) => {
    updatedState.some((item, index) => updatedState.indexOf(item) !== index)
      ? console.log('Duplicate fish, start again')
      : console.log('Not duplicate fish');
  };

  const handleClick = (fishType) => {
    const updatedArray = [...clickedFish, fishType];
    console.log(updatedArray);
    handleClickedCard(updatedArray);
    setClickedFishState(updatedArray);
    props.reOrderCards();
  };

  return (
    <div className='card' onClick={() => handleClick(props.fishType)}>
      {props.fishType}
    </div>
  );
};

export default CardsContainer;
