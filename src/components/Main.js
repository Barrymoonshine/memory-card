import './Main.css';
import Header from './Header/Header';
import CardsContainer from './CardsContainer/CardsContainer';
import GameOver from './GameOver/GameOver';
import { useState } from 'react';

const Main = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState({
    score: 0,
    gameOver: false,
  });

  const handleScores = () => {
    const newCurrentScore = currentScore + 1;
    const newBestScore =
      newCurrentScore > bestScore.score ? newCurrentScore : bestScore.score;
    const isGameOver = newBestScore === 12 ? true : false;
    setBestScore((prevState) => ({
      ...prevState,
      score: newBestScore,
      gameOver: isGameOver,
    }));
    setCurrentScore(newCurrentScore);
  };

  const resetCurrentScore = () => {
    const zeroScore = currentScore - currentScore;
    setCurrentScore(zeroScore);
  };

  const resetBestScore = () => {
    setBestScore((prevState) => ({
      ...prevState,
      score: 0,
      gameOver: false,
    }));
  };

  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore.score} />
      <CardsContainer
        handleScores={handleScores}
        resetCurrentScore={resetCurrentScore}
      />
      {bestScore.gameOver && (
        <GameOver
          resetCurrentScore={resetCurrentScore}
          resetBestScore={resetBestScore}
        />
      )}
    </div>
  );
};

export default Main;
