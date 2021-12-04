import Project from './Project';
export default function Projects() {
  const classNotes = {
    title: 'ClassNotes',
    repoURL: 'https://github.com/',
    subTitle: 'Personal Project',
    description:
      'One of my hobbies is Brazilian Jiu Jitsu, a martial art which depends on the accumilation of knowledge and skill. A problem, however, is how to keep track of all this knowledge. Enter Classnotes: a simple, lightweight journal to accompany learning. The idea is that after class you can write down what you learned, tag it, and then build a repository of techniques and ideas that can be quickly accessed.',
  };
  const acebook = {
    title: 'acebook',
    repoURL: 'https://github.com/',
    subTitle: 'Group Engineering Project',
    description:
      'Bootcamp group enginering project. Our task was to build a clone of Facebook in teams while working remotely. We used agile methodologies such as sprints to build our features and a Kanban board on Trello to keep track of our progress.',
  };
  const instaclone = {
    title: 'Instaclone',
    repoURL: 'https://github.com/',
    subTitle: 'Weekend Challenge',
    description:
      "Instagram clone with likes, comments, tags and the various views found in the app.Tags are dynamically created from the caption of a post. A helper method extracts any strings beginning with '#', then adds them to the post's tag_list.",
  };
  const summary = {
    title: 'News Summary',
    repoURL: 'https://github.com/',
    subTitle: 'Weekend Challenge',
    description:
      'API based news summary project. Makers Solo Weekend Challenge: build a single web page app which summarises stories from the Guardian API.',
  };
  const chitter = {
    title: 'Chitter',
    repoURL: 'https://github.com/',
    subTitle: 'Weekend Challenge',
    description:
      'Twitter clone. Use Boostrap only for front-end (no custom CSS). Extract hashtags from the text in each Peep (no seperate tag input). Ability to click on tags and only list Peeps with that tag. Show the time of a Peep relatively (e.g. 5 mins ago). Use a RSS feed to fill a news column.',
  };

  return (
    <div className="section-box" id="Projects">
      <h1 className="sticky-thc">Projects</h1>
      <Project props={classNotes} />
      <Project props={instaclone} />
      <Project props={acebook} />
      <Project props={summary} />
      <Project props={chitter} />
    </div>
  );
}
