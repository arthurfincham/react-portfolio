import plusLine from '../svgs/plusDivider.svg';
import locIcon from '../svgs/locationIcon.svg';
import emailIcon from '../svgs/emailIcon.svg';
export default function Contact() {
  return (
    <div className="section-box" id="Contact">
      <div className="sticky-thc">
        <h1 className="">Contact</h1>
        <img src={plusLine} className="svg Plus-line" alt="logo" />
      </div>
      <div className="flex-col centered h-75">
        <img src={locIcon} className="loc-icon" alt="location" />
        <h3>London, United Kingdom</h3>
        <img src={emailIcon} className="svg email-icon" alt="email" />
        <h3>arthurfincham@me.com</h3>
      </div>
    </div>
  );
}
