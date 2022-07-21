import './RepoInfo.css';
import { UpperPartLeftSide } from '../UpperPartLeftSide/UpperPartLeftSide.jsx';
import { UpperPartRightSide } from '../UpperPartRightSide/UpperPartRightSide.jsx';
export const RepoInfo = () => {
  return (
    <div className='repo-info-container-outter'>
      <div className='repo-info-container-inner'>
        <div className='repo-info-container__upper-part'>
          <UpperPartLeftSide />
          <UpperPartRightSide />
        </div>
        <div className='repo-info-container__bottom-part'></div>
      </div>
    </div>
  );
};
