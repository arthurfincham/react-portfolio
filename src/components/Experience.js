import cookingIcon from '../svgs/cookingIcon.svg';
import bjjIcon from '../svgs/bjjIcon.svg';
import cameraIcon from '../svgs/cameraIcon.svg';
import plusLine from '../svgs/plusDivider.svg';
export default function Experience() {
  return (
    <div class="section-box" id="Experience">
      <div className="sticky-thc">
        <h1 className="">Experience</h1>
        <img src={plusLine} className="Plus-line" alt="logo" />
      </div>
      <div className="item-container">
        <h1>Roger Gracie Academy</h1>
        <div className="flex-row">
          <div className="flex-col">
            <h4>Front Desk</h4>
            <h5>Nov 2019 - Aug 2021</h5>
          </div>
          <img src={bjjIcon} className="edu-icons" alt="logo" />
        </div>
        <p>
          For my last few years at university I worked at Roger Gracie Academy, a world famous Brazilian Jiu Jitsu academy in London. My
          responsibilities include carrying out duties at the front desk and building and maintaining the academy's website. As well as working there,
          I have been training for around 3 years.
        </p>
      </div>
      <div className="item-container">
        <hr class="" />
        <h1>Torni's Kitchen</h1>
        <div className="flex-row">
          <div className="flex-col">
            <h4>Chef/Owner</h4>
            <h5 class="">Jul 2016 - April 2019</h5>
          </div>
          <img src={cookingIcon} className="edu-icons" alt="logo" />
        </div>
        <p class="">
          When I was 17 I set up a food stall for Notting Hill Carnival. Over the years my love for cooking turned into a small catering company that
          I ran, doing dinner parties and small events for people around London. I set up the business myself and have learnt the ropes of hospitality
          and management on the job. We catered for anything from 4 to 30 people.
        </p>
      </div>
      <hr class="" />
      <div className="item-container">
        <h1>Hat Trick Productions</h1>
        <div className="flex-row">
          <div className="flex-col">
            <h4>Floor Runner</h4>
            <h5 class="">May 2016 - June 2016</h5>
          </div>
          <img src={cameraIcon} className="edu-icons" alt="logo" />
        </div>
        <p class="">
          Over 6 weeks I worked as a runner during the production of Episodes, Showtime & BBC. Logistics and maintaining the smooth flow of the shoot
          were my main responsibilities. Being a team player amongst a crew of around 40 was essential, whilst strong motivation and diplomacy were
          needed for the early starts and long hours each day.
        </p>
      </div>
      <hr class="" />
    </div>
  );
}