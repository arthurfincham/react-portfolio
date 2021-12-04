import Project from './Project';
import AcebookPreview from './graphics/AcebookPreview.svg';
import InstaclonePreview from './graphics/InstaclonePreview.svg';
import SummaryPreview from './graphics/SummaryPreview.svg';
import ClassnotesPreview from './graphics/ClassnotesPreview.svg';
import ChitterPreview from './graphics/ChitterPreview.svg';

import { classNotes, acebook, instaclone, summary, chitter } from '../data/ProjectData';
export default function Projects() {
  return (
    <div className="section-box" id="Projects">
      <h1 className="sticky-thc">Projects</h1>
      <Project props={classNotes} rowOrder={'flex-row w-100'} iconData={<img src={ClassnotesPreview} className="classnotes-preview" />} />
      <Project props={instaclone} rowOrder={'flex-row-rev w-100'} iconData={<img src={InstaclonePreview} className="instaclone-preview" />} />
      <Project props={acebook} rowOrder={'flex-row w-100'} iconData={<img src={AcebookPreview} className="acebook-preview" />} />
      <Project props={summary} rowOrder={'flex-row-rev w-100'} iconData={<img src={SummaryPreview} className="summary-preview" />} />
      <Project props={chitter} rowOrder={'flex-row w-100'} iconData={<img src={ChitterPreview} className="chitter-preview" />} />
    </div>
  );
}
