import ChefIcon from './graphics/ChefIcon';
import CameraIcon from './graphics/CameraIcon.js';
import BjjIcon from './graphics/BjjIcon.js';
import Job from './Job';
import { RGA, Torni, HatTrick } from '../data/ExperienceData';

export default function Experience({ section3Ref }) {
  const svgClass = 'svg-stroke svg';
  return (
    <div className="section-box three_wrapper " id="Experience" ref={section3Ref}>
      <Job props={RGA} iconData={<BjjIcon svgClass={svgClass} />} />
      <Job props={Torni} iconData={<ChefIcon svgClass={svgClass} />} />
      <Job props={HatTrick} iconData={<CameraIcon svgClass={svgClass} />} />
    </div>
  );
}
