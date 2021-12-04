import Divider from './graphics/Divider';

export default function Job({ props }) {
  // const fill = 'white';
  // const svgClass = 'edu-icons decorative';
  return (
    <>
      <div className="item-container">
        <h2>{props.company}</h2>
        <div className="flex-row">
          <div className="flex-col">
            <h4>{props.dates}</h4>
            <h5>{props.role}</h5>
          </div>
          {/* <{...props.icon} fill={fill} svgClass={svgClass} /> */}
        </div>
        <p>{props.description}</p>
      </div>
      <Divider fill={'white'} />
    </>
  );
}
