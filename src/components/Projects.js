import Project from './Project';
import acebookSketch from './sketches/acebookSketch.svg';
import instacloneSketch from './sketches/instacloneSketch.svg';
import summarySketch from './sketches/summarySketch.svg';
import classnotesSketch2 from './sketches/classnotesSketch2.svg';
import chitterSketch from './sketches/chitterSketch.svg';
import bnbSketch from './sketches/bnbSketch.svg';
import Divider from './graphics/Divider';
import GitHubLogo from './graphics/GitHubLogo.js';
import Pulse from 'react-reveal/Pulse';

import { classNotes, acebook, instaclone, summary, chitter, makersbnb } from '../data/ProjectData';
export default function Projects({ section4Ref }) {
  const svgFill = 'white';
  const svgClass = 'project-repo-link';
  return (
    <div ref={section4Ref} className="section-box" id="Projects">
      <Project
        props={classNotes}
        rowOrder={'item-wrapper'}
        iconData={<img src={classnotesSketch2} className="classnotes-preview" alt="classNotes" />}
      />
      <>
        <Divider fill={svgFill} />
        <div className="insta-wrapper">
          <div className="item-text">
            <h1 className="project-h1">{instaclone.title}</h1>
            <h5>{instaclone.subTitle}</h5>
            {instaclone.description.map((item) => {
              return <p key={item}>{item}</p>;
            })}
          </div>
          <div className="insta-col">
            <img src={instacloneSketch} className="instaclone-preview" alt="instaclone" />
            <Pulse delay={300}>
              <a href={instaclone.repoURL} target="blank">
                <GitHubLogo fill={svgFill} svgClass={svgClass} />
              </a>
            </Pulse>
          </div>
        </div>
      </>
      <Project props={acebook} rowOrder={'item-wrapper'} iconData={<img src={acebookSketch} className="acebook-preview" alt="acebook" />} />
      <Project props={summary} rowOrder={'item-wrapper-rev'} iconData={<img src={summarySketch} className="summary-preview" alt="summary" />} />
      <Project props={chitter} rowOrder={'item-wrapper'} iconData={<img src={chitterSketch} className="chitter-preview" alt="chitter" />} />
      <Project props={makersbnb} rowOrder={'item-wrapper-rev'} iconData={<img src={bnbSketch} className="makersbnb-preview" alt="makersbnb" />} />
      <Divider fill={svgFill} />
    </div>
  );
}
