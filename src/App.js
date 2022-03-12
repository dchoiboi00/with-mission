import logo_blue from './img/logo_blue.png';
import banner from './img/banner.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='images'>
          <img src={logo_blue} className="logo" alt="logo" />
          <img src={banner} className="banner_hands" alt="logo" />
        </div>
        
        <p>
          Under Construction
        </p>
      </header>
    </div>
  );
}

export default App;
