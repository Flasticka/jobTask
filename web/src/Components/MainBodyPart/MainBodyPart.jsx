import { Page } from '../Page/Page';
import { PaginationBar } from '../PaginationBar/PaginationBar';
import './MainBodyPart.css';

import { useState } from 'react';
export const MainBodyPart = ({ setIssue }) => {
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);
  const [displayIssuesLength, setDisplayIssuesLength] = useState(0);
  return (
    <div className='main-body-part-container'>
      <Page
        selectedPageNumber={selectedPageNumber}
        setSelectedPageNumber={setSelectedPageNumber}
        setDisplayIssuesLength={setDisplayIssuesLength}
        setIssue={setIssue}
      />
      <PaginationBar
        selectedPageNumber={selectedPageNumber}
        setSelectedPageNumber={setSelectedPageNumber}
        displayIssuesLength={displayIssuesLength}
      />
    </div>
  );
};
