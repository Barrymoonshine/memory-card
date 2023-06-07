import './CardsContainer.css';
import React, { useState, useEffect } from 'react';
import generateRandomNoArray from '../../utils/generateRandomNoArray.js';

const CardsContainer = () => {
  const [fish, setFishState] = useState([
    {
      orderNo: 1,
      fishType: 'Shark',
    },
    {
      orderNo: 2,
      fishType: 'Squid',
    },
    {
      orderNo: 3,
      fishType: 'Octopus',
    },
    {
      orderNo: 4,
      fishType: 'Cod',
    },
    {
      orderNo: 5,
      fishType: 'Salmon',
    },
    {
      orderNo: 6,
      fishType: 'Eel',
    },
    {
      orderNo: 7,
      fishType: 'Anchovy',
    },
    {
      orderNo: 8,
      fishType: 'Crab',
    },
    {
      orderNo: 9,
      fishType: 'Lobster',
    },
    {
      orderNo: 10,
      fishType: 'Prawn',
    },
    {
      orderNo: 11,
      fishType: 'Sword Fish',
    },
    {
      orderNo: 12,
      fishType: 'Tuna',
    },
  ]);

  const [clickedFish, setClickedFishState] = useState([]);

  const reOrderCards = () => {
    const randomNoArray = generateRandomNoArray(1, 12);
    const updatedFishOrderNo = fish.map((item, index) => {
      return { ...item, orderNo: randomNoArray[index] };
    });
    const sortedFish = [...updatedFishOrderNo].sort(
      (a, b) => a.orderNo - b.orderNo
    );
    setFishState(sortedFish);
  };

  const handleClickedCard = () => {
    clickedFish.some((item, index) => clickedFish.indexOf(item) !== index)
      ? alert('Duplicate fish, start again')
      : alert('Not duplicate fish');
  };

  useEffect(() => {
    handleClickedCard();
    reOrderCards();
  });

  const handleClick = (fishType) => {
    setClickedFishState((prevState) => [...prevState, fishType]);
  };

  return (
    <div className='cards-container'>
      {fish.map((item) => {
        return (
          <div
            className='card'
            key={item.fishType}
            onClick={() => handleClick(item.fishType)}
          >
            {item.fishType}
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
