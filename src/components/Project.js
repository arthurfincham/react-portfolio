import Divider from './graphics/Divider';
import GitHubLogo from './graphics/GitHubLogo.js';
import Pulse from 'react-reveal/Pulse';

export default function Project({ props, iconData, rowOrder }) {
  const svgFill = 'white';
  const svgClass = 'project-repo-link';
  return (
    <>
      <Divider fill={svgFill} />
      <div className={rowOrder}>
        <div className="item-text">
          <h1 className="project-h1">{props.title}</h1>
          <h5>{props.subTitle}</h5>
          {props.description.map((item) => {
            return (
              <p key={item} className="project-description">
                {item}
              </p>
            );
          })}
        </div>
        <div className="item-flex-col">
          {iconData}
          <Pulse delay={300}>
            <a href={props.repoURL} target="blank">
              <GitHubLogo fill={svgFill} svgClass={svgClass} />
            </a>
          </Pulse>
        </div>
      </div>
    </>
  );
}
