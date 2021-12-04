import Divider from './graphics/Divider';
import GitHubLogo from './graphics/GitHubLogo.js';

export default function Project({ props, iconData, rowOrder }) {
  const svgFill = 'white';
  const svgClass = 'project-repo-link svg-link';
  return (
    <>
      <Divider fill={svgFill} />
      <div className="item-container mt-3">
        <div className="flex-row w-100">
          <div className={rowOrder}>
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
          </div>
          <p className="project-description">{props.description}</p>
        </div>
      </div>
    </>
  );
}
