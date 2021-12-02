import plant from './svgs/nounPlant.svg';
import gitLogo from './svgs/githubLogo.svg';
import linkLogo from './svgs/linkedinLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>arthur</h1>
        <img src={plant} className="App-logo" alt="logo" />
        <img src={gitLogo} className="Dev-icon" alt="logo" />
        <img src={linkLogo} className="Dev-icon" alt="logo" />
      </header>
    </div>
  );
}

export default App;
