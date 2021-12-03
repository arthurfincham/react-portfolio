import gitLogo from '../svgs/githubLogo.svg';
import linkLogo from '../svgs/linkedinLogo.svg';

export default function IconLinks() {
  return (
    <header className="App-header">
      <a className="logo-link" target="blank" href="https://github.com/arthurfincham">
        <img src={gitLogo} className="dev-link-icon" alt="logo" />
      </a>
      <a className="logo-link" target="blank" href="https://www.linkedin.com/in/arthurfincham/">
        <img src={linkLogo} className="dev-link-icon" alt="logo" />
      </a>
    </header>
  );
}
