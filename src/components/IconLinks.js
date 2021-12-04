import GitHubLogo from './graphics/GitHubLogo.js';
import linkLogo from '../svgs/linkedinLogo.svg';

export default function IconLinks() {
  return (
    <header className="App-header">
      <a className="logo-link" target="blank" href="https://github.com/arthurfincham">
        <GitHubLogo fill={'white'} svgClass={'dev-link-icon'} />
      </a>
      <a className="logo-link" target="blank" href="https://www.linkedin.com/in/arthurfincham/">
        <img src={linkLogo} className="svg dev-link-icon" alt="logo" />
      </a>
    </header>
  );
}
