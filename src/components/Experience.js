import ChefIcon from './graphics/ChefIcon';
import BjjIcon from './graphics/BjjIcon.js';
import CameraIcon from './graphics/CameraIcon.js';
import Divider from './graphics/Divider';
import Job from './Job';
import { RGA, Torni, HatTrick } from '../data/ExperienceData';

export default function Experience() {
  const fill = 'white';
  const svgClass = 'job-icons decorative';
  return (
    <div className="section-box" id="Experience">
      <h1 className="sticky-thc">Experience</h1>
      <Job props={RGA} rowOrder={'flex-row'} iconData={<BjjIcon fill={fill} svgClass={svgClass} />} />
      <Job props={Torni} rowOrder={'flex-row-rev'} iconData={<ChefIcon fill={fill} svgClass={svgClass} />} />
      <Job props={HatTrick} rowOrder={'flex-row'} iconData={<CameraIcon fill={fill} svgClass={svgClass} />} />
    </div>
  );
}
