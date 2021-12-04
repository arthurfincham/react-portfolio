import uniIcon from '../svgs/uniIcon.svg';
import plusLine from '../svgs/plusDivider.svg';
import techHead from '../svgs/techHead.svg';
export default function Education() {
  return (
    <div className="section-box" id="Education">
      <h1 className="sticky-thc">Education</h1>
      <div className="item-container">
        <h2>Makers Academy</h2>
        <div className="flex-row w-90">
          <div className="flex-col">
            <h4>Software Engineering</h4>
            <h3 className="">2021</h3>
          </div>
        </div>
        <p className="">16 week highly selective development bootcamp;</p>
        <ul>
          <li className="">OOP, TDD, MVC, DDD</li>
          <li className="">Agile/XP</li>
          <li className="">Ruby, Rails, JavaScript</li>
          <li className="">RSpec, Jasmine</li>
        </ul>
        <img src={techHead} className="svg" id="tech-head" alt="techhead" />
      </div>
      <img src={plusLine} className="svg Plus-line" alt="logo" />
      <div className="item-container">
        <h2>King's College London</h2>
        <div className="flex-row w-90">
          <div className="flex-col">
            <h4>BA Philosophy</h4>
            <h5 className="">2018-2021</h5>
            <p className="">First Class Honours</p>
          </div>
          <img src={uniIcon} id="uni-icon" className="svg White-line" alt="logo" />
        </div>
        <ul>
          <li className="">Thesis on The Consequences of Determinism for Moral Responsibility.</li>
          <li className="">Modules in Elementary Logic & Philosophical Logic</li>
          <li className="">Half of my degree was spent at home due to Covid, which threw me into the deep end of working remotely!</li>
        </ul>
      </div>
      <img src={plusLine} className="svg Plus-line" alt="logo" />
    </div>
  );
}
