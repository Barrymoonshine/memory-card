import './App.css';
import Main from './components/Main';

const App = () => {
  return (
    <div className='page-container'>
      <main>
        <Main />
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
