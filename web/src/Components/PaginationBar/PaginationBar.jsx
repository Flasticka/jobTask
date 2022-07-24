import './PaginationBar.css';
export const PaginationBar = ({
  selectedPageNumber,
  setSelectedPageNumber,
  displayIssuesLength,
}) => {
  const pages = Math.ceil(displayIssuesLength / 5);
  const firstLastElement =
    selectedPageNumber === 1 || selectedPageNumber === pages
      ? selectedPageNumber === 1
        ? 1
        : -1
      : 0;
  return (
    <div className='pagination-bar-container'>
      <button
        onClick={() => {
          setSelectedPageNumber(selectedPageNumber - 1);
        }}
        className='browsing-buttons'
        disabled={selectedPageNumber === 1}
      >
        {
          <>
            <span>{'<'}</span>
            <span>Previous</span>
          </>
        }
      </button>
      <button
        className={selectedPageNumber === 1 ? 'current-page' : ''}
        onClick={() => setSelectedPageNumber(1)}
      >
        1
      </button>
      {((selectedPageNumber >= pages - 2 && pages !== 4) ||
        selectedPageNumber - 1 > 2) && <span>...</span>}
      {selectedPageNumber + firstLastElement - 1 > 1 && (
        <button
          className={
            selectedPageNumber === selectedPageNumber + firstLastElement - 1
              ? 'current-page'
              : ''
          }
          onClick={() =>
            setSelectedPageNumber(selectedPageNumber + firstLastElement - 1)
          }
        >
          {selectedPageNumber + firstLastElement - 1}
        </button>
      )}
      {selectedPageNumber + firstLastElement > 1 &&
        selectedPageNumber + firstLastElement < pages && (
          <button
            className={
              selectedPageNumber === selectedPageNumber + firstLastElement
                ? 'current-page'
                : ''
            }
            onClick={() =>
              setSelectedPageNumber(selectedPageNumber + firstLastElement)
            }
          >
            {selectedPageNumber + firstLastElement}
          </button>
        )}
      {selectedPageNumber + firstLastElement + 1 < pages && (
        <button
          className={
            selectedPageNumber === selectedPageNumber + firstLastElement + 1
              ? 'current-page'
              : ''
          }
          onClick={() =>
            setSelectedPageNumber(selectedPageNumber + firstLastElement + 1)
          }
        >
          {selectedPageNumber + firstLastElement + 1}
        </button>
      )}
      {((selectedPageNumber <= 3 && pages !== 4) ||
        selectedPageNumber + 1 < pages - 1) && <span>...</span>}
      {pages !== 1 && (
        <button
          className={selectedPageNumber === pages ? 'current-page' : ''}
          onClick={() => setSelectedPageNumber(pages)}
        >
          {pages}
        </button>
      )}
      <button
        className='browsing-buttons'
        disabled={selectedPageNumber === pages}
        onClick={() => {
          setSelectedPageNumber(selectedPageNumber + 1);
        }}
      >
        {
          <>
            <span>Next</span>
            <span>{'>'}</span>
          </>
        }
      </button>
    </div>
  );
};
