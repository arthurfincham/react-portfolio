import databaseIcon from '../svgs/databaseIcon.svg';
import javascriptIcon from '../svgs/javascriptIcon.svg';
import reactIcon from '../svgs/reactIcon.svg';
import rubyIcon from '../svgs/rubyIcon.svg';
import htmlIcon from '../svgs/htmlIcon.svg';
import agileIcon from '../svgs/agileIcon.svg';

export default function TechSpinner() {
  return (
    <div id="circle-orbit-container">
      <div id="inner-orbit">
        <div class="inner-orbit-cirlces"></div>
        <img src={agileIcon} className="animated-icon center-orbit-cirlces" alt="agile" />
        <img src={reactIcon} className="animated-icon inner-orbit-cirlces" alt="react" />
        <img src={rubyIcon} className="animated-icon inner-orbit-cirlces-2" alt="ruby" />
      </div>
      <div id="middle-orbit">
        <img src={databaseIcon} className="animated-icon middle-orbit-cirlces" alt="database" />
        <img src={htmlIcon} className="animated-icon middle-orbit-cirlces-2" alt="html" />
        <img src={javascriptIcon} className="animated-icon middle-orbit-cirlces-3" alt="javascript" />
      </div>
    </div>
  );
}
