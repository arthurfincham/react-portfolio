import Project from './Project';
import acebookSketch from './sketches/acebookSketch.svg';
import instacloneSketch from './sketches/instacloneSketch.svg';
import summarySketch from './sketches/summarySketch.svg';
import classnotesSketch2 from './sketches/classnotesSketch2.svg';
import chitterSketch from './sketches/chitterSketch.svg';
import bnbSketch from './sketches/bnbSketch.svg';

import { classNotes, acebook, instaclone, summary, chitter, makersbnb } from '../data/ProjectData';
export default function Projects() {
  return (
    <div className="section-box" id="Projects">
      <h1 className="sticky-thc">Projects</h1>
      <Project
        props={classNotes}
        rowOrder={'item-wrapper'}
        iconData={<img src={classnotesSketch2} className="classnotes-preview" alt="classNotes" />}
      />
      <Project
        props={instaclone}
        rowOrder={'item-wrapper-rev'}
        iconData={<img src={instacloneSketch} className="instaclone-preview" alt="instaclone" />}
      />
      <Project props={acebook} rowOrder={'item-wrapper'} iconData={<img src={acebookSketch} className="acebook-preview" alt="acebook" />} />
      <Project props={summary} rowOrder={'item-wrapper-rev'} iconData={<img src={summarySketch} className="summary-preview" alt="summary" />} />
      <Project props={chitter} rowOrder={'item-wrapper'} iconData={<img src={chitterSketch} className="chitter-preview" alt="chitter" />} />
      <Project props={makersbnb} rowOrder={'item-wrapper-rev'} iconData={<img src={bnbSketch} className="makersbnb-preview" alt="makersbnb" />} />
    </div>
  );
}
