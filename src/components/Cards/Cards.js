import './Cards.css';
import React, { useState } from 'react';
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

  const logFish = (fishType) => {
    console.log(fishType);
    const randomNoArray = generateRandomNoArray(1, 12);
    const updatedOrderNoArray = fish.map((item, index) => {
      return { ...item, orderNo: randomNoArray[index] };
    });

    const sortedArray = updatedOrderNoArray.sort(
      (a, b) => a.orderNo - b.orderNo
    );
    console.log(sortedArray);
    setFishState(sortedArray);
  };

  return (
    <div>
      {fish.map((item) => {
        return (
          <div key={item.fishType} onClick={() => logFish(item.fishType)}>
            {item.fishType}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
