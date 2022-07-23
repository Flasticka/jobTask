import { UpperBodyPart } from '../UpperBodyPart/UpperBodyPart';
import './BodyPart.css';
export const BodyPart = () => {
  return (
    <div className='body-container-outer'>
      <div className='body-container-inner'>
        <UpperBodyPart />
      </div>
    </div>
  );
};
