import GitHubIcon from './graphics/GitHubIcon.js';
import LinkedInLogo from './graphics/LinkedInLogo';

export default function IconLinks() {
  const fill = '#4057A1';
  const svgClass = 'dev-link-icon';
  return (
    <header className="App-header">
      <a className="logo-link" target="blank" href="https://github.com/arthurfincham">
        <GitHubIcon fill={fill} svgClass={svgClass} />
      </a>
      <a className="logo-link" target="blank" href="https://www.linkedin.com/in/arthurfincham/">
        <LinkedInLogo fill={fill} svgClass={svgClass} />
      </a>
    </header>
  );
}
