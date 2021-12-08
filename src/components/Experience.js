import ChefIcon from './graphics/ChefIcon';
import CameraIcon from './graphics/CameraIcon.js';
import BjjIcon from './graphics/BjjIcon.js';
import Job from './Job';
import { RGA, Torni, HatTrick } from '../data/ExperienceData';

export default function Experience() {
  const svgClass = 'svg-stroke svg';
  return (
    <div className="section-box" id="Experience">
      <h1 className="sticky-thc">Experience</h1>
      <Job props={RGA} rowOrder={'item-wrapper'} iconData={<BjjIcon svgClass={svgClass} />} />
      <Job props={Torni} rowOrder={'item-wrapper-rev'} iconData={<ChefIcon svgClass={'svg-stroke'} />} />
      <Job props={HatTrick} rowOrder={'item-wrapper'} iconData={<CameraIcon svgClass={'svg-fill'} />} />
    </div>
  );
}
