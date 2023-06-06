import './Cards.css';
import React, { useState } from 'react';
import generateRandomNo from '../../utils/generateRandomNo.js';

const Cards = () => {
  const [fish, setFishState] = useState([
    {
      order: 1,
      fishType: 'Shark',
    },
    {
      order: 2,
      fishType: 'Squid',
    },
    {
      order: 3,
      fishType: 'Octopus',
    },
    {
      order: 4,
      fishType: 'Cod',
    },
    {
      order: 5,
      fishType: 'Salmon',
    },
    {
      order: 6,
      fishType: 'Eel',
    },
    {
      order: 7,
      fishType: 'Anchovy',
    },
    {
      order: 8,
      fishType: 'Crab',
    },
    {
      order: 9,
      fishType: 'Lobster',
    },
    {
      order: 10,
      fishType: 'Prawn',
    },
    {
      order: 11,
      fishType: 'Sword Fish',
    },
    {
      order: 12,
      fishType: 'Tuna',
    },
  ]);

  const logFish = (fishType) => {
    console.log(fishType);
    console.log(generateRandomNo(1, 12));
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
