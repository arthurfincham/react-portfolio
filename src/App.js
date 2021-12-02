import plant from './svgs/nounPlant.svg';
import gitLogo from './svgs/githubLogo.svg';
import linkLogo from './svgs/linkedinLogo.svg';
import gitText from './svgs/githubText.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="logo-link" target="blank" href="https://github.com/arthurfincham">
          <img src={gitLogo} className="giHu-icon" alt="logo" />
        </a>
        <a className="logo-link" target="blank" href="https://www.linkedin.com/in/arthurfincham/">
          <img src={linkLogo} className="liIn-icon" alt="logo" />
        </a>
        <img src={gitText} class="logo-link" alt="text" />
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
