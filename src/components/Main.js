import './Main.css';
import Header from './Header/Header';
import CardsContainer from './CardsContainer/CardsContainer';
import { useState } from 'react';

const Main = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScores = () => {
    const newCurrentScore = currentScore + 1;
    const newBestScore =
      newCurrentScore > bestScore ? newCurrentScore : bestScore;
    setBestScore(newBestScore);
    setCurrentScore(newCurrentScore);
  };

  const resetCurrentScore = () => {
    const zeroScore = currentScore - currentScore;
    setCurrentScore(zeroScore);
  };

  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardsContainer
        handleScores={handleScores}
        resetCurrentScore={resetCurrentScore}
      />
    </div>
  );
};

export default Main;
