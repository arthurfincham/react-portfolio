import locIcon from '../svgs/locationIcon.svg';
import emailIcon from '../svgs/emailIcon.svg';
export default function Contact() {
  return (
    <div className="section-box" id="Contact">
      <h1 className="sticky-thc">Contact</h1>
      <div className="flex-col centered h-75">
        <img src={locIcon} className="loc-icon" alt="location" />
        <h3>London, United Kingdom</h3>
        <img src={emailIcon} className="svg email-icon" alt="email" />
        <h3>arthurfincham@me.com</h3>
      </div>
    </div>
  );
}
