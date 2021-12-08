import Project from './Project';
import acebookSketch from './sketches/acebookSketch.svg';
import instacloneSketch from './sketches/instacloneSketch.svg';
import summarySketch from './sketches/summarySketch.svg';
import classnotesSketch2 from './sketches/classnotesSketch2.svg';
import chitterSketch from './sketches/chitterSketch.svg';

import { classNotes, acebook, instaclone, summary, chitter } from '../data/ProjectData';
export default function Projects() {
  return (
    <div className="section-box" id="Projects">
      <h1 className="sticky-thc">Projects</h1>
      <Project
        props={classNotes}
        rowOrder={'flex-row w-100'}
        iconData={<img src={classnotesSketch2} className="classnotes-preview" alt="classNotes" />}
      />
      <Project
        props={instaclone}
        rowOrder={'flex-row-rev w-100'}
        iconData={<img src={instacloneSketch} className="instaclone-preview" alt="instaclone" />}
      />
      <Project props={acebook} rowOrder={'flex-row w-100'} iconData={<img src={acebookSketch} className="acebook-preview" alt="acebook" />} />
      <Project
        props={summary}
        rowOrder={'flex-row-rev-summary w-100'}
        iconData={<img src={summarySketch} className="summary-preview" alt="summary" />}
      />
      <Project props={chitter} rowOrder={'flex-row w-100'} iconData={<img src={chitterSketch} className="chitter-preview" alt="chitter" />} />
    </div>
  );
}
