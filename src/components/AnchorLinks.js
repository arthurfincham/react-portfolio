import HandLine from './graphics/HandLine.js';

export default function AnchorLinks() {
  const fill = 'white';
  return (
    <div className="anchor-box">
      <div className="anchor-container">
        <a href="#Education" className="anchor">
          Education
        </a>
        <HandLine fill={fill} />
      </div>
      <div className="anchor-container">
        <a href="#Experience" className="anchor">
          Experience
        </a>
        <HandLine fill={fill} />
      </div>
      <div className="anchor-container">
        <a href="#Projects" className="anchor">
          Projects
        </a>
        <HandLine fill={fill} />
      </div>
      <div className="anchor-container">
        <a href="#Contact" className="anchor">
          Contact
        </a>
        <HandLine fill={fill} />
      </div>
    </div>
  );
}
