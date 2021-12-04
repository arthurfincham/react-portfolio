import Project from './Project';
import acebookPreview from './graphics/acebookPreview.svg';
import instaclonePreview from './graphics/instaclonePreview.svg';

import { classNotes, acebook, instaclone, summary, chitter } from '../data/ProjectData';
export default function Projects() {
  return (
    <div className="section-box" id="Projects">
      <h1 className="sticky-thc">Projects</h1>
      <Project props={classNotes} rowOrder={'flex-row'} iconData={'asd'} />
      <Project props={instaclone} rowOrder={'flex-row-rev'} iconData={<img src={instaclonePreview} className="instaclone-preview" />} />
      <Project props={acebook} rowOrder={'flex-row'} iconData={<img src={acebookPreview} className="acebook-preview" />} />
      <Project props={summary} rowOrder={'flex-row-rev'} iconData={'asd'} />
      <Project props={chitter} rowOrder={'flex-row'} iconData={'asd'} />
    </div>
  );
}
