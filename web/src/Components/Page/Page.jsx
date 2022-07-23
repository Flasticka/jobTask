import { openIssuesData } from '../../assets/dummyData.js';
import { closedIssuesData } from '../../assets/dummyData.js';
import { StatusPart } from '../StatusPart/StatusPart.jsx';
import { FilterOptions } from '../FilterOptions/FilterOptions.jsx';
import { useState } from 'react';
import './Page.css';

export const Page = () => {
  const [openIssues, setOpenIssues] = useState(openIssuesData);
  const [closedIssues, setClosedIssues] = useState(closedIssuesData);
  const [isOpenSelected, setIsOpenSelected] = useState(true);
  return (
    <div>
      <div className='page_header'>
        <StatusPart
          isOpenSelected={isOpenSelected}
          setIsOpenSelected={setIsOpenSelected}
          openIssues={openIssues}
          closedIssues={closedIssues}
        />
        <FilterOptions />
      </div>
      <div></div>
    </div>
  );
};
