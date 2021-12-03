import plusLine from '../svgs/plusDivider.svg';
import ghText from '../svgs/githubText.svg';

export default function Projects() {
  return (
    <div className="section-box" id="Projects">
      <div className="sticky-thc">
        <h1 className="">Projects</h1>
        <img src={plusLine} className="Plus-line" alt="logo" />
      </div>
      <div className="item-container">
        <h2>ClassNotes</h2>
        <div className="flex-row">
          <h5>Personal Project</h5>
          <a href="">
            <img src={ghText} className="edu-icons" alt="" />
          </a>
        </div>
        <p>
          One of my hobbies is Brazilian Jiu Jitsu, a martial art which depends on the accumilation of knowledge and skill. A problem, however, is how
          to keep track of all this knowledge. Enter Classnotes: a simple, lightweight journal to accompany learning. The idea is that after class you
          can write down what you learned, tag it, and then build a repository of techniques and ideas that can be quickly accessed.
        </p>
      </div>
      <hr className="" />
      <div className="item-container">
        <h2>acebook</h2>
        <div className="flex-row">
          <h5>Group engineering project</h5>
          <a href="">
            <img src={ghText} className="edu-icons" alt="" />
          </a>
        </div>
        <p>
          Bootcamp group enginering project. Our task was to build a clone of Facebook in teams while working remotely. We used agile methodologies
          such as sprints to build our features and a Kanban board on Trello to keep track of our progress.
        </p>
      </div>
      <hr className="" />
      <div className="item-container">
        <h2>Instaclone</h2>
        <div className="flex-row">
          <h5>Weekend Challenge</h5>
          <a href="">
            <img src={ghText} className="edu-icons" alt="" />
          </a>
        </div>
        <p>
          Instagram clone with likes, comments, tags and the various views found in the app.Tags are dynamically created from the caption of a post. A
          helper method extracts any strings beginning with '#', then adds them to the post's tag_list.
        </p>
      </div>
      <hr className="" />
      <div className="item-container">
        <h2>News Summary</h2>
        <div className="flex-row">
          <h5>Weekend Challenge</h5>
          <a href="">
            <img src={ghText} className="edu-icons" alt="" />
          </a>
        </div>
        <p>
          API based news summary project. Makers Solo Weekend Challenge: build a single web page app which summarises stories from the Guardian API.
        </p>
      </div>
      <hr className="" />
      <div className="item-container">
        <h2>Chitter</h2>
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
