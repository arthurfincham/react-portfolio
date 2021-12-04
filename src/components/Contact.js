import EmailIcon from './graphics/EmailIcon';
import LocationIcon from './graphics/LocationIcon';
export default function Contact() {
  const fill = 'white';
  return (
    <div className="section-box" id="Contact">
      <h1 className="sticky-thc">Contact</h1>
      <div className="flex-col centered h-75">
        <LocationIcon fill={fill} svgClass={'loc-icon'} />
        <h3>London, United Kingdom</h3>
        <EmailIcon fill={fill} svgClass={'email-icon'} />
        <h3>arthurfincham@me.com</h3>
      </div>
    </div>
  );
}
