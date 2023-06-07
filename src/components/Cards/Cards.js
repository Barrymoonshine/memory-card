import './Cards.css';
import React, { useState, useEffect } from 'react';
import generateRandomNoArray from '../../utils/generateRandomNoArray.js';

const Cards = () => {
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

  const reOrderFish = () => {
    const randomNoArray = generateRandomNoArray(1, 12);
    const updatedFishOrderNo = fish.map((item, index) => {
      return { ...item, orderNo: randomNoArray[index] };
    });
    const sortedFish = [...updatedFishOrderNo].sort(
      (a, b) => a.orderNo - b.orderNo
    );
    setFishState(sortedFish);
  };

  const logFish = () => {
    console.log(clickedFish);
  };

  useEffect(() => {
    logFish();
  });

  const handleClick = (fishType) => {
    reOrderFish();
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

export default Cards;
