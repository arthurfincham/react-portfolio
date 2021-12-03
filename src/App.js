import plant from './svgs/nounPlant.svg';
import gitLogo from './svgs/githubLogo.svg';
import linkLogo from './svgs/linkedinLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Welcome-page">
        <header className="App-header">
          <a className="logo-link" target="blank" href="https://github.com/arthurfincham">
            <img src={gitLogo} className="dev-link-icon" alt="logo" />
          </a>
          <a className="logo-link" target="blank" href="https://www.linkedin.com/in/arthurfincham/">
            <img src={linkLogo} className="dev-link-icon" alt="logo" />
          </a>
        </header>
        <div className="Welcome-text">
          <h6>hello, i am</h6>
          <h1>arthur</h1>
        </div>
        <img src={plant} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
