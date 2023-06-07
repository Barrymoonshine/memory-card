import './Main.css';
import Header from './Header/Header';
import CardsContainer from './CardsContainer/CardsContainer';
import { useState } from 'react';

const Main = () => {
  // Control Scores state in main
  // Pass updated Scores variables to Header
  // Be called from Cards (grandchild) to update scores

  const [currentScore, setCurrentScore] = useState(0);

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  return (
    <div>
      <Header currentScore={currentScore} />
      <CardsContainer incrementCurrentScore={incrementCurrentScore} />
    </div>
  );
};

export default Main;
