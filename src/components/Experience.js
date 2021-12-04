import ChefIcon from './graphics/ChefIcon';
import BjjIcon from './graphics/BjjIcon.js';
import CameraIcon from './graphics/CameraIcon.js';
import Divider from './graphics/Divider';
import Job from './Job';
import { RGA, Torni, HatTrick } from '../data/ExperienceData';

export default function Experience() {
  const fill = 'white';
  const svgClass = 'edu-icons decorative';
  return (
    <div className="section-box" id="Experience">
      <h1 className="sticky-thc">Experience</h1>
      <Job props={RGA} />
      <Job props={Torni} />
      <Job props={HatTrick} />
    </div>
  );
}

{
  /* <BjjIcon fill={fill} svgClass={svgClass} />
<ChefIcon fill={fill} svgClass={svgClass} />
<CameraIcon fill={fill} svgClass={svgClass} /> */
}
