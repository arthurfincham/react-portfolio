import headIcon from '../svgs/headIcon.svg';
import uniIcon from '../svgs/uniIcon.svg';

export default function Education() {
  return (
    <div class="section-box" id="Education">
      <h1 className="sticky-thc">Education</h1>
      <div className="flex-row">
        <div className="flex-col">
          <h2>Makers Academy</h2>
          <h3 class="">2021</h3>
        </div>
        <img src={headIcon} className="White-line" alt="logo" />
      </div>
      <p class="">16 week highly selective development bootcamp;</p>
      <ul>
        <li class="">OOP, TDD, MVC, DDD</li>
        <li class="">Agile/XP</li>
        <li class="">Ruby, Rails, JavaScript</li>
        <li class="">RSpec, Jasmine</li>
      </ul>
      <hr class="" />
      <div className="flex-row">
        <div className="flex-col">
          <h2>King's College London</h2>
          <h4>BA Philosophy</h4>
          <h5 class="">2018-2021</h5>
          <p class="">First Class Honours</p>
        </div>
        <img src={uniIcon} className="White-line" alt="logo" />
      </div>
      <ul>
        <li class="">Thesis on The Consequences of Determinism for Moral Responsibility.</li>
        <li class="">Modules in Elementary Logic & Philosophical Logic</li>
        <li class="">Half of my degree was spent at home due to Covid, which threw me into the deep end of working remotely!</li>
      </ul>
      <hr class="" />
    </div>
  );
}
