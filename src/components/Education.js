import uniIcon from '../svgs/uniIcon.svg';
import plusLine from '../svgs/plusDivider.svg';
import techHead from '../svgs/techHead.svg';
export default function Education() {
  return (
    <div class="section-box" id="Education">
      <div className="sticky-thc">
        <h1 className="">Education</h1>
        <img src={plusLine} className="Plus-line" alt="logo" />
      </div>
      <div className="item-container">
        <h2>Makers Academy</h2>
        <div className="flex-row w-90">
          <div className="flex-col">
            <h4>Software Engineering</h4>
            <h3 class="">2021</h3>
          </div>
        </div>
        <p class="">16 week highly selective development bootcamp;</p>
        <ul>
          <li class="">OOP, TDD, MVC, DDD</li>
          <li class="">Agile/XP</li>
          <li class="">Ruby, Rails, JavaScript</li>
          <li class="">RSpec, Jasmine</li>
        </ul>
        <img src={techHead} id="tech-head" alt="techhead" />
      </div>
      <hr class="" />
      <div className="item-container">
        <h2>King's College London</h2>
        <div className="flex-row w-90">
          <div className="flex-col">
            <h4>BA Philosophy</h4>
            <h5 class="">2018-2021</h5>
            <p class="">First Class Honours</p>
          </div>
          <img src={uniIcon} id="uni-icon" className="White-line" alt="logo" />
        </div>
        <ul>
          <li class="">Thesis on The Consequences of Determinism for Moral Responsibility.</li>
          <li class="">Modules in Elementary Logic & Philosophical Logic</li>
          <li class="">Half of my degree was spent at home due to Covid, which threw me into the deep end of working remotely!</li>
        </ul>
      </div>
      <hr class="" />
    </div>
  );
}
