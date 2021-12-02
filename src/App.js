import plant from './svgs/nounPlant.svg';
import gitLogo from './svgs/githubLogo.svg';
import linkLogo from './svgs/linkedinLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gitLogo} className="giHu-icon" alt="logo" />
        <img src={linkLogo} className="liIn-icon" alt="logo" />
      </header>
      <div className="Arthur-plant">
        <div className="Welcome-text">
          <h6>hello, i am</h6>
          <h1>arthur</h1>
          <h6>a web developer based in London</h6>
        </div>
        <img src={plant} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
