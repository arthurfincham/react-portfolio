import GitHubLogo from './graphics/GitHubLogo.js';
import LinkedInLogo from './graphics/LinkedInLogo';

export default function IconLinks() {
  const fill = 'white';
  const svgClass = 'dev-link-icon svg-link';
  return (
    <header className="App-header">
      <a className="logo-link" target="blank" href="https://github.com/arthurfincham">
        <GitHubLogo fill={fill} svgClass={svgClass} />
      </a>
      <a className="logo-link" target="blank" href="https://www.linkedin.com/in/arthurfincham/">
        <LinkedInLogo fill={fill} svgClass={svgClass} />
      </a>
    </header>
  );
}
