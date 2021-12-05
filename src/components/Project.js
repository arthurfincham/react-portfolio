import Divider from './graphics/Divider';
import GitHubLogo from './graphics/GitHubLogo.js';
import Fade from 'react-reveal/Fade';

export default function Project({ props, iconData, rowOrder }) {
  const svgFill = 'white';
  const svgClass = 'project-repo-link svg-link';
  return (
    <>
      <Divider fill={svgFill} />
      <div className="item-container mt-3">
        <div className="flex-row w-100">
          <div className={rowOrder}>
            <Fade cascade>
              <div className="project-title-link">
                <a href={props.repoURL}>
                  <GitHubLogo fill={svgFill} svgClass={svgClass} />
                </a>
                <div className="project-titles">
                  <h1>{props.title}</h1>
                  <h5>{props.subTitle}</h5>
                </div>
              </div>
              {iconData}
            </Fade>
          </div>
          <div className="project-description">
            {props.description.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
