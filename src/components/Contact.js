import EmailIcon from './graphics/EmailIcon';
import IconLinks from './IconLinks';
import LocationIcon from './graphics/LocationIcon';
export default function Contact() {
  const fill = '#4057A1';
  return (
    <div className="section-box" id="Contact">
      <h1 className="sticky-thc">Contact</h1>
      <div className="flex-col space-evenly h-75">
        <div className="flex-col centered">
          <LocationIcon fill={fill} svgClass={'loc-icon'} />
          <h3>London, United Kingdom</h3>
        </div>
        <div className="flex-col centered">
          <EmailIcon fill={fill} svgClass={'email-icon'} />
          <h3>arthurfincham@me.com</h3>
        </div>
        <IconLinks />
      </div>
    </div>
  );
}
