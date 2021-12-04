import UniIcon from './graphics/UniIcon';
import Divider from './graphics/Divider';
import TechHead from './graphics/TechHead';
export default function Education() {
  const fill = 'white';
  return (
    <div className="section-box" id="Education">
      <h1 className="sticky-thc">Education</h1>
      <Divider fill={fill} />
      <div className="item-container">
        <div className="flex-row ">
          <div>
            <h2>Makers Academy</h2>
            <div className="flex-row w-90">
              <div className="flex-col">
                <h4>Software Engineering</h4>
                <h3>2021</h3>
              </div>
            </div>
            <p>16 week highly selective development bootcamp;</p>
            <ul>
              <li>OOP, TDD, MVC, DDD</li>
              <li>Agile/XP</li>
              <li>Ruby, Rails, JavaScript</li>
              <li>RSpec, Jasmine</li>
            </ul>
          </div>
          <TechHead fill={fill} svgClass={'decorative'} svgId="tech-head" />
        </div>
      </div>
      <Divider fill={fill} />
      <div className="item-container">
        <div className="flex-row-rev ">
          <div className="w-45ch">
            <h2>King's College London</h2>
            <div className="flex-col-right">
              <h4>BA Philosophy</h4>
              <h5>2018-2021</h5>
              <p>First Class Honours</p>
            </div>
            <ul>
              <li>Thesis on The Consequences of Determinism for Moral Responsibility.</li>
              <li>Modules in Elementary Logic & Philosophical Logic</li>
              <li>Half of my degree was spent at home due to Covid, which threw me into the deep end of working remotely!</li>
            </ul>
          </div>
          <UniIcon fill={fill} svgClass={'decorative'} svgId="uni-icon" />
        </div>
      </div>
    </div>
  );
}
