import plusLine from '../svgs/plusDivider.svg';
import locIcon from '../svgs/locationIcon.svg';
import emailIcon from '../svgs/emailIcon.svg';
export default function Contact() {
  return (
    <div className="section-box" id="Contact">
      <div className="sticky-thc">
        <h1 className="">Contact</h1>
        <img src={plusLine} className="Plus-line" alt="logo" />
      </div>
      <div className="flex-col centered h-75">
        <img src={locIcon} className="loc-icon" alt="location" />
        <h2>London, United Kingdom</h2>
        <img src={emailIcon} className="email-icon" alt="email" />
        <h2>arthurfincham@me.com</h2>
      </div>
    </div>
  );
}
