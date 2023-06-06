import './App.css';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';

const App = () => {
  return (
    <div className='page-container'>
      <main>
        <Header />
        <Cards />
      </main>
      <div className='footer'>
        <p>
          © Made by
          <a href='https://github.com/Barrymoonshine'>Barry Moonshine</a> for
          <a href='https://www.theodinproject.com/'>The Odin Project</a>
        </p>
      </div>
    </div>
  );
};

export default App;
