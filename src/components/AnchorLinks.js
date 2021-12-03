import whiteLine from '../svgs/whiteLine.svg';

export default function AnchorLinks() {
  return (
    <div className="anchor-box">
      <div className="anchor-container">
        <a href="#Education" className="anchor">
          Education
        </a>
        <img src={whiteLine} className="svg White-line" alt="logo" />
      </div>
      <div className="anchor-container">
        <a href="#Experience" className="anchor">
          Experience
        </a>
        <img src={whiteLine} className="svg White-line" alt="logo" />
      </div>
      <div className="anchor-container">
        <a href="#Projects" className="anchor">
          Projects
        </a>
        <img src={whiteLine} className="svg White-line" alt="logo" />
      </div>
      <div className="anchor-container">
        <a href="#Contact" className="anchor">
          Contact
        </a>
        <img src={whiteLine} className="svg White-line" alt="logo" />
      </div>
    </div>
  );
}
