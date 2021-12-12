import Divider from './graphics/Divider';

export default function Job({ props, iconData, rowOrder }) {
  return (
    <>
      <Divider fill={'white'} />
      <div className="three_item">
        <div>
          <h2>{props.company}</h2>
          <h4>{props.dates}</h4>
          <h5>{props.role}</h5>
          <p>{props.description}</p>
        </div>
        <div>{iconData}</div>
      </div>
    </>
  );
}
