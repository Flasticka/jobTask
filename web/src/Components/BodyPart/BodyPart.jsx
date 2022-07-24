import { UpperBodyPart } from '../UpperBodyPart/UpperBodyPart';
import { MainBodyPart } from '../MainBodyPart/MainBodyPart';
import './BodyPart.css';
export const BodyPart = ({ setIssue, setPage }) => {
  return (
    <div className='body-container-outer'>
      <div className='body-container-inner'>
        <UpperBodyPart />
        <MainBodyPart setIssue={setIssue} setPage={setPage} />
      </div>
    </div>
  );
};
