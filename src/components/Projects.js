import Project from './Project';
import { classNotes, acebook, instaclone, summary, chitter } from '../data/ProjectData';
export default function Projects() {
  return (
    <div className="section-box" id="Projects">
      <h1 className="sticky-thc">Projects</h1>
      <Project props={classNotes} />
      <Project props={instaclone} />
      <Project props={acebook} />
      <Project props={summary} />
      <Project props={chitter} />
    </div>
  );
}
