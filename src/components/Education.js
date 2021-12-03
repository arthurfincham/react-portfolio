import uniIcon from '../svgs/uniIcon.svg';
import plusLine from '../svgs/plusDivider.svg';
import techHead from '../svgs/techHead.svg';
export default function Education() {
  return (
    <div className="section-box" id="Education">
      <div className="sticky-thc">
        <h1 className="">Education</h1>
        <img src={plusLine} className="Plus-line" alt="logo" />
      </div>
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
        <img src={techHead} id="tech-head" alt="techhead" />
      </div>
      <hr className="" />
      <div className="item-container">
        <h2>King's College London</h2>
        <div className="flex-row w-90">
          <div className="flex-col">
            <h4>BA Philosophy</h4>
            <h5 className="">2018-2021</h5>
            <p className="">First Class Honours</p>
          </div>
          <img src={uniIcon} id="uni-icon" className="White-line" alt="logo" />
        </div>
        <ul>
          <li className="">Thesis on The Consequences of Determinism for Moral Responsibility.</li>
          <li className="">Modules in Elementary Logic & Philosophical Logic</li>
          <li className="">Half of my degree was spent at home due to Covid, which threw me into the deep end of working remotely!</li>
        </ul>
      </div>
      <hr className="" />
    </div>
  );
}
