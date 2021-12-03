import plant from './svgs/nounPlant.svg';
import AnchorLinks from './components/AnchorLinks';
import Education from './components/Education';
import plusLine from './svgs/plusDivider.svg';
import IconLinks from './components/IconLinks';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Welcome-page">
        <IconLinks />
        <div className="Welcome-text">
          <h6>hello, i am</h6>
          <h1>arthur</h1>
        </div>
        <img src={plant} className="App-logo" alt="logo" />
        <AnchorLinks />
      </div>
      <img src={plusLine} className="Plus-line" alt="logo" />
      <Education />
    </div>
  );
}

export default App;
