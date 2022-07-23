import { UpperBodyPart } from '../UpperBodyPart/UpperBodyPart';
import { MainBodyPart } from '../MainBodyPart/MainBodyPart';
import './BodyPart.css';
export const BodyPart = () => {
  return (
    <div className='body-container-outer'>
      <div className='body-container-inner'>
        <UpperBodyPart />
        <MainBodyPart />
      </div>
    </div>
  );
};
