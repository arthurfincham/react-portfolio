import plant from './svgs/nounPlant.svg';
import AnchorLinks from './components/AnchorLinks';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
        <img src={plant} id="App-logo" alt="logo" />
        <AnchorLinks />
      </div>
      <Education className="education-section" />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
