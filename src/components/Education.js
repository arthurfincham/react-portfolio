import UniIcon from './graphics/UniIcon';
import Divider from './graphics/Divider';
import TechHead from './graphics/TechHead';

export default function Education({ section2Ref }) {
  const svgClass = 'svg-stroke svg';
  return (
    <div className="section-box third-wrapper" id="Education" ref={section2Ref}>
      <Divider />
      <div className="third-item">
        <div className="third-text">
          <h2>King's College London</h2>
          <h4>BA Philosophy</h4>
          <h5>2018-2021</h5>
          <p>First Class Honours</p>
          <p>The Consequences of Determinism for Moral Responsibility.</p>
          <p>Modules in Elementary Logic & Philosophical Logic</p>
        </div>
        <div className="third-svg">
          <UniIcon svgClass={svgClass} />
        </div>
      </div>
      <Divider />
      <div className="third-item">
        <div className="third-text">
          <h1>Makers Academy</h1>
          <h3>Software Engineering</h3>
          <h3>2021</h3>
          <ul>
            <li>Javascript (React, Express, Jest)</li>
            <li>Ruby (Sinatra, Rails, Rspec)</li>
            <li>HTML & CSS (I love CSS)</li>
          </ul>
        </div>
        <div className="third-svg">
          <TechHead svgClass={svgClass} />
        </div>
        
      </div>
    </div>
  );
}
