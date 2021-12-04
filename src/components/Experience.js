import cookingIcon from '../svgs/cookingIcon.svg';
import BjjIcon from './graphics/BjjIcon.js';
import cameraIcon from '../svgs/cameraIcon.svg';
import Divider from './graphics/Divider';
export default function Experience() {
  const fill = 'white';
  const svgClass = 'edu-icons';
  return (
    <div className="section-box" id="Experience">
      <h1 className="sticky-thc">Experience</h1>
      <div className="item-container">
        <h2>Roger Gracie Academy</h2>
        <div className="flex-row">
          <div className="flex-col">
            <h4>Front Desk</h4>
            <h5>Nov 2019 - Aug 2021</h5>
          </div>
          <BjjIcon fill={fill} svgClass={svgClass} />
        </div>
        <p>
          For my last few years at university I worked at Roger Gracie Academy, a world famous Brazilian Jiu Jitsu academy in London. My
          responsibilities include carrying out duties at the front desk and building and maintaining the academy's website. As well as working there,
          I have been training for around 3 years.
        </p>
      </div>
      <div className="item-container">
        <Divider fill={'white'} />
        <h2>Torni's Kitchen</h2>
        <div className="flex-row">
          <div className="flex-col">
            <h4>Chef/Owner</h4>
            <h5 className="">Jul 2016 - April 2019</h5>
          </div>
          <img src={cookingIcon} className="edu-icons svg" alt="logo" />
        </div>
        <p className="">
          When I was 17 I set up a food stall for Notting Hill Carnival. Over the years my love for cooking turned into a small catering company that
          I ran, doing dinner parties and small events for people around London. I set up the business myself and have learnt the ropes of hospitality
          and management on the job. We catered for anything from 4 to 30 people.
        </p>
      </div>
      <Divider fill={'white'} />
      <div className="item-container">
        <h2>Hat Trick Productions</h2>
        <div className="flex-row">
          <div className="flex-col">
            <h4>Floor Runner</h4>
            <h5 className="">May 2016 - June 2016</h5>
          </div>
          <img src={cameraIcon} className="edu-icons svg" alt="logo" />
        </div>
        <p className="">
          Over 6 weeks I worked as a runner during the production of Episodes, Showtime & BBC. Logistics and maintaining the smooth flow of the shoot
          were my main responsibilities. Being a team player amongst a crew of around 40 was essential, whilst strong motivation and diplomacy were
          needed for the early starts and long hours each day.
        </p>
      </div>
      <Divider fill={'white'} />
    </div>
  );
}
