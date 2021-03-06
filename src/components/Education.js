import UniIcon from './graphics/UniIcon';
import Divider from './graphics/Divider';
import TechHead from './graphics/TechHead';

export default function Education({ section2Ref }) {
  const svgClass = 'svg-stroke svg';
  return (
    <div className="section-box edu-wrapper" id="Education" ref={section2Ref}>
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
        <div className="third-description">
          <p>
            After teaching myself some basics of programming, I applied to Makers: a 16 week highly selective development bootcamp.
            <br />
            <br />
            We began with <span className="text-darker">TDD</span> in <span className="text-darker">Ruby</span> and{' '}
            <span className="text-darker">Rspec</span> before moving to <span className="text-darker">OOD</span>, databases and web development. By
            the end of the course, I was confident and competent in building a full-stack application.
            <br />
            <br />
            While I could have taught myself some of the programming skills, I felt that the experience of{' '}
            <span className="text-darker">Pair Programming</span> and collaborating with other was invaluable.
            <br />
            <br />
            Our cohort was hybrid, meaning that our second of three projects was done remotely. Using <span className="text-darker">Agile</span>{' '}
            methodologies through tools like Trello and <span className="text-darker">GitHub</span>, we made good progress and got a taste of working
            in the real world.
          </p>
        </div>
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
