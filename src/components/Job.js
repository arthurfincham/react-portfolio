import Divider from './graphics/Divider';

export default function Job({ props, iconData, rowOrder }) {
  // const fill = 'white';
  // const svgClass = 'edu-icons decorative';
  return (
    <>
      <Divider fill={'white'} />
      <div className="item-container">
        <div className={rowOrder}>
          <div className="flex-col w-45ch">
            <h2>{props.company}</h2>
            <h4>{props.dates}</h4>
            <h5>{props.role}</h5>
            <p>{props.description}</p>
          </div>
          {iconData}
        </div>
      </div>
    </>
  );
}
