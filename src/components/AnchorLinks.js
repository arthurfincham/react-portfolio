import HandLine from './graphics/HandLine.js';

export default function AnchorLinks() {
  const fill = 'white';
  return (
    <div className="anchor-box">
      <div className="anchor-container">
        <a href="#Education" className="anchor">
          Education
        </a>
      </div>
      <div className="anchor-container">
        <a href="#Experience" className="anchor">
          Experience
        </a>
      </div>
      <div className="anchor-container">
        <a href="#Projects" className="anchor">
          Projects
        </a>
      </div>
      <div className="anchor-container">
        <a href="#Contact" className="anchor">
          Contact
        </a>
      </div>
    </div>
  );
}
