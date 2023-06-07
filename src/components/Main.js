import './Main.css';
import Header from './Header/Header';
import CardsContainer from './CardsContainer/CardsContainer';

const Main = () => {
  // Control Scores state in main
  // Pass updated Scores variables to Header
  // Be called from Cards (grandchild) to update scores

  return (
    <div>
      <Header />
      <CardsContainer />
    </div>
  );
};

export default Main;
