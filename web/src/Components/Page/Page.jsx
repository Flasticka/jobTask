import { openIssuesData } from '../../assets/dummyData.js';
import { closedIssuesData } from '../../assets/dummyData.js';
import { StatusPart } from '../StatusPart/StatusPart.jsx';
import { FilterOptions } from '../FilterOptions/FilterOptions.jsx';
import { Issue } from '../Issue/Issue.jsx';
import { useState } from 'react';
import './Page.css';
import { useEffect } from 'react';

export const Page = ({
  selectedPageNumber,
  setSelectedPageNumber,
  setDisplayIssuesLength,
  setIssue,
}) => {
  const [openIssues] = useState(openIssuesData);
  const [closedIssues] = useState(closedIssuesData);
  const [displayIssuesState, setDisplayIssuesState] = useState([]);
  const [displayIssuesOrder, setDisplayIssuesOrder] = useState([]);
  const [displayIssuesPage, setDisplayIssuesPage] = useState([]);
  const [isOpenSelected, setIsOpenSelected] = useState(true);
  const [orderType, setOrderType] = useState('issue-number');

  useEffect(() => {
    if (isOpenSelected) {
      setDisplayIssuesState(openIssues);
    } else {
      setDisplayIssuesState(closedIssues);
    }
    setOrderType('issue-number');
    setSelectedPageNumber(1);
  }, [isOpenSelected, openIssues, closedIssues, setSelectedPageNumber]);
  useEffect(() => {
    setDisplayIssuesLength(displayIssuesState.length);
  }, [displayIssuesState, setDisplayIssuesLength]);

  useEffect(() => {
    if (orderType === 'issue-number') {
      setDisplayIssuesOrder(displayIssuesState);
    }
    if (orderType === 'least-commented') {
      setDisplayIssuesOrder(
        [...displayIssuesState].sort(
          (a, b) => a.commentsCount - b.commentsCount
        )
      );
    }
    if (orderType === 'most-commented') {
      setDisplayIssuesOrder(
        [...displayIssuesState].sort(
          (b, a) => a.commentsCount - b.commentsCount
        )
      );
    }

    setSelectedPageNumber(1);
  }, [orderType, displayIssuesState, setSelectedPageNumber]);

  useEffect(() => {
    setDisplayIssuesPage(
      displayIssuesOrder.slice(
        5 * (selectedPageNumber - 1),
        5 * (selectedPageNumber - 1) + 5
      )
    );
  }, [selectedPageNumber, displayIssuesOrder]);

  return (
    <div className='page-container'>
      <div className='page_header'>
        <StatusPart
          isOpenSelected={isOpenSelected}
          setIsOpenSelected={setIsOpenSelected}
          openIssues={openIssues}
          closedIssues={closedIssues}
        />
        <FilterOptions orderType={orderType} setOrderType={setOrderType} />
      </div>
      <div className='page_body'>
        {displayIssuesPage.map((issue) => (
          <Issue issue={issue} setIssue={setIssue} />
        ))}
      </div>
    </div>
  );
};
