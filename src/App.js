import plant from './svgs/nounPlant.svg';
import AnchorLinks from './components/AnchorLinks';
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
      <div class="section-box" id="Education">
        <h1>Education</h1>
        <h2>Makers Academy</h2>
        <h5 class="">2021</h5>
        <p class="">16 week highly selective development bootcamp;</p>
        <ul>
          <li class="">OOP, TDD, MVC, DDD</li>
          <li class="">Agile/XP</li>
          <li class="">Ruby, Rails, JavaScript</li>
          <li class="">RSpec, Jasmine</li>
        </ul>
        <hr class="" />
        <h2>King's College London</h2>
        <h4>BA Philosophy</h4>
        <h5 class="">2018-2021</h5>
        <p class="">First Class Honours</p>
        <ul>
          <li class="">Thesis on The Consequences of Determinism for Moral Responsibility.</li>
          <li class="">Modules in Elementary Logic & Philosophical Logic</li>
          <li class="">Half of my degree was spent at home due to Covid, which threw me into the deep end of working remotely!</li>
        </ul>
        <hr class="" />
      </div>
    </div>
  );
}

export default App;
