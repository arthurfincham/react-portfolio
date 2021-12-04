import GitHubLogo from './graphics/GitHubLogo.js';
import LinkedInLogo from './graphics/LinkedInLogo';

export default function IconLinks() {
  return (
    <header className="App-header">
      <a className="logo-link" target="blank" href="https://github.com/arthurfincham">
        <GitHubLogo fill={'white'} svgClass={'dev-link-icon'} />
      </a>
      <a className="logo-link" target="blank" href="https://www.linkedin.com/in/arthurfincham/">
        <LinkedInLogo fill={'white'} svgClass={'dev-link-icon'} />
      </a>
    </header>
  );
}
