import Divider from './graphics/Divider';

export default function Job({ props, iconData, rowOrder }) {
  return (
    <>
      <Divider fill={'white'} />
      <div className="third-item">
        <div className="third-text">
          <h2>{props.company}</h2>
          <h4>{props.dates}</h4>
          <h5>{props.role}</h5>
          <p>{props.description}</p>
        </div>
        <div className="third-svg">{iconData}</div>
      </div>
    </>
  );
}
