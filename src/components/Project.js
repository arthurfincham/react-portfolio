import Divider from './graphics/Divider';
import GitHubLogo from './graphics/GitHubLogo.js';

export default function Project({ props, iconData, rowOrder }) {
  const svgFill = 'white';
  const svgClass = 'project-repo-link svg-link';
  return (
    <>
      <Divider fill={svgFill} />
      <div className="item-container">
        <div className={rowOrder}>
          <div className="flex-col w-45ch">
            <a href={props.repoURL}>
              <GitHubLogo fill={svgFill} svgClass={svgClass} />
            </a>
            <h2>{props.title}</h2>
            <h5>{props.subTitle}</h5>
            <p>{props.description}</p>
          </div>
          {iconData}
        </div>
      </div>
    </>
  );
}
