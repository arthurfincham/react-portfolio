import UniIcon from './graphics/UniIcon';
import Divider from './graphics/Divider';
import TechHead from './graphics/TechHead';

export default function Education({ section2Ref }) {
  const svgClass = 'svg-stroke svg';
  return (
    <div className="section-box" id="Education" ref={section2Ref}>
      <Divider />
      <div className="item-wrapper">
        <div className="item-text">
          <h2>Makers Academy</h2>
          <h4>Software Engineering</h4>
          <h5>2021</h5>
          <p>16 week highly selective development bootcamp;</p>
          <ul>
            <li>OOP, TDD, MVC, DDD</li>
            <li>Agile/XP</li>
            <li>Ruby, Rails, JavaScript</li>
            <li>RSpec, Jasmine</li>
          </ul>
        </div>
        <div className="item-image">
          <TechHead svgClass={svgClass} />
        </div>
      </div>
      <Divider />
      <div className="item-wrapper-rev">
        <div className="item-text">
          <h2>King's College London</h2>
          <h4>BA Philosophy</h4>
          <h5>2018-2021</h5>
          <p>First Class Honours</p>
          <ul>
            <li>Thesis on The Consequences of Determinism for Moral Responsibility.</li>
            <li>Modules in Elementary Logic & Philosophical Logic</li>
            <li>Half of my degree was spent at home due to Covid, which threw me into the deep end of working remotely!</li>
          </ul>
        </div>
        <div className="item-image">
          <UniIcon svgClass={svgClass} />
        </div>
      </div>
    </div>
  );
}
