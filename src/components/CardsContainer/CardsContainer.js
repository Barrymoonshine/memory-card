import './CardsContainer.css';
import React, { useState } from 'react';
import generateRandomNoArray from '../../utils/generateRandomNoArray.js';
import Card from '../Card/Card';

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

  return (
    <div className='cards-container'>
      {fish.map((item) => (
        <Card
          key={item.fishType}
          fishType={item.fishType}
          reOrderCards={reOrderCards}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
