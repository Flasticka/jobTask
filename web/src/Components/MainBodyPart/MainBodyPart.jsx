import { Page } from '../Page/Page';
import { PaginationBar } from '../PaginationBar/PaginationBar';
import './MainBodyPart.css';

import { useState } from 'react';
export const MainBodyPart = () => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className='main-body-part-container'>
      <Page />
      <PaginationBar />
    </div>
  );
};
