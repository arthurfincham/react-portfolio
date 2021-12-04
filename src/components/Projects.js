import Divider from './graphics/Divider';
import GitHubLogo from './graphics/GitHubLogo.js';

export default function Projects() {
  const svgFill = 'white';
  const svgClass = 'project-repo-link';
  return (
    <div className="section-box" id="Projects">
      <h1 className="sticky-thc">Projects</h1>
      <div className="item-container">
        <div className="flex-row row-center">
          <h2>ClassNotes</h2>
          <a href="a">
            <GitHubLogo fill={svgFill} svgClass={svgClass} />
          </a>
        </div>
        <h5>Personal Project</h5>
        <p>
          One of my hobbies is Brazilian Jiu Jitsu, a martial art which depends on the accumilation of knowledge and skill. A problem, however, is how
          to keep track of all this knowledge. Enter Classnotes: a simple, lightweight journal to accompany learning. The idea is that after class you
          can write down what you learned, tag it, and then build a repository of techniques and ideas that can be quickly accessed.
        </p>
      </div>
      <Divider fill={svgFill} />
      <div className="item-container">
        <div className="flex-row row-center">
          <h2>acebook</h2>
          <a href="b">
            <GitHubLogo fill={svgFill} svgClass={svgClass} />
          </a>
        </div>
        <h5>Group engineering project</h5>
        <p>
          Bootcamp group enginering project. Our task was to build a clone of Facebook in teams while working remotely. We used agile methodologies
          such as sprints to build our features and a Kanban board on Trello to keep track of our progress.
        </p>
      </div>
      <Divider fill={svgFill} />
      <div className="item-container">
        <div className="flex-row row-center">
          <h2>Instaclone</h2>
          <a href="a">
            <GitHubLogo fill={svgFill} svgClass={svgClass} />
          </a>
        </div>
        <h5>Weekend Challenge</h5>
        <p>
          Instagram clone with likes, comments, tags and the various views found in the app.Tags are dynamically created from the caption of a post. A
          helper method extracts any strings beginning with '#', then adds them to the post's tag_list.
        </p>
      </div>
      <Divider fill={svgFill} />
      <div className="item-container">
        <div className="flex-row row-center">
          <h2>News Summary</h2>
          <a href="c">
            <GitHubLogo fill={svgFill} svgClass={svgClass} />
          </a>
        </div>
        <h5>Weekend Challenge</h5>
        <p>
          API based news summary project. Makers Solo Weekend Challenge: build a single web page app which summarises stories from the Guardian API.
        </p>
      </div>
      <Divider fill={svgFill} />
      <div className="item-container">
        <div className="flex-row row-center">
          <h2>Instaclone</h2>
          <a href="c">
            <GitHubLogo fill={svgFill} svgClass={svgClass} />
          </a>
        </div>
        <h5>Weekend Challenge</h5>
        <p>
          Instagram clone. Use Boostrap only for front-end (no custom CSS). Extract hashtags from the text in each Peep (no seperate tag input).
          Ability to click on tags and only list Peeps with that tag. Show the time of a Peep relatively (e.g. 5 mins ago). Use a RSS feed to fill a
          news column.
        </p>
      </div>
    </div>
  );
}
