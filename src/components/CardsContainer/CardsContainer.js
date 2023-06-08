import './CardsContainer.css';
import React, { useState } from 'react';
import generateRandomNoArray from '../../utils/generateRandomNoArray.js';
import Card from '../Card/Card';
import whaleSharkImg from '../../images/whale-shark.jpg';
import tigerSharkImg from '../../images/tiger-shark.jpg';
import hammerheadSharkImg from '../../images/hammerhead-shark.jpeg';
import bullSharkImg from '../../images/bull-shark.jpg';
import greatWhiteSharkImg from '../../images/great-white-shark.jpg';
import lemonSharkImg from '../../images/lemon-shark.jpg';
import nurseSharkImg from '../../images/nurse-shark.jpg';
import blueSharkImg from '../../images/blue-shark.jpg';
import greenlandSharkImg from '../../images/greenland-shark.jpeg';
import silkySharkImg from '../../images/silky-shark.jpg';
import goblinSharkImg from '../../images/goblin-shark.jpg';
import reefSharkImg from '../../images/reef-shark.jpg';

const CardsContainer = (props) => {
  const [shark, setSharkState] = useState([
    {
      orderNo: 1,
      sharkName: 'Whale Shark',
      img: whaleSharkImg,
    },
    {
      orderNo: 2,
      sharkName: 'Tiger Shark',
      img: tigerSharkImg,
    },
    {
      orderNo: 3,
      sharkName: 'Hammerhead Shark',
      img: hammerheadSharkImg,
    },
    {
      orderNo: 4,
      sharkName: 'Bull Shark',
      img: bullSharkImg,
    },
    {
      orderNo: 5,
      sharkName: 'Great White Shark',
      img: greatWhiteSharkImg,
    },
    {
      orderNo: 6,
      sharkName: 'Lemon Shark',
      img: lemonSharkImg,
    },
    {
      orderNo: 7,
      sharkName: 'Nurse Shark',
      img: nurseSharkImg,
    },
    {
      orderNo: 8,
      sharkName: 'Blue Shark',
      img: blueSharkImg,
    },
    {
      orderNo: 9,
      sharkName: 'Greenland Shark',
      img: greenlandSharkImg,
    },
    {
      orderNo: 10,
      sharkName: 'Silky Shark',
      img: silkySharkImg,
    },
    {
      orderNo: 11,
      sharkName: 'Goblin Shark',
      img: goblinSharkImg,
    },
    {
      orderNo: 12,
      sharkName: 'Reef Shark',
      img: reefSharkImg,
    },
  ]);

  const reOrderCards = () => {
    const randomNoArray = generateRandomNoArray(1, 12);
    const updateOrder = shark.map((item, index) => {
      return { ...item, orderNo: randomNoArray[index] };
    });
    const sortedSharks = [...updateOrder].sort((a, b) => a.orderNo - b.orderNo);
    setSharkState(sortedSharks);
  };

  const handleParentScores = () => {
    props.handleScores();
  };

  const resetParentCurrentScore = () => {
    props.resetCurrentScore();
  };

  return (
    <div>
      <div className='cards-container'>
        {shark.map((item) => (
          <Card
            key={item.sharkName}
            sharkName={item.sharkName}
            sharkImg={item.img}
            reOrderCards={reOrderCards}
            handleParentScores={handleParentScores}
            resetParentCurrentScore={resetParentCurrentScore}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
