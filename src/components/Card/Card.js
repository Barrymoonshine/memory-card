import './Card.css';
import React, { useState, useEffect, useCallback } from 'react';

const CardsContainer = (props) => {
  const [clickedFish, setClickedFishState] = useState([]);

  const handleClickedCard = useCallback(() => {
    clickedFish.some((item, index) => clickedFish.indexOf(item) !== index)
      ? console.log('Duplicate fish, start again')
      : console.log('Not duplicate fish');
  }, [clickedFish]);

  useEffect(() => {
    handleClickedCard();
    props.reOrderCards();
  }, [handleClickedCard, props]);

  const handleClick = (fishType) => {
    setClickedFishState((prevState) => [...prevState, fishType]);
  };

  return (
    <div className='card' onClick={() => handleClick(props.fishType)}>
      {props.fishType}
    </div>
  );
};

export default CardsContainer;
