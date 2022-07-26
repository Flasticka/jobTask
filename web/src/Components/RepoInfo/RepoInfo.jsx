import './RepoInfo.css';
import { openIssuesData } from '../../assets/dummyData.js';
import { closedIssuesData } from '../../assets/dummyData.js';
import { UpperPartRepoLeftSide } from '../UpperPartRepoLeftSide/UpperPartRepoLeftSide.jsx';
import { UpperPartRepoRightSide } from '../UpperPartRepoRightSide/UpperPartRepoRightSide.jsx';
import { BottomPartRepo } from '../BottomPartRepo/BottomPartRepo';
import { useState } from 'react';

export const RepoInfo = () => {
  const [numberOfIssues] = useState(
    openIssuesData.length + closedIssuesData.length
  );
  var data = [
    { name: 'Code', number: null, selected: false, callback: () => {} },
    {
      name: 'Issuess',
      number: numberOfIssues,
      selected: true,
      callback: () => {},
    },
    {
      name: 'Pull requests',
      number: '81',
      selected: false,
      callback: () => {},
    },
    { name: 'Discussions', number: null, selected: false, callback: () => {} },
    { name: 'Actions', number: null, selected: false, callback: () => {} },
    { name: 'Projects', number: '6', selected: false, callback: () => {} },
    { name: 'Security', number: null, selected: false, callback: () => {} },
    { name: 'Insights', number: null, selected: false, callback: () => {} },
  ];
  return (
    <div className='repo-info-container-outter'>
      <div className='repo-info-container-inner'>
        <div className='repo-info-container__upper-part'>
          <UpperPartRepoLeftSide />
          <UpperPartRepoRightSide />
        </div>
        <div className='repo-info-container__bottom-part'>
          <BottomPartRepo data={data} />
        </div>
      </div>
    </div>
  );
};
