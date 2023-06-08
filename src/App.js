import './App.css';
import Main from './components/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='page-container'>
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
};

export default App;
