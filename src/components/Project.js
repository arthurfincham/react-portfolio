import Divider from './graphics/Divider';
import GitHubLogo from './graphics/GitHubLogo.js';

export default function Project({ props }) {
  const svgFill = 'white';
  const svgClass = 'project-repo-link svg-link';
  return (
    <>
      <div className="item-container">
        <div className="flex-row row-center">
          <h2>{props.title}</h2>
          <a href={props.repoURL}>
            <GitHubLogo fill={svgFill} svgClass={svgClass} />
          </a>
        </div>
        <h5>{props.subTitle}</h5>
        <p>{props.description}</p>
      </div>
      <Divider fill={svgFill} />
    </>
  );
}
