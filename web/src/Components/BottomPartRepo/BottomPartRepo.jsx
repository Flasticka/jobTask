import './BottomPartRepo.css';
import { NoBorderedButton } from '../NoBorderedButton/NoBorderedButton';
export const BottomPartRepo = ({ data }) => {
  return (
    <div className='bottom-part-repo-container'>
      {data.map((obj) => (
        <NoBorderedButton obj={obj} />
      ))}
    </div>
  );
};
