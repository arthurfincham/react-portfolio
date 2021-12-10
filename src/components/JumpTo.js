import { Fab, Action } from 'react-tiny-fab';
import JumpRope from './graphics/JumpRope';
export default function JumpTo() {
  return (
    <Fab className="jump-to-button" alwaysShowTitle={true} icon={<JumpRope />} mainButtonStyles={{ padding: '0px', backgroundColor: '#e9ebf3' }}>
      <a href="#Contact" className="anchor">
        Contact
      </a>
      <a href="#Projects" className="anchor">
        Projects
      </a>

      <a href="#Experience" className="anchor">
        Experience
      </a>
      <a href="#Education" className="anchor">
        Education
      </a>
    </Fab>
  );
}
